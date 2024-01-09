<script lang="ts">
    import {enhance} from '$app/forms'
    export let data;
    console.log(data.characters)
    let characters_copy = [...data.characters]
    let ac: string;
    async function doSubmitThing() {
        const brug = await fetch('/api/updateCharacters', {
            method: 'POST',
            body: JSON.stringify({"characters": characters_copy, "user_id": data.userId})
        })
        const brugug = await brug.json()
        characters_copy = brugug['characters']
    }
</script>
<div class="flex h-screen items-center justify-center flex-col -my-5">
    <div class="card p-4 mx-3 text-center">
        <h1 class="h2">Profile</h1>

        <p>User id: {data.userId}</p>
        <p>Username: {data.username}</p>

        <h3 class="h3 mt-3">Characters</h3>
        <ul>
            {#if characters_copy.length == 0}
                <h1>You have no characters!</h1>
            {:else}
                {#each characters_copy as ch}
                    <li>- {ch}</li>
                {/each}
            {/if}
        </ul>

        <input class="text-black" minlength="1" required placeholder="Add a character!" id="add" bind:value={ac}/>
        <button class="btn variant-filled-primary" on:click={() => {
            if (ac === undefined || ac.length == 0) {
                alert('please add a value!')
                return;
            }
            characters_copy = [...characters_copy, ac]; ac = ''
        }}>Add character</button>

        <button on:click|preventDefault={async () => { await doSubmitThing() }} class="btn variant-filled-secondary">Update characters</button>

        <form use:enhance action="?/logout" method="post">
            <input type="submit" value="Logout" class="btn variant-filled-error mt-3" />
        </form>
    </div>
</div>
