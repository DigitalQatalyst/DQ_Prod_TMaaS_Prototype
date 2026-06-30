export function buildServiceRequestReferenceNo(now = new Date()): string {
  const year = now.getFullYear();
  const suffix = Math.floor(Math.random() * 900 + 100);
  return `TM-${year}-${suffix}`;
}
