<script>
  import WelcomeMenu from "../components/WelcomeMenu.svelte";
  import {getContext} from "svelte";

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();
</script>

<div>
  <WelcomeMenu/>
</div>

<section class="hero is-link is-halfheight">
 <div class="hero-body is-full-height">
<div class="">
      <p class="title">
        Placemark
      </p>
      <p class="subtitle">
        Signup or login...
      </p>
 </div>
</section>