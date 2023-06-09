import { addServerPlugin, createResolver } from '@nuxt/kit'

const resolver = createResolver(import.meta.url)

export default (options, nuxt) => addServerPlugin(resolver.resolve('./plugin.js'))
