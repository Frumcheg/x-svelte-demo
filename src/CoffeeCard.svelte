<script lang="ts" context="module">
  export interface CoffeeData {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
  }

  const IMG_URL = "https://loremflickr.com/500/500/coffee_bean";

  let cardId = 1;

  export function nextId() {
    return cardId++;
  }
</script>

<script lang="ts">
  import Pill from "src/Pill.svelte";
  import { onMount } from "svelte";
  import ScrollContainer from "src/ScrollContainer.svelte";

  export let data: CoffeeData;
  export let id: number;
  const { blend_name, origin, variety, intensifier, notes } = data;

  onMount(() => {
    document
      .getElementById(`card-${id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  });
</script>

<div class="card" id={`card-${id}`}>
  <div class="intensifier">{intensifier}</div>
  <img class="image" src={`${IMG_URL}?lock=${id}`} alt={blend_name} />
  <div class="content">
    <div class="origin">{origin}</div>
    <div class="name">{blend_name}</div>
    <div class="variety">{variety}</div>
    <ScrollContainer cssClass="pills-wrapper">
      <div class="pills">
        {#each notes.split(", ") as item}
          <Pill name={item} />
        {/each}
      </div>
    </ScrollContainer>
  </div>
</div>

<style lang="less">
  .card {
    max-width: 300px;
    margin: 0 auto 20px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    text-align: left;
    background-color: gray;
    word-break: break-word;
  }

  .intensifier {
    position: absolute;
    right: 16px;
    top: 4px;
    color: white;
    font-weight: bold;
    font-size: 32px;
    text-shadow: 0 0 11px black;
  }

  .content {
    background-color: #fff;
    padding: 16px;
  }

  .image {
    display: block;
    max-width: 100%;
    min-height: 300px;
  }

  .pills {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }

  :global(.pills-wrapper) {
    height: 22px;
    margin-right: -16px;
    margin-bottom: -2px;
  }

  .origin {
    font-size: 16px;
    margin-bottom: 4px;
    color: #999;
  }

  .name {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .variety {
    font-size: 16px;
    margin-bottom: 16px;
  }
</style>
