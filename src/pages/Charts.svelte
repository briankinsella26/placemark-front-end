<script>
  // @ts-nocheck
    import Menu from "../components/menu.svelte";
    import CategoryAnalytics from "../components/CategoryAnalytics.svelte"
    import CreateDataAnalysis from "../components/CreateDataAnalytics.svelte"
    import {onMount} from 'svelte'

    let selected;

    onMount(async () => {
      selected = "Select";
    });

    let charts = [
      {id: 1, value: "Select"}, 
      {id: 2, value: "Totals by Category"}, 
      {id: 3, value: "Totals by Month"}, 
    ]

</script>

<Menu/>
<br>
<br>
<section>
  <div class="container">
    <div class="columns is-centered">
      Select a chart
    </div>
  </div>
  <br>
  <br>
  <div class="container">
    <div class="columns is-centered">
      <select id="filter" bind:value={selected}>
        {#each charts as chart}
        <option value={chart.value}>
          {chart.value}
        </option>
      {/each}
      </select>
    </div>
</section>
<br>
<br>
<br>
<br>
<div class="columns">
  {#if selected == "Totals by Category"}
  <CategoryAnalytics/>
  {:else if selected == "Totals by Month"}
  <CreateDataAnalysis/>
  {:else}
  <br>
  {/if}
</div>
