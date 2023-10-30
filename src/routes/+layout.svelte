<script>
    import "../app.css"
    import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header">
	<AppBar shadow="shadow-lg" slotLead="text-2xl place-self-evenly" slotTrail="text-xl">
		<svelte:fragment slot="lead">
			<h1>GPTutor</h1>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<h1>Home</h1>
			<h1>Practice</h1>
			<h1>Statistics</h1>
			<LightSwitch />
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
		<p class="text-center mb-2">Created by Suhas Voolla and Seojin Kim - TX10</p>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>
