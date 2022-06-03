<script>
  import PlacemarkEditor from "../../components/PlacemarkEditor.svelte"
  import PlacemarkImageUpload from "../../components/PlacemarkImageUpload.svelte"
  import {getContext, onMount} from 'svelte'
  import Menu from "../../components/menu.svelte"
  import MenuAdmin from "../../components/MenuAdmin.svelte"
  import { user } from '../../stores'

  export let params = {}  
  let placemark = {};
  const placemarkService = getContext("PlacemarkService");
  let userScope = [];

  onMount(async () => {
    let id = params.id
    placemark = await placemarkService.getPlacemarkById(id);
    placemark = placemark.data;
    user.subscribe(user => {userScope = user.scope});
  });
</script>
{#if userScope.includes("admin")}
  <MenuAdmin/>
{:else}
  <Menu/>
{/if}
<section class="section">
  <PlacemarkEditor {placemark}/>
  <br>
  <br>
  <br>
  <div>
    <PlacemarkImageUpload {placemark} />
  </div>
</section>
