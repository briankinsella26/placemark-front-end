<script>
  import {getContext, onMount} from 'svelte'
  import Menu from "../components/Menu.svelte"
  import {user} from "../stores";
  import {push} from "svelte-spa-router";

  const placemarkService = getContext("PlacemarkService")
  let userId;
  let errorMessage = "";
  let userDetails = {};

  onMount(async () => {
    user.subscribe(user => {userId = user.id});
    userDetails = await placemarkService.getUserDetails(userId);
  });

  async function updateUser() {
  let success = await placemarkService.updateUser(userDetails, userId);
  if (success) {
    push("/dashboard");
  } else {
    errorMessage = "Invalid Credentials";
  }
}

</script>

<Menu/>
<section class="section">
<h1 class="title">My Profile</h1>
<br>
<br>
<form on:submit|preventDefault={updateUser} class="box">
    <br/>
    <br/>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label for="firstName"><strong>First Name</strong></label>
          <input bind:value={userDetails.firstName} autocomplete="false" class="input" type="text" name="firstName" placeholder={userDetails.firstName}>
        </div>
        <div class="field">
          <label for="lastnNme"><strong>Last Name</strong></label>
          <input bind:value={userDetails.lastName} autocomplete="false" class="input" type="text" name="lastName" placeholder={userDetails.lastName}>
        </div>
        <div class="field">
          <label for="email"><strong>Email</strong></label>
          <input bind:value={userDetails.email} autocomplete="false" class="input" type="text" name="email" placeholder={userDetails.email}>
        </div>
        <div class="field">
          <label for="password"><strong>Password</strong></label>
          <input bind:value={userDetails.password} autocomplete="false" class="input" type="password" name="password" placeholder={userDetails.password}>
        </div>
      </div>
    </div>
    <button class="button is-primary">Update User</button>
  </form>
  <form autocomplete="off" class="box" action="/profile/delete" method="GET">
    <button style="color: red" class="button is-secondary">Delete Account</button>
  </form>
</section>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}