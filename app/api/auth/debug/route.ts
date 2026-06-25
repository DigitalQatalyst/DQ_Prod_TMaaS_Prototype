import { NextRequest, NextResponse } from "next/server";
import { entraConfig, resolveRedirectUri } from "@/lib/auth/entra-config";

export const runtime = "nodejs";

/** Dev-only helper to verify OAuth settings match the Entra app registration. */
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const origin = request.nextUrl.origin;

  return NextResponse.json({
    configured: entraConfig.isConfigured,
    tenantId: entraConfig.tenantId,
    clientId: entraConfig.clientId,
    ciamDomain: entraConfig.ciamDomain,
    userFlow: entraConfig.userFlowPolicy,
    authority: entraConfig.authority,
    redirectUriForThisRequest: resolveRedirectUri(origin),
    productionRedirectUri: entraConfig.redirectUri,
    localRedirectUri: entraConfig.localRedirectUri,
    checklist: [
      "Switch Entra admin center to the External ID tenant (dqproddev / 2d664c1c-...).",
      "Open App registrations and confirm Application (client) ID matches clientId above.",
      "Authentication > Web platform must include redirectUriForThisRequest exactly.",
      "External Identities > User flows > TMaaS_CustomerSignUpSignIn > Applications must include this app.",
    ],
  });
}
