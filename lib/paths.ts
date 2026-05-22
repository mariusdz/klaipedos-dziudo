export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function assetPath(path: string): string {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('//')) {
    return path
  }
  const base = BASE_PATH.endsWith('/') ? BASE_PATH.slice(0, -1) : BASE_PATH
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${cleanPath}`
}
