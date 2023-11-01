<!-- <script lang="ts">
	import { enhance } from "$app/forms";
</script>

<h1>Sign up</h1>
<form method="post" use:enhance>
	<label for="username">Username</label>
	<input name="username" id="username" class="text-black" /><br />
	<label for="password">Password</label>
	<input type="password" name="password" id="password" class="text-black" /><br />
	<input type="submit" class="btn variant-filled-primary" />
</form>
<a href="/login">Sign in</a> -->
<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<div class="flex h-screen items-center justify-center flex-col -my-5">
<div class="card p-4 rounded-xl">
    <h1 class="text-center h2">Sign up</h1>

    <form use:enhance method="post" class="text-center mt-6">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" class="text-black" /> <br />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="text-black" /> <br />
        <input type="submit" class="btn variant-filled-primary mt-5" value="Create Account"/>

    </form>
    <a href="/login" class="btn variant-filled-secondary mt-5 text-center ml-14">Login</a>

</div>
</div>
