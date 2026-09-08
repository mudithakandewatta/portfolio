/**
 * Builds a lookup from filename (without extension) to resolved asset URL,
 * so data files can reference an image by slug alone — drop in a .png, .jpg,
 * .jpeg, .webp, or .svg with the same name and it's picked up automatically.
 */
export function createImageResolver(modules: Record<string, string>) {
  const map = new Map<string, string>()
  for (const path in modules) {
    const filename = path.split('/').pop() ?? ''
    const key = filename.replace(/\.(png|jpe?g|webp|svg)$/i, '')
    map.set(key, modules[path])
  }
  return (key: string) => map.get(key) ?? ''
}
