<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>How to Multiply and Divide</title>
</svelte:head>

<Stepper class="m-20">
    <Step><svelte:fragment slot="header">Multiplication</svelte:fragment><br>
        <b>Restate the problem as an addition problem.</b></Step>
    <Step>For instance, say you are given the problem 6∗2.<br>
    This is really just another way to say “6 groups of 2,” or, for that matter, “2 groups of 6.”</Step>
    <Step><img src="/multiply.png" alt=""><br>
    Thus, you could set up the problem like in the image above, then count the number of blocks to get your answer.</Step>

</Stepper>
