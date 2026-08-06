// Claude-generated: custom Parcel transformer, forces a fresh build timestamp
// on every build (including incremental rebuilds during `plasmo dev`).
const { Transformer } = require('@parcel/plugin')

module.exports = new Transformer({
  async loadConfig({ config }) {
    // invalidateOnBuild() alone only forces loadConfig to re-run; Parcel still
    // caches transform() output by hashing loadConfig's return value, so an
    // unchanging return value (previously: none) meant the cached output from
    // the first build was reused forever. Returning Date.now() makes that hash
    // change every build, forcing transform() to actually re-run.
    config.invalidateOnBuild()
    return Date.now()
  },
  async transform({ asset }) {
    asset.type = 'js'
    asset.setCode(`module.exports = ${JSON.stringify(new Date().toString())}`)
    return [asset]
  }
})
