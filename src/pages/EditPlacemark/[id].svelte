<script>
  import PlacemarkEditor from "../../components/PlacemarkEditor.svelte"
  import PlacemarkImageUpload from "../../components/PlacemarkImageUpload.svelte"
  import {getContext, onMount} from 'svelte'
  import Menu from "../../components/Menu.svelte"
  import MenuAdmin from "../../components/MenuAdmin.svelte"
  import { user } from '../../stores'
  import ImageCarousel from "../../components/ImageCarousel.svelte"

  export let params = {}  
  let placemark = {};
  const placemarkService = getContext("PlacemarkService");
  let userScope = [];
  let placemarkImages = [];

  onMount(async () => {
    let id = params.id
    placemark = await placemarkService.getPlacemarkById(id);
    placemark = placemark.data;
    placemarkImages = placemark.img
    user.subscribe(user => {userScope = user.scope});
  });
</script>
{#if userScope.includes("admin")}
  <MenuAdmin/>
{:else}
  <Menu/>
{/if}
<section class="section">
  <div class="column has-text-centered">
    <h1 class="title">Edit your placemark</h1>
    <PlacemarkEditor {placemark}/>
    <br>
    <br>
    <ImageCarousel bind:placemarkImages imageHeight={200} deleteOption={true}/>
    <PlacemarkImageUpload bind:placemark />
  </div>
</section>
