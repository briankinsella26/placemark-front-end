<script>
  import {getContext, onMount} from 'svelte'
  import PlacemarkDetails from "../../components/PlacemarkDetails.svelte"
  import PlacemarkImage from "../../components/PlacemarkImage.svelte"
  import Menu from "../../components/menu.svelte"
  import { user } from '../../stores.js'
  import MenuAdmin from '../../components/MenuAdmin.svelte'

  export let params = {}
  const placemarkService = getContext("PlacemarkService");
  let placemark = {};
  let userScope = [];
  let placemarkImages = [];

  onMount(async () => {
    let id = params.id
    placemark = await placemarkService.getPlacemarkById(id);
    placemark = placemark.data;
    user.subscribe(user => {userScope = user.scope});
    placemarkImages = placemark.img
    console.log(placemarkImages)
  });
</script>

{#if userScope.includes("admin") }
  <MenuAdmin/>
{:else}
  <Menu/>
{/if}
<section>
  <div class="column has-text-centered">
    <h1 class="title">Placemark Details</h1>
    <br>
    <PlacemarkDetails placemark={placemark} />
  </div>
  <br>
  <br>
  <br>
  <PlacemarkImage {placemark} {placemarkImages}/>
</section>

