<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	let lockedState: boolean = true;
</script>
<svelte:head>
	<title>Arithmetics Lesson</title>
</svelte:head>

<Stepper>
	<Step>
		<svelte:fragment slot="header">Addition and Subtraction</svelte:fragment>
		<b>Use a number line if you’re just learning to add/subtract.</b><br>
		Draw a line, then write numbers along the line from 0-15.<br>
		Circle the first number you want to add or subtract. Start at that number.<br>
		Then, count down your number line, moving the same number of spaces as the second number you’re adding or subtracting. 
		You’ll land on your answer.
		<img src="/Additionnachfolger6.png" alt="">
	</Step>
	<Step>
		<svelte:fragment slot="header">Multiplication and Division</svelte:fragment>
		<b>Restate the problem as an addition problem.</b><br>
		For instance, say you are given the problem 4∗3. <br>
		This is really just another way to say “3 groups of 4,” or, for that matter, “4 groups of 3.”
		<img src="/multiply.png" alt="">
		<b>Divide Into Equal Groups</b><br>
		In division, we want to divide the total into a few groups and we want to know how many are in each group.<br><br>
		Let's divide 12 into 3 equal groups. How many are in each group?<br>
		<img src="/12.jpg" alt="">
		1.	Start with 12.<br>
		<img src="/part 1.png" alt="">
		2.  Take one piece and put it aside.<br>
		<img src="/part 2.png" alt="">
		3.  Take another piece and put it in a second pile.<br>
		<img src="/part 3.png" alt="">
		4.  Take the next piece and put it in a third pile. Now we have 3 piles or groups.<br>
		<img src="/part 4.png" alt="">
		5.  Put the fourth piece back in the first pile.
		Continue putting a piece into each group till all 12 counters are used up. <br>
		You'll end up with 4 counters in each group so 12 divided into 3 is 4. Your done! You can also write it this way: 12 ÷ 3 = 4
	</Step>

</Stepper>
			