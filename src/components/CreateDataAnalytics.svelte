<script>
  // @ts-nocheck
  
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";

  const placemarkService = getContext("PlacemarkService");

  let months = [
      {value: "January", count: 0}, 
      {value: "February", count: 0}, 
      {value: "March", count: 0}, 
      {value: "April", count: 0}, 
      {value: "May", count: 0},
      {value: "June", count: 0},
      {value: "July", count: 0}, 
      {value: "August", count: 0}, 
      {value: "September", count: 0}, 
      {value: "October", count: 0},
      {value: "November", count: 0},
      {value: "December", count: 0},
    ]

  let monthData;

  function populateCounts(placemarks) {
    placemarks.forEach(placemark => {
      const date = new Date(placemark.createdate)
      const monthNumber = date.getMonth()
      months[monthNumber].count += 1
    })
  }

  onMount(async () => {
    let placemarks = await placemarkService.getUserPlacemarks();
    populateCounts(placemarks);

    monthData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          values: [months[0].count, months[1].count, months[2].count, months[3].count, months[4].count,
          months[5].count, months[6].count, months[7].count,months[8].count, months[9].count,
          months[10].count, months[11].count]
        }
      ]
    };
  });

</script>
  
<div class="column box has-text-centered">
  <h1 class="title is-5">Placemarks created</h1>
  <Chart data={monthData} type="pie" />
</div>
  