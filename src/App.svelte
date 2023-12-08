<script lang="ts">
  import { onMount } from "svelte";
  import { initIdleTracker } from "src/activityTracker.svelte";
  import CoffeeCard, { CoffeeData } from "src/CoffeeCard.svelte";
  import Button from "src/Button.svelte";

  type Status = "idle" | "loading" | "success" | "error"
  let status: Status = "idle";

  const api = {
    getCoffee: async (): Promise<CoffeeData> => {
      const res = await fetch("https://random-data-api.com/api/coffee/random_coffee");
      return await res.json();
    },
  };
  let data: CoffeeData[] = [];

  function loadItem() {
    if (status === "loading") return;
    status = "loading";
    api.getCoffee().then((item) => {
      data.push(item);
      data = data
      status = "success";
    }, () => {
      status = "error";
    });
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
      <CoffeeCard data={item}/>
    {/each}
    {#if status === "loading"}
      <div>Loading...</div>
    {:else}
      <Button onclick={loadItem}/>
    {/if}
  </div>
</main>

<style lang="less">
  :global(body) {
    padding: 0;
  }

  .section {
    background-color: #050038;
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
    padding: 32px;
    min-height: 100vh;

    @media (min-width: 640px) {
      max-width: none;
    }
  }

  .title {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
    padding-bottom: 32px;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/the-new-css-reset@1.11.2/css/reset.css"/>
</svelte:head>
