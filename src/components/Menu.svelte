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
          <a href="/#/dashboard" id="dashboard" class="button"> Dashboard </a> 
          <a href="/#/maps" id="maps" class="button"> Maps </a>
          <a href="/#/charts" id="charts" class="button"> Charts </a> 
          <a href="/#/about" id="about" class="button"> About </a> 
          <a href="/#/profile" id="profile" class="button"> Profile </a>
          <a href="/#/logout" id="logout" class="button"> Logout </a>
        </div>
      </div>
    </div>
  </div>
</nav>

