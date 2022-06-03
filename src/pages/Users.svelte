<script>
  import MenuAdmin from '../components/MenuAdmin.svelte';
  import {getContext, onMount} from 'svelte'
  import ListUsers from "../components/ListUsers.svelte";

  const placemarkService = getContext("PlacemarkService");
  let users = [];

  onMount(async () => {
    users = await placemarkService.getUsers();
  });
</script>

<MenuAdmin/>
<section class="section">
  <h1 class="title">All Users</h1>
  <br>
  <ListUsers {users}/>
</section>
