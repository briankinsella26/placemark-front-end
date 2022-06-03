<script>
  import ListPlacemarks from "../components/ListPlacemarks.svelte"
  import AddPlacemark from "../components/AddPlacemark.svelte"
  import Menu from "../components/menu.svelte"
  import PlacemarkMap from "../components/PlacemarkMap.svelte";

  let placemarkMap = null;

  function placemarkAdded(event) {
    placemarkMap.addDonationMarker(event.detail.placemark);
  }

</script>

<Menu/>
<section class="section">
  <ListPlacemarks/>
  <br>
  <br> 
  <AddPlacemark on:message={placemarkAdded}/>
  <br>
  <br> 
  <PlacemarkMap bind:this={placemarkMap}/>
</section>
