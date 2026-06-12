import type { Connect } from "vite";
import type { Plugin } from "vite";
import contactHandler from "../api/contact.js";

const CONTACT_API_ENV_KEYS = [
  "MSGRAPH_TENANT_ID",
  "MSGRAPH_CLIENT_ID",
  "MSGRAPH_CLIENT_SECRET",
  "MSGRAPH_SENDER_UPN",
  "MSGRAPH_RECIPIENT_EMAIL",
  "TURNSTILE_SECRET_KEY",
] as const;

function readJsonBody(req: Connect.IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      if (!data) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

type MockResponse = {
  statusCode: number;
  setHeader: (key: string, value: string) => MockResponse;
  status: (code: number) => MockResponse;
  json: (data: unknown) => MockResponse;
  end: () => MockResponse;
};

function createMockResponse(res: Connect.ServerResponse): MockResponse {
  const mock: MockResponse = {
    statusCode: 200,
    setHeader(key, value) {
      res.setHeader(key, value);
      return this;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      res.statusCode = this.statusCode;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      return this;
    },
    end() {
      res.statusCode = this.statusCode || 204;
      res.end();
      return this;
    },
  };
  return mock;
}

export function contactApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: "contact-api-dev",
    configureServer(server) {
      for (const key of CONTACT_API_ENV_KEYS) {
        const value = env[key];
        if (value) {
          process.env[key] = value;
        }
      }

      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split("?")[0];
        if (pathname !== "/api/contact") {
          next();
          return;
        }

        try {
          const body =
            req.method === "POST" || req.method === "PUT" || req.method === "PATCH"
              ? await readJsonBody(req)
              : {};

          const mockReq = {
            method: req.method,
            headers: req.headers,
            body,
          };
          const mockRes = createMockResponse(res);
          await contactHandler(mockReq, mockRes);
        } catch (error) {
          console.error("[contact-api-dev] middleware error:", error);
          if (!res.writableEnded) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                ok: false,
                error:
                  "An unexpected error occurred. Please try again or email us at info@digitalqatalyst.com.",
              })
            );
          }
        }
      });
    },
  };
}
