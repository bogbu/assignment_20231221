<script lang="ts">
    import { InlineCalendar, Datepicker  } from 'svelte-calendar';
    const theme = {
        calendar: {
            colors: {
                background: {
                    highlight :'#797EF6'
                }
            }

        }
    };
    let anotherStore :any;
    export let date = new Date();
</script>

<div>
    <Datepicker {theme} bind:selected={date}/>
</div>