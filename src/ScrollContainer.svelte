<script lang="ts">
  export let cssClass: string = '';
</script>

<div class={`scroll-container ${cssClass}`}>
  <slot/>
</div>

<style lang="less">
    .scroll-container {
        overflow: hidden;

      &:hover {
        animation-name: swing;
        animation-duration: 0.3s;
        animation-iteration-count: 2;
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