<script lang="ts">
  import { onMount } from "svelte";
  import { initIdleTracker } from "src/idleTracker";
  import CoffeeCard, { CoffeeData } from "src/CoffeeCard.svelte";
  import Button from "src/Button.svelte";
  import { getCoffee } from "src/api";

  type Status = "idle" | "loading";
  let status: Status = "idle";
  let data: CoffeeData[] = [];

  function loadItem() {
    if (status === "loading") return;
    status = "loading";
    getCoffee().then(
      (item) => {
        data.push(item);
        data = data;
        status = "idle";
      }
    );
  }

  onMount(() => {
    loadItem();
    initIdleTracker(loadItem);
  });
</script>

<main class="section">
  <h1 class="title">Get Coffee!</h1>
  <div>
    {#each data as item}
      <CoffeeCard data={item} />
    {/each}
    <Button onclick={loadItem} loading={status === "loading"} />
  </div>
</main>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/the-new-css-reset@1.11.2/css/reset.css"
  />
</svelte:head>

<style lang="less">
  .section {
    background-color: #050038;
    text-align: center;
    margin: 0 auto;
    padding: 32px;
    min-height: 100vh;
  }

  .title {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
    padding-bottom: 32px;
  }
</style>
