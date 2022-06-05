<script>
  import {getContext} from "svelte";
  import {push} from "svelte-spa-router";
  export let placemark;
  import ImageCarousel from "../components/ImageCarousel.svelte"

  const placemarkService = getContext("PlacemarkService")
  let errorMessage = "";
  let fileinput;
  var base64result;
	
	const onFileSelected = async (e) =>{
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async e => {
      base64result = e.target.result.toString().split(',')[1];
      await placemarkService.uploadImage(placemark._id, base64result);
      push(`/placemark/${placemark._id}`);
    };
  }
	
</script>

<div id="app">
  <img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
  <div class="chan" on:click={()=>{fileinput.click();}}>Upload Image</div>
  <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
</div>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}

<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
  }
 
	.upload{
		display:flex;
	  height:50px;
		width:50px;
		cursor:pointer;
	}
</style>  