function firstEnv(...keys: string[]): string {
  for (const key of keys) {
    const value = (process.env[key] ?? "").trim();
    if (value) return value;
  }
  return "";
}

export function getMsGraphCredentials():
  | { tenantId: string; clientId: string; clientSecret: string }
  | null {
  const tenantId = firstEnv("MSGRAPH_TENANT_ID", "AZURE_AD_TENANT_ID");
  const clientId = firstEnv("MSGRAPH_CLIENT_ID", "AZURE_AD_CLIENT_ID");
  const clientSecret = firstEnv("MSGRAPH_CLIENT_SECRET", "AZURE_AD_CLIENT_SECRET");

  if (!tenantId || !clientId || !clientSecret) return null;
  return { tenantId, clientId, clientSecret };
}

export function isMsGraphConfigured(): boolean {
  return getMsGraphCredentials() !== null;
}
