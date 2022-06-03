<script>
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";
  import {categoryList} from "../stores";

  const placemarkService = getContext("PlacemarkService");

  const mapConfig = {
    minZoom: 7,
    maxZoom: 0
  };
  let map = null;
  let categories;
  let bounds = [];

  onMount(async () => {
    categoryList.subscribe(categoryList => {categories = categoryList})
    map = new LeafletMap("placemark-map-all", mapConfig);
    categories.forEach(category => {
      if(category.value != "All") {
        map.addLayerGroup(category.value)
      }
    })

    let placemarks = await placemarkService.getAllPlacemarks();
    placemarks.forEach(placemark => {
      addPlacemarkMarker(placemark);
    });

    map.showZoomControl();
    map.showLayerControl();
    map.fitBounds(bounds);
    
  });

  export function addPlacemarkMarker(placemark) {
    map.addMarker({lat: placemark.latitude, lng: placemark.longitude}, placemark.name, placemark.category);
    bounds.push([placemark.latitude, placemark.longitude]);
    map.moveTo(11, {lat: placemark.latitude, lng: placemark.longitude});
  }
</script>

<div class="box" id="placemark-map-all" style="height:800px"></div>