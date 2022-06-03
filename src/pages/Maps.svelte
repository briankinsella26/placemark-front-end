<script>
  import Menu from "../components/Menu.svelte";
  import PlacemarkMap from "../components/PlacemarkMap.svelte";
  import PlacemarkMapAllUsers from "../components/PlacemarkMapAllUsers.svelte"
</script>

<Menu/>
<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <h1>Map of your saved placemarks</h1>
  </div>
</div>
<PlacemarkMap/>
<br/>
<br/>
<br/>
<br/>
<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <h1>Map of all placemarks</h1>
  </div>
</div>
<PlacemarkMapAllUsers/>