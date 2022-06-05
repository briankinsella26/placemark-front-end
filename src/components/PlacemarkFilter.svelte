<script>
  import {onMount} from 'svelte'; 
  import {categoryList} from "../stores";
  let categories = [];
  let selected;
  let answer = "";

  onMount(async () => {
    categoryList.subscribe(categoryList => {categories = categoryList})
  });

  function filter() {
    // "dashboard/filter?category=Hiking"
  }

</script>

  <select bind:value={selected} on:change={filter}>
    {#each categories as category}
    <option value={category.value}>
      {category.value}
    </option>
  {/each}
  </select>
