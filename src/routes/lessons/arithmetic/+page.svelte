<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { redirect } from "@sveltejs/kit";

</script>
<svelte:head>
	<title>Arithmetics Lesson</title>
</svelte:head>

<Stepper class="m-20">
	<Step>
		<svelte:fragment slot="header">Addition and Subtraction</svelte:fragment>
		<b>Use a number line if you’re just learning to add/subtract.</b><br>
	</Step>
	<Step>
		Draw a line, then write numbers along the line from 0-15.<br>
		<img src="https://files.catbox.moe/3rg864.png" alt="">
	</Step>
	<Step>
		Circle the first number you want to add or subtract. Start at that number.<br>
		<img src="https://files.catbox.moe/m3jz2w.png" alt="">
	</Step>
	<Step>
		Then, count down your number line, moving the same number of spaces as the second number you’re adding or subtracting.
		You’ll land on your answer.<br>
		<img src="https://files.catbox.moe/fkjq9x.png" alt="">
		<a href="/addition" class="btn variant-filled-primary">Go to practice problems!</a>
	</Step>
</Stepper>
