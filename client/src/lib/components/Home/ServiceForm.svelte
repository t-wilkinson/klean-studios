<script lang="ts">
	import ServiceSubmit from '$lib/components/Form/Service.svelte';
	import { fromResponse, toApiUrl } from '$lib/api.js';
</script>

<section id="service" class="service-form">
	<ServiceSubmit
		onSubmit={async (formData) => {
			const response = fetch(toApiUrl('/service/submit'), {
				method: 'POST',
				body: formData
			});
			const { data, status } = await fromResponse(response);
			console.log(data, status);
		}}
	/>
</section>

<style lang="scss">
    .service-form {
        margin: 4rem 2rem;
        max-width: var(--screen-md);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 600px) {
        h2 {
            font-size: 2rem;
        }
    }
</style>
