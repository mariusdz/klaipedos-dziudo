// Simple admin configuration
// NOTE: This is client-side only — not truly secure against determined attackers,
// but sufficient for basic content management protection.

export const ADMIN_PASSWORD_HASH = '21232f297a57a5a743894a0e4a801fc3' // md5 of 'admin'

function md5(input: string): string {
  // Simple non-crypto hash for basic protection
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(16)
}

export function verifyPassword(input: string): boolean {
  return md5(input) === ADMIN_PASSWORD_HASH
}
