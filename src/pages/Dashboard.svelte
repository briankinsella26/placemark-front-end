<script>
  import ListPlacemarks from "../components/ListPlacemarks.svelte"
  import AddPlacemark from "../components/AddPlacemark.svelte"
  import Menu from "../components/Menu.svelte"
  import PlacemarkMap from "../components/PlacemarkMap.svelte";

  let placemarkMap = null;
  let listPlacemarks = null;
  let addPlacemark

  function placemarkAdded(event) {
    placemarkMap.addPlacemarkMarker(event.detail.placemark);
    listPlacemarks.placemarkAdded(event.detail.placemark)
    addPlacemark.reset()
  }

</script>

<Menu/>
<section class="section">
  <ListPlacemarks bind:this={listPlacemarks} />
  <br>
  <br> 
  <AddPlacemark on:message={placemarkAdded} bind:this={addPlacemark}/>
  <br>
  <br> 
  <PlacemarkMap bind:this={placemarkMap}/>
</section>
