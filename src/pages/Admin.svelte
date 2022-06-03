<script>
import {getContext, onMount} from 'svelte'
import ListLatestPlacemarks from "../components/ListLatestPlacemarks.svelte";
import MenuAdmin from "../components/MenuAdmin.svelte"

const placemarkService = getContext("PlacemarkService");
let analytics = {};

onMount(async () => {
    analytics = await placemarkService.getAnalytics();
  });

</script>

<MenuAdmin/>
<section class="section">
  <h1 class="title">Admin</h1>
  <br>
  <br>
  <br>
  <div>
    <h2> <strong> Total Users: <strong> {analytics.totalUsers} </h2>
  </div>
  <br>
  <div>
    <h2> <strong> Number of new users in past 24 hours: <strong> {analytics.noOfNewUsers} </h2>
  </div>
    <br>
    <h2> <strong> Total Placemarks: {analytics.totalPlacemarks} </h2>
    <br>
    <br>
    <br>
  <div>
    <h2> <strong> Latest placemarks </h2>
  </div>
  <br>
  <ListLatestPlacemarks/>
</section>
