<script>
    import "../app.css"
    import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header"><AppBar slotDefault="text-2xl">GPTutor</AppBar></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><a href="/">Home</a><br><a href="/about">About</a></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><p>Created by Seojin Kim and Suhas Voolla - TX10</p></svelte:fragment>
	
</AppShell>
