import Main from "./main/index.svelte";
import About from "./about/index.svelte";
export const routes= {
    '/' : Main,
    '/about' : About
}

export let about = "#/about";