<script lang="ts">
  import { onMount } from "svelte";
  import { initIdleTracker } from "src/activityTracker.svelte";

  type Status = "idle" | "loading" | "success" | "error"
  let status: Status = "idle";

  interface CoffeeData {
    "id": number,
    "uid": string,
    "blend_name": string,
    "origin": string,
    "variety": string,
    "notes": string,
    "intensifier": string
  }

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

<main>
  <h1>Get Coffee!</h1>
  <div>
    {#each data as item}
      <div>{item.blend_name}</div>
    {/each}
    <button on:click={loadItem}>Load one more</button>
  </div>
</main>

<style lang="less">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;

    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }

    @media (min-width: 640px) {
      max-width: none;
    }
  }
</style>
