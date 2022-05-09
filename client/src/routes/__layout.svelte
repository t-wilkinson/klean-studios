<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<slot />
</main>
<Footer />

<style global lang="scss">
	html,
	body {
		width: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		--c-bg: #1f222b;
		--c-gray: #494f60;
		--c-pri: #b71ac1;
		--c-sec: #f5ff3b;
		--c-ter: #f80000;

		--screen-sm: 600px;
		--screen-md: 800px;
		--screen-lg: 1200px;
		--font-secondary: 'Abril Fatface', serif;
		--font-primary: 'Work Sans', sans-serif;
	}

	* {
		font-family: 'Work Sans', sans-serif;
		box-sizing: border-box;
	}

	a {
		font-family: 'Abril Fatface', serif;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		font-family: 'Abril Fatface', serif;
		font-weight: 400;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background: #1f222b;
		color: white;
		padding: 0;
		margin: 0;
	}
</style>
