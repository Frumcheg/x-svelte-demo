<script lang="ts">
  import { getColor } from "src/pillColor";

  export let items: string[];
</script>

<div class="pills">
  {#each items as item, index}
    {@const colors = getColor(index)}
    <span
      class="pill"
      style:background-color={colors.primary}
      style:color={colors.secondary}>{item}</span
    >
  {/each}
</div>

<style lang="less">
  .pills {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: -16px;

    &::-webkit-scrollbar {
      display: none;
    }

    &:hover {
      animation-name: swing;
      animation-duration: 0.3s;
      animation-iteration-count: 2;
    }
  }

  .pill {
    display: inline-block;
    font-size: 14px;
    padding: 4px 24px;
    border-radius: 8px;

    &:not(&last-child) {
      margin-right: 10px;
    }
  }

  @keyframes swing {
    from {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-5px);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
