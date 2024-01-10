<script lang="ts">
    import type {MouseEventHandler} from "svelte/elements";

    export let size: String | 'small' | 'normal' | 'large' = 'normal';
    export let variant: String | 'primary' | 'secondary' | 'neutral' = 'primary';
    export let inverted = false;
    export let outline = false;
    export let flat = false;
    export let disabled = false;
    export let rounded = false;
    export let color = "";
    export let onclick = () => {
    };

</script>

<button
        class="{variant} {size} {color}"
        class:inverted
        class:outline
        class:flat
        class:disabled
        class:rounded
        on:click={onclick}
        on:focus
        on:submit>
    <slot/>
</button>

<style lang="scss">
    button {
      flex:1 1 auto;
      height: 100%;
    }
</style>
