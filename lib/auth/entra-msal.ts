import { ConfidentialClientApplication, CryptoProvider, LogLevel } from "@azure/msal-node";
import { entraConfig } from "./entra-config";

let client: ConfidentialClientApplication | null = null;
let clientAuthorityKey = "";

export function getMsalClient(): ConfidentialClientApplication {
  if (!entraConfig.isConfigured) {
    throw new Error(
      "Entra is not configured. Set AZURE_EXT_TENANT_ID, AZURE_EXT_CLIENT_ID, AZURE_EXT_CLIENT_SECRET.",
    );
  }

  const authorityKey = entraConfig.authority;
  if (!client || clientAuthorityKey !== authorityKey) {
    const isProduction = process.env.NODE_ENV === "production";
    client = new ConfidentialClientApplication({
      auth: {
        clientId: entraConfig.clientId,
        authority: entraConfig.authority,
        clientSecret: entraConfig.clientSecret,
        ...(entraConfig.knownAuthorities.length > 0
          ? { knownAuthorities: entraConfig.knownAuthorities }
          : {}),
      },
      system: {
        loggerOptions: {
          logLevel: isProduction ? LogLevel.Warning : LogLevel.Error,
          piiLoggingEnabled: false,
          loggerCallback: (_level, message) => {
            if (!isProduction) console.log("[msal]", message);
          },
        },
      },
    });
    clientAuthorityKey = authorityKey;
  }
  return client;
}

export const cryptoProvider = new CryptoProvider();
