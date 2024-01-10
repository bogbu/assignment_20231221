<script lang="ts">
    import {link} from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'
    import {routerList} from "./utils/routerList";
</script>

<header>
    <div class="logo">
        <a href="/">
            <img src="https://assets.pokemon.com/assets/cms2-en-uk/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="site_slug" class="gus-bounce">
        </a>
    </div>
    <ul class="gnb">
        {#each routerList as item}
            <li>
                <a href={item.link} use:link use:active>
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
</header>

<div class="content">
    <slot name="content"></slot>
</div>

<footer>
    <slot name="footer">푸터</slot>
</footer>

<style lang="scss">
  :global(a.active) {
    //color: #FA8072;
    font-weight: bold;
  }

  header {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //position: ;
    .gnb {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      height: 60px;
      & > li {
        width: 100%;
        height: 100%;
        & > a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          border: 1px solid transparent;
          transition: 0.25s;
          &:hover {
            border: 1px solid #797EF6;
            border-radius: 10px;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    min-height: 100vh;
  }
</style>
