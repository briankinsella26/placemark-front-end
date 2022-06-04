<script>
  import {getContext, onMount, createEventDispatcher} from 'svelte'
  import {user} from "../stores";
  import {push} from "svelte-spa-router";
  import ListPlacemarks from "../components/ListPlacemarks.svelte"

  const placemarkService = getContext("PlacemarkService");
  const dispatch = createEventDispatcher();

  let userId;
  let name;
  let description;
  let category;
  let latitude;
  let longitude;
  let formEl;
  
  let errorMessage = "";

  onMount(async () => {
    user.subscribe(user => {userId = user.id})
  });


  async function addPlacemark() {
    let newPlacemark;
    newPlacemark = {
        userid: userId,
        name: name,
        description: description,
        category: category,
        latitude: latitude,
        longitude: longitude,

      };
    const success = await placemarkService.addPlacemark(newPlacemark);
    if (!success) {
      errorMessage = "Error adding new placemark";
      return;
    }

    dispatch("message", {
        placemark: newPlacemark,
      });
    }

    export function reset() {
      formEl.reset();
  }
</script>

<form on:submit|preventDefault={addPlacemark} bind:this={formEl}>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Enter Placemark Details:</label>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <input bind:value={name} class="input" type="text" placeholder="Enter Name" name="name">
      </div>
      <div class="field">
        <input bind:value={description} class="input" type="text" placeholder="Enter Description" name="description">
      </div>
      <div class="field"> 
        <input bind:value={category} class="input" type="text" name="category" list="categories" placeholder="Select Category"/>
          <datalist id="categories">
            <option>Historic</option>
            <option>Natural World</option>
            <option>Family</option>
            <option>Hiking</option>
            <option>Cycling</option>
          </datalist>
      </div>
      <div class="field">
        <input bind:value={latitude} class="input" type="float" placeholder="Enter Latitude" name="latitude">
      </div>
      <div class="field">
        <input bind:value={longitude} class="input" type="float" placeholder="Enter Longitude" name="longitude">
      </div>
    </div>
  </div>
  <button class="button is-primary">Add Placemark</button>
</form>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}