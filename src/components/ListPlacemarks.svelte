<script>
  import {getContext, onMount} from 'svelte'
  import {user, categoryList} from "../stores";
  let categories = [];
  let selected;

  const placemarkService = getContext("PlacemarkService");
  let placemarkList = [];
  let userId;

  onMount(async () => {
    user.subscribe(user => {userId = user.id})
    categoryList.subscribe(categoryList => {categories = categoryList})
    placemarkList = await placemarkService.getUserPlacemarks(userId);
    selected = "All";
  });

  async function filter() {
    placemarkList = await placemarkService.getUserPlacemarks(userId, selected);
  }
</script>

<section>
  <div class="container">
    <div class="columns is-centered">
      Select category
    </div>
  </div>
  <br>
  <br>
  <div class="container">
    <div class="columns is-centered">
      <select id="filter" bind:value={selected} on:change={filter}>
        {#each categories as category}
        <option value={category.value}>
          {category.value}
        </option>
      {/each}
      </select>
    </div>
  </div>
  <br>
  <br>
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
      {#each placemarkList as placemark}
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
