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
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Pills from "src/Pills.svelte";

  export let data: CoffeeData;
  const { blend_name, origin, variety, intensifier, notes, id } = data;
  const domId = `card-${id}`;

  onMount(() => {
    document.getElementById(domId)?.scrollIntoView({ behavior: "smooth" });
  });
</script>

<div class="card" id={domId}>
  <div class="intensifier">{intensifier}</div>
  <img class="image" src={`${IMG_URL}?lock=${id}`} alt={blend_name} />
  <div class="content">
    <div class="origin">{origin}</div>
    <div class="name">{blend_name}</div>
    <div class="variety">{variety}</div>
    <Pills items={notes.split(", ")} />
  </div>
</div>

<style lang="less">
  .card {
    max-width: 400px;
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
    object-fit: cover;
    aspect-ratio: 4 / 3;
    min-height: 300px;
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
