<script>
    import "../app.css"
    import { AppShell, AppBar, LightSwitch, Avatar } from '@skeletonlabs/skeleton'
	export let data;
	import {goto} from '$app/navigation'
</script>

<AppShell>
	<svelte:fragment slot="header">
	<AppBar shadow="shadow-lg" slotLead="text-md place-self-evenly space-x-3" slotTrail="text-xl">
		<svelte:fragment slot="lead">
			<h1 class="text-2xl">GPTutor</h1>
			<a href="/">Home</a>
			<a href="/start">Learn</a>
			<a href="/practice">Practice</a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<LightSwitch rounded="rounded-full"/>
			{#if data.loggedIn}
				<a href="/me"><Avatar initials={data.username} width="w-12" background="bg-surface-400" border="border-4 border-surface-300-600-token hover:!border-primary-500"></Avatar></a>
			{:else}
				<a href="/login" class="text-md">Log in!</a>
			{/if}
		</svelte:fragment>
	</AppBar>
		</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<p class="text-center mb-2">Created by Suhas Voolla and Seojin Kim</p>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
