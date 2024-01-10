<script lang="ts">
    import type {PokemonType} from "../../../interface/Res";

    export let types : PokemonType[] = [];
</script>
<article>
    <div class="imgSection">
        <slot name="img"></slot>
    </div>
    <div class="textSection">
        <slot name="text"></slot>
    </div>
    <div class="typeSection">
        {#each types as type}
        <p class={`${type.type.name}`}>{type.type.name}</p>
        {/each}
    </div>
</article>

<style lang="scss">
    article {
      width: 100%;
      height: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .imgSection {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .textSection {
        width: 100%;
        height: 50px;
        padding: 10px;
        box-sizing: border-box;
      }
      .typeSection {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        & > p {
          padding: 3px 7px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          font-size: 12px;
          color: #fff;
          &.grass {
            background: green;
          }
          &.poison {
            background: purple;
          }
          &.normal {
            background: gray;
          }
          &.flying {
            background: lightskyblue;
          }
          &.bug {
            background: yellowgreen;
          }
          &.fire {
            background: red;
          }
          &.water {
            background: blue;
          }
        }
      }
    }
</style>