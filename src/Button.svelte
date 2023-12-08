<script lang="ts">
  export let onclick: (e: MouseEvent) => void;
</script>

<button class="button" on:click={onclick}>+</button>

<style lang="less">
  .button {
    background: #ef4724;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    color: #fff;
    cursor: pointer;
  }
</style>