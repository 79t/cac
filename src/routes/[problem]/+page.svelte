<script lang="ts">
	import type { PageData } from "./$types"
	import { Stepper, Step } from '@skeletonlabs/skeleton';

	export let data: PageData 
	let better = data.reply.split('Answer:')
	let best = better[1].split('Explanation:')
	
	let lockedState: boolean = true;
	function clicked() {
		lockedState = false;
	}
</script>
<svelte:head>
	<title>Problems</title>
</svelte:head>
<Stepper class="m-20 text-center">
	<Step locked={lockedState}>
		Answer this question: {better[0]}<br>
		<textarea id="locker" name="locker" rows="1" cols="20"></textarea><br>
		<button type="button" on:click={() => {clicked()}} class="border-2 rounded border-black bg-black">Submit Answer</button>
	</Step>
	<Step>
		The answer is: {best[0]}
	</Step>
	<Step>
		The explanation for this question: {best[1]}
	</Step>
</Stepper>