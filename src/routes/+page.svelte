<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<svelte:head>
	<title>GPTutor</title>
	<meta name="description" content="App that tutors people using GPT4" />
</svelte:head>

<section class="h-screen items-center flex flex-col">
	<h2 class="h2 mt-14 font-bold text-center">The best way to learn mathematics, powered by GPT-4</h2>
	<p class="p mt-5 text-center max-w-prose">Using fun characters from pop culture and media, GPTutor allows students to learn math by seeing real-world application problems using their favorite characters rather than learning with antiquated and long arithmetic worksheets.</p>
	<button class="btn variant-filled-primary w-auto mt-3 rounded-lg" on:click={async (e) => await goto('/signup')}>Get Started →</button>
</section>

