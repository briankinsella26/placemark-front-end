<script>

  export let placemark, placemarkImages;

  import {push} from "svelte-spa-router";
  import WelcomeMenu from "../components/WelcomeMenu.svelte"
  import {getContext} from "svelte";
  import {user} from "../stores";

  const placemarkService = getContext("PlacemarkService")

  async function deleteImage(imageId) {
    placemarkService.deleteImage(placemark._id, imageId);
  }

</script>

<div class="card">
  <div class="card-image">
    <figure class="image is-256x256">
      {#each placemarkImages as img}
        <img src={ img.url } alt="placemark">
        <div on:click|preventDefault={() => deleteImage(img.public_id)} class="ui icon button"> 
          <i class="fas fa-trash"></i>
        </div>
      {/each}
    </figure>
  </div>
</div>
