<script lang="ts">
  export let items: string[];
  const bgColor =
    {
      crisp: "#fff793",
      coating: "#eeffde",
      "black-tea": "#983924",
      peanut: "#e6e6e6",
    };

  const textColor =
    {
      crisp: "#000",
      coating: "#000",
      "black-tea": "#fff",
      peanut: "#000",
    };
</script>

<div class="pills">
  {#each items as item}
    <span class="pill" style:background-color={bgColor[item] ?? "#983924"} style:color={textColor[item] ?? "#fff"}>{item}</span>
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
