// Claude-generated: new tab page showing a build time that updates on
// every rebuild, including incremental rebuilds during `plasmo dev`
// (not just when the dev server first starts). See parcel-transformer-build-time.js
// and .parcelrc for how the value gets refreshed on every build.
import { useEffect } from 'react'
import buildTime from '../live-build-time.buildtime.js'

// Claude-generated: Plasmo's own HMR apply path (script-tag injection through
// __plasmo_hmr_proxy__ + React Refresh accept boundaries) doesn't reliably
// reach this page in the extension context, so instead of depending on it,
// poll this page's own bundled script for changes and force a real reload
// when its content differs from what's currently loaded.
function useReloadOnRebuild(intervalMs = 1000) {
  useEffect(() => {
    const scriptSrc = document.querySelector('script[src]')?.getAttribute('src')
    if (!scriptSrc) return

    let prevContent: string | null = null

    const checkForRebuild = async () => {
      try {
        const res = await fetch(scriptSrc, { cache: 'no-store' })
        const content = await res.text()
        if (prevContent === null) {
          prevContent = content
          return
        }
        if (content !== prevContent) location.reload()
      } catch {
        // dev server likely mid-rebuild; retry on the next tick
      }
    }

    const id = setInterval(checkForRebuild, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
}

function LiveBuildTime() {
  useReloadOnRebuild()

  return (
    <div>
      <p>Build time (live): {buildTime}</p>
    </div>
  )
}

export default LiveBuildTime
