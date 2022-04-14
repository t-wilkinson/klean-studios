<script>
	import Button from '$lib/Components/Button.svelte';

	let firstName = '';
	let lastName = '';
	let email = '';
	let phoneNumber = '';
	let bandName = '';

	let recording = false;
	let mixing = false;
	let mastering = false;

	let details = '';
</script>

<style lang="scss">
    form {
        padding: 3rem 0;
        font-size: 1.2rem;
        width: 600px;

        h2 {
            font-size: 4rem;
            margin-bottom: 2rem;
        }

        div + div {
            margin-top: 2rem;
        }

        label {
            display: flex;
            flex-direction: column;
            .label {
                font-family: 'Abril Fatface', serif;
                margin-bottom: 0.25rem;
            }

            input {
                background: white;
                border: none;
                padding: 0.75rem 1rem;
            }
        }

        .checkbox {
            label {
                flex-direction: row;
                align-items: center;
            }
        }

        .inputs {
            grid-gap: 1rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

<form>
    <h2>Let's Get Started</h2>
	<div class="inputs">
		{#each [{ label: 'First Name', value: firstName }, { label: 'Last Name', value: lastName }, { label: 'Email', value: email }, { label: 'Phone Number', value: phoneNumber }, { label: 'Band Name', value: bandName }] as input}
			<label>
                <span class="label">{input.label}</span>
				<input bind:value={input.value} />
			</label>
		{/each}
	</div>

	<div class="checkbox">
		{#each [{ label: 'Recording', value: recording }, { label: 'Mixing', value: mixing }, { label: 'Mastering', value: mastering }] as input}
			<label>
				<input type="checkbox" bind:checked={input.value} />
                <span class="label">{input.label}</span>
			</label>
		{/each}
	</div>

	<div class="details">
		<label>
            <span class="label">Details</span>
            <textarea bind:value={details} rows={10} />
		</label>
	</div>

    <div>
        <Button>
            Submit
        </Button>
    </div>
</form>
