<script>
    export let value = "";
    export let borderColor = "";
    export let placeholder = "";
</script>

<input class={`input ${borderColor}`} type="text" bind:value={value} placeholder={placeholder}/>

<style lang="scss">
  input {
    flex: 2;
    width: 100%;
    display: block;
    height: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #fff;
    &.red {
      border: 1px solid #FA8072;
    }
    &.blue {
      border: 1px solid #797EF6;
    }
  }
</style>