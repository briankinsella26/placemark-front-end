<script>
  export let placemarkImages;
</script>


<div class="gallery">
  <div class="gallery__container">
      {#each placemarkImages as image}
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src={image.url} height="100" />
      {/each}
  </div>
</div><style>
  .gallery {
      display: flex;
      overflow-x: auto;
      position: relative;
      width: 100%;
  }
  .gallery__container {
      display: flex;
  }
</style>