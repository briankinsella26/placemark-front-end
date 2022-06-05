<script>
  import {getContext} from "svelte";
  import {push} from "svelte-spa-router";

  export let placemark;
  const placemarkService = getContext("PlacemarkService")
  let errorMessage = "";

  async function update() {
    let success = await placemarkService.updatePlacemark(placemark);
    if (success) {
      push("/dashboard/");
    } else {
      errorMessage = "Error updating placemark";
    }
  }
</script>

<form on:submit|preventDefault={update}>
  <br/>
  <br/>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label for="name"><strong>Name</strong></label>
        <input autocomplete="false" class="input" type="text" value="{placemark.name}">
      </div>
      <div class="field">
        <label for="name"><strong>Description</strong></label>
        <input bind:value={placemark.description} autocomplete="false" class="input" type="text" name="description">
      </div>
      <div class="field">
        <label for="name"><strong>Category</strong></label>
        <input bind:value={placemark.category} autocomplete="false" class="input" type="text" name="category" list="categories"/>
          <datalist id="categories">
            <option>Historic</option>
            <option>Natural World</option>
            <option>Family</option>
            <option>Hiking</option>
            <option>Cycling</option>
          </datalist>
      </div>
      <div class="field">
        <label for="name"><strong>Latitude</strong></label>
        <input bind:value={placemark.latitude} autocomplete="false" class="input" type="float" name="latitude">
      </div>
      <div class="field">
        <label for="name"><strong>Latitude</strong></label>
        <input bind:value={placemark.longitude} autocomplete="false" class="input" type="float" name="longitude">
      </div>
    </div>
  </div>
  <button class="button is-primary">Update Placemark</button>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
