<script lang="ts">
  export let name: string
  const bgColor = {
    crisp: "#fff793",
    coating: "#eeffde",
    "black-tea": "#983924",
    peanut: "#e6e6e6"
  }[name] ?? "#983924"

  const textColor = {
    crisp: "#000",
    coating: "#000",
    "black-tea": "#fff",
    peanut: "#000"
  }[name] ?? "#fff"
</script>

<span class="pill" style:background-color={bgColor} style:color={textColor}>{name}</span>

<style lang="less">
  .pill {
    display: inline-block;
    font-size: 14px;
    padding: 0 8px;
    border-radius: 4px;

    &:not(&last-child) {
      margin-right: 10px;
    }
  }
</style>