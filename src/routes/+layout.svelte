<script>
    import "../app.css"
    import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header"><AppBar slotDefault="text-2xl">GPTutor</AppBar></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
