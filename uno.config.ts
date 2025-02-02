import {defineConfig, presetWind} from 'unocss'

export default defineConfig({
    presets: [
        presetWind({
            important: '#__nuxt',
        })
    ],
})
