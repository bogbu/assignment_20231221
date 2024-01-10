import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer'

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    plugins: [tailwind(tailwindConfig), autoprefixer]
}
