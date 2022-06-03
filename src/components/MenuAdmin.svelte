<script>
  import PlacemarkBrand from "../components/PlacemarkBrand.svelte"
</script>

<nav class="navbar">
  <div class="navbar-brand">
    <PlacemarkBrand/>
  </div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"> <span aria-hidden="true"></span>
    <span aria-hidden="true"></span> <span aria-hidden="true"></span> </a>
  <div class="navbar-menu" id="navMenu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a id="admin-dashboard" class="button" href="/#/admin"> Admin </a> <a id="admin-placemarks" class="button" href="/#/admin/placemarks"> Placemarks </a> 
          <a id="admin-users" class="button" href="/#/admin/users"> Users </a> <a id="admin-logout" class="button" href="/logout"> Logout </a>
        </div>
      </div>
    </div>
  </div>
</nav>

