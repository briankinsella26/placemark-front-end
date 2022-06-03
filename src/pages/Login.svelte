<script>
  import {push} from "svelte-spa-router";
  import WelcomeMenu from "../components/WelcomeMenu.svelte"
  import {getContext} from "svelte";
  import {user} from "../stores";

  let email = ""
  let password = "";
  let errorMessage = "";
  let userScope;
  let userDetails;

  const placemarkService = getContext("PlacemarkService")

  async function login() {
    let success = await placemarkService.login(email, password);
    if (success) {
      user.subscribe(user => {userScope = user.scope});
      push(userScope.includes("admin")?"/admin":"/dashboard");
    } else {
      email = "";
      password = "";
      errorMessage = "Invalid Credentials";
    }
  }
</script>
<div>
  <WelcomeMenu/>
</div>
<form on:submit|preventDefault={login}>
  <div class="field">
    <label class="label" for="email">Email</label>
    <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" type="text">
  </div>
  <div class="field">
    <label class="label" for="password">Password</label>
    <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password">
  </div>
  <div class="field is-grouped">
    <button class="button is-link">Log In</button>
  </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}


