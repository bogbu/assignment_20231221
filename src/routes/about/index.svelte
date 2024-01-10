<script lang="ts">
    import Layout from "../../components/layout.svelte";
    import {loopPokemonList} from "../../api/_get";
    import Card from "./components/card.svelte";
    import News from "./components/News.svelte";
    import type {PokemonDetail} from "../../interface/Res";
    import {newsList} from "./util/newsList";

    let pokemonViewList: PokemonDetail[] = [];
    let list = loopPokemonList().then((item) => {
        pokemonViewList = item;
    })

</script>
<Layout>
    <section slot="content">
        <h1 class="newsTitle">News</h1>
        <div class="newsSection">
            {#each newsList as list}
                <News img={list.src} isWidth={list.isWidth} cardColor={list.color}>
                    <h2 slot="title">
                        {list.title}
                    </h2>
                    <p slot="text">{list.text}</p>
                </News>
            {/each}
        </div>
        <h1 class="newsTitle">Pokémon data</h1>
        {#await list}
            <p>loading</p>
        {:then list}
            <div class="pokemonListGrid">
                {#each pokemonViewList as item}
                    <Card types={item.types}>
                        <img slot="img" src={item.sprites.front_default} alt="{item.name}"/>
                        <div slot="text">{item.name}</div>
                    </Card>

                {/each}
            </div>
        {:catch error}
            <p>데이터를 불러오지 못했습니다 {error}</p>
        {/await}
    </section>
</Layout>

<style lang="scss">
  .newsTitle {
    font-size: 30px;
    font-weight: bold;
    text-align: start;
    margin: 50px 0;
  }
  @media (max-width: 940px) {
    .newsSection {
      display: grid;
      grid-template-rows: repeat(6, 300px) !important;
      grid-template-columns: repeat(1, 1fr) !important;
      gap: 20px;
      margin-top: 20px;
    }
    .pokemonListGrid {
      display: grid;
      grid-template-rows: repeat(3, 1fr) !important;
      grid-template-columns: repeat(3, 1fr) !important;
      gap: 10px;
    }
  }
  .newsSection {
    display: grid;
    grid-template-rows: repeat(5, 150px);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  .pokemonListGrid {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
</style>