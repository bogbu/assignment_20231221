<script>
    export let cardColor = "";
    export let img = "";
    export let isWidth = false;
</script>

<article class="{cardColor} {isWidth}">
    <div class="imgSection">
        <img src={img} alt={img}/>
    </div>
    <div class="textSection">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="text">
            <slot name="text"></slot>
        </div>
    </div>
</article>

<style lang="scss">
  article {
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 939px) {
      &.false, &.true {
        display: flex;
        flex-direction: row;

        .textSection {
          width: 200px;
          height: 300px;
          .title {
            font-size: 15px;
            font-weight: bold;
          }
          .text {
            font-size: 13px;
          }
        }

        .imgSection {
          //width: 100%;
        }
      }
    }
    .textSection {
      padding: 10px 20px;
      box-sizing: border-box;
      text-align: start;

      .title {
        font-size: 19px;
        font-weight: bold;

      }
    }
    @media (min-width: 940px) {
      .textSection {
        height: 200px;
      }
      &:first-child {
        grid-column: 1/3;
        grid-row: 1 / 4
      }
      &:nth-child(3) {
        grid-column: 3/4;
        grid-row: 2/4
      }

      &:nth-child(4) {
        grid-column: 1/2;
        grid-row: 4/6
      }

      &:nth-child(5) {
        grid-column: 2/3;
        grid-row: 4/6
      }

      &:nth-child(6) {
        grid-column: 3/4;
        grid-row: 4/6
      }

    }


    &.true {
      display: flex;
      flex-direction: row;

      .textSection {
        width: 150px;
        height: 150px;
      }

      .imgSection {
        //width: 100%;
      }
    }

    &.gray {
      background: #a4a4a4;
    }

    &.black {
      background: #313131;
      color: #fff;
    }

    &.blue {
      background: #3592f4;
      color: #fff;
    }

    &.red {
      background: #e3350d;
      color: #fff;
    }

    &.green {
      background: #4dad5b;
      color: #fff;
    }

    &.sand {
      background: #c7aa79;
      color: #fff;
    }

    .imgSection {
      flex: 1;
      width: 100%;
      height: 100%;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }


  }
</style>