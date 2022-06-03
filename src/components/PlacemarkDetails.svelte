<script>
  export let placemark;
  import {push} from "svelte-spa-router";
  import WelcomeMenu from "../components/WelcomeMenu.svelte"
  import {getContext} from "svelte";
  import {user} from "../stores";

  const placemarkService = getContext("PlacemarkService")
  let userScope = [];
  let errorMessage = "";

  async function deletePlacemark() {
    let success = await placemarkService.deletePlacemark(placemark._id)
    if (success) {
      user.subscribe(user => {userScope = user.scope});
      push(userScope.includes("admin")?"/admin":"/dashboard");
    } else {
      errorMessage = "Error deleting placemark";
    }
  }
</script>

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
          <a href="/#/placemark/editplacemark/{placemark._id}" class="ui icon button">
           <i class="fas fa-edit"></i>
          </a>
        </td>
        <td>
          <div on:click={deletePlacemark} class="ui icon button">
            <i class="fas fa-trash"></i>
          </div>
        </td>
      </tr>
  </tbody>
</table>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}