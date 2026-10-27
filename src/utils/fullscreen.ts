/** Enter browser fullscreen after a user gesture (cover tap). */
export async function enterFullscreen(): Promise<void> {
  try {
    const root = document.documentElement
    if (document.fullscreenElement) return

    const req =
      root.requestFullscreen?.bind(root) ??
      // Safari / older WebKit
      (
        root as HTMLElement & {
          webkitRequestFullscreen?: () => Promise<void> | void
        }
      ).webkitRequestFullscreen?.bind(root)

    if (!req) return
    await Promise.resolve(req())
  } catch {
    /* iOS Safari and some in-app browsers block fullscreen — ignore */
  }
}

export async function exitFullscreen(): Promise<void> {
  try {
    if (!document.fullscreenElement) return
    const doc = document as Document & {
      webkitExitFullscreen?: () => Promise<void> | void
    }
    const exit =
      document.exitFullscreen?.bind(document) ??
      doc.webkitExitFullscreen?.bind(document)
    if (!exit) return
    await Promise.resolve(exit())
  } catch {
    /* ignore */
  }
}
