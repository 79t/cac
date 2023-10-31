<script>
    import "../app.css"
    import { AppShell, AppBar, LightSwitch, Avatar } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header">
	<AppBar shadow="shadow-lg" slotLead="text-md place-self-evenly space-x-3" slotTrail="text-xl">
		<svelte:fragment slot="lead">
			<h1 class="text-2xl">GPTutor</h1>
			<h1>Home</h1>
			<h1>Learn</h1>
			<h1>Practice</h1>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<LightSwitch rounded="rounded-full"/>
			<Avatar initials="SV" width="w-10"></Avatar>
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
