<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
</script>
<svelte:head>
	<title>How to add and subtract with fractions.</title>
</svelte:head>

<Stepper class="m-20">
	<Step><b>Making the bottom part the same, then </b></Step>
    <Step>In division, we want to divide the total into a few groups and we want to know how many are in each group.<br><br>
    Let's divide 12 into 3 equal groups. How many are in each group?<br></Step>
    <Step><img src="/12.jpg" alt="">
    1.	Start with 12.<br></Step>
    <Step><img src="/part 1.png" alt="">
    2.  Take one piece and put it aside.<br></Step>
    <Step><img src="/part 2.png" alt="">
    3.  Take another piece and put it in a second pile.<br></Step>
    <Step><img src="/part 3.png" alt="">
    4.  Take the next piece and put it in a third pile. Now we have 3 piles or groups.<br></Step>
    <Step><img src="/part 4.png" alt="">
    5.  Put the fourth piece back in the first pile.</Step>
    <Step>6. Continue putting a piece into each group till all 12 counters are used up. <br>
    You'll end up with 4 counters in each group so 12 divided into 3 is 4. Your done! You can also write it this way: 12 ÷ 3 = 4</Step>
</Stepper>
