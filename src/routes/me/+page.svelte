<script lang="ts">
    import {enhance} from '$app/forms'
    export let data;
</script>

<h1>Profile</h1>

<p>User id: {data.userId}</p>
<p>Username: {data.username}</p>

<form use:enhance action="?/logout" method="post">
    <input type="submit" value="Logout" />
</form>
