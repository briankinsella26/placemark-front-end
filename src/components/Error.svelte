<script>
  export let errors;
</script>

{#if errors}
  <div class="box content">
    <p> There was a problem... </p>
    <ul>
      {#each errors as error}
        <li>{error.message}</li>
      {/each}
    </ul>
  </div>
{/if}
