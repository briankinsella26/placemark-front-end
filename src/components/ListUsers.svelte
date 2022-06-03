<script>
  export let users;
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>
          {user.firstName}
        </td>
        <td>
          {user.lastName}
        </td>
        <td>
          {user.email}
        </td>
        <td>
          <a href="/admin/users/{user._id}" class="ui icon button">
            <i class="fas fa-binoculars"></i>
          </a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
