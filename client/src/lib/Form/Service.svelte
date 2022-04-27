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

	export let onSubmit;

    function labelToName(label) {
        return label.toLowerCase().replace(/ /g, '-')
    }
</script>

<form
	id="service-form"
	on:submit={(e) => {
		e.preventDefault();
		const form = document.querySelector('#service-form');
		const formData = new FormData(form);
        onSubmit(formData);
	}}
>
	<h2>Let's Get Started</h2>
	<div class="inputs">
		{#each [{ label: 'First Name', type: 'text', value: firstName }, { label: 'Last Name', value: lastName, type: 'text' }, { label: 'Email', type: 'email', value: email }, { label: 'Phone Number', value: phoneNumber, type: 'text'}, { label: 'Band Name', value: bandName, type: 'text'}] as input}
			{@const name = labelToName(input.label)}
			<label for={name}>
				<span class="label">{input.label}</span>
                <input id={name} {name} bind:value={input.value} />
			</label>
		{/each}
	</div>

	<div class="checkbox">
		{#each [{ label: 'Recording', value: recording }, { label: 'Mixing', value: mixing }, { label: 'Mastering', value: mastering }] as input}
			{@const name = labelToName(input.label)}
            <label for={name}>
                <input id={name} name={name} type="checkbox" bind:checked={input.value} />
				<span class="label">{input.label}</span>
			</label>
		{/each}
	</div>

	<div class="details">
		<label for="details">
			<span class="label">Details</span>
			<textarea id="details" name="details" bind:value={details} rows={10} />
		</label>
	</div>

	<div>
		<Button
      type="submit"
		>
			Submit
		</Button>
	</div>
</form>

<style lang="scss">
	form {
		padding: 3rem 0;
		font-size: 1.2rem;
		max-width: 600px;
        width: 100%;
		margin: 4rem 0;

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
