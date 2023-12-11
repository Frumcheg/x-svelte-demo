<script lang="ts">
  export let onclick: (e: MouseEvent) => void;
  export let loading: boolean;
</script>

<button class="button" class:loading on:click={onclick} disabled={loading} />

<style lang="less">
  .button {
    background: #ef4724;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "+";
      font-size: 32px;
      display: block;
    }

    &:hover {
      background: #d23f1e;
      transition: background-color 0.3s;
    }

    &:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 2px #fff,
        0 0 0 4px #ef4724;
    }
  }

  .loading {
    animation-name: rotation;
    transform-origin: center;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>
