<script>

  export let placemarkImages, imageHeight = 150, deleteOption=false;
  import {getContext} from "svelte";
  import {push} from "svelte-spa-router";

  const placemarkService = getContext("PlacemarkService")

  async function deleteImage(placemarkId, imageId) {
    await placemarkService.deleteImage(placemarkId, imageId);
    push(`/placemark/${placemarkId}`);
  }
</script>
<div class="carousel">
  <div class="carousel__container">
      {#each placemarkImages as image}
        <div class="card">
          <img src={image.url} style={`height: ${imageHeight}px;`} alt="" />
          {#if deleteOption == true}
          <div on:click|preventDefault={() => deleteImage(image.tags[0].placemarkid, image.public_id)} class="ui icon button"> 
            <i class="fas fa-trash"></i>
          </div>  
          {/if}
        </div>
      {/each}
  </div>
</div>


<style>
  .carousel {
      display: flex;
      overflow-x: auto;
      position: relative;
      width: 100%;
  }
  .carousel__container {
      display: flex;
  }
  .card {
    padding: 20px;
    margin: 20px
  }
</style>