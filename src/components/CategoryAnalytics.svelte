<script>
// @ts-nocheck

  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";

  const placemarkService = getContext("PlacemarkService");

  let categories = 
    [
      {value: "Natural World", count: 0}, 
      {value: "Family", count: 0}, 
      {value: "Hiking", count: 0}, 
      {value: "Cycling", count: 0},
      {value: "Historic", count: 0},
    ]

  let categoryTotalsData;

  function populateCounts(placemarks) {
    placemarks.forEach(placemark => {
      categories.forEach(category =>{
        if(category.value == placemark.category)
          category.count += 1
      })
    })
  }

  onMount(async () => {
    let placemarks = await placemarkService.getUserPlacemarks();
    populateCounts(placemarks);

    categoryTotalsData = {
      labels: ['Natural World', 'Family', 'Hiking', 'Cycling', 'Historic'],
      datasets: [
        {
          values: [categories[0].count, categories[1].count, categories[2].count, categories[3].count, categories[4].count]
        }
      ]
    };
  });

</script>
<div class="column box has-text-centered">
  <h1 class="title is-5">Placemark categories</h1>
  <Chart data={categoryTotalsData} type="bar" />
</div>