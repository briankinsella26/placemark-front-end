<script>
  import {getContext, onMount} from 'svelte'

  const placemarkService = getContext("PlacemarkService");
  let analytics = {};
  let placemarks = [];

  onMount(async () => {
    analytics = await placemarkService.getAnalytics();
    placemarks = analytics.placemarks
  });

</script>

<section>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Category</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each placemarks as placemark}
        <tr>
          <td>
            {placemark.name}
          </td>
          <td>
            {placemark.description}
          </td>
          <td>
            {placemark.category}
          </td>
          <td>
            {placemark.latitude}
          </td>
          <td>
            {placemark.longitude}
          </td>
          <td>
            <a href="/#/placemark/{placemark._id}" class="ui icon button">
            <i class="fas fa-binoculars"></i>
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
