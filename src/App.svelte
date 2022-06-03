<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Dashboard from "./pages/Dashboard.svelte"
  import About from "./pages/About.svelte"
  import Profile from "./pages/Profile.svelte"
  import Placemark from "./pages/Placemark/[id].svelte"
  import EditPlacemark from "./pages/EditPlacemark/[id].svelte"
  import Admin from "./pages/Admin.svelte"
  import Users from "./pages/Users.svelte"
  import AdminPlacemarks from "./pages/PlacemarkList.svelte"
  import Router from "svelte-spa-router"
  import {PlacemarkService} from "./services/PlacemarkService"
  import {setContext} from "svelte";
  import {getContext} from "svelte";
  import Map from "./pages/Map.svelte"

  import Charts from "./pages/Charts.svelte";

  setContext("PlacemarkService", new PlacemarkService("https://mysterious-harbor-74880.herokuapp.com"))
  const placemarkService = getContext("PlacemarkService")

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/dashboard": Dashboard,
    "/logout": Main,
    "/about": About,
    "/profile": Profile,
    "/placemark/:id": Placemark,
    "/placemark/editPlacemark/:id": EditPlacemark,
    "/admin": Admin,
    "/admin/users": Users,
    "/admin/placemarks": AdminPlacemarks,
    "/charts": Charts,
    "/map": Map,
  }

</script>

<div class="container">
  <Router {routes}/>
</div>