<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { getApi, getAttributes } from '$lib/api.js';

	export const load: Load = async ({ params, fetch, session, stuff, ...props }) => {
		let [projects, testimonials] = await Promise.all([
			getApi('/projects'),
			getApi('/testimonials'),
		]);
		projects.data = (projects.data || []).map(({ id, attributes }) => ({
			name: attributes.name,
			/* description: project.description, */
			image: attributes.image,
			url: attributes.url
			/* tags: project.tags.map(tag => ({ */
			/*     id: tag.id.toString(), */
			/*     name: tag.name, */
			/*     color: tag.color */
			/* })) */
		}));

		return {
			status: projects.status,
			props: {
				projects: projects.data,
				testimonials: getAttributes(testimonials.data),
			}
		};
	};

	// IMG-4072.jpg
	// IMG-4087.jpg
	// IMG-4243.jpg
	// IMG-4246.jpg
	// IMG-4258.jpg
	// IMG-4268.jpg
	// IMG-4279.jpg
	// IMG-4290.jpg
	// IMG-4291.jpg
</script>

<script lang="ts">
	import Projects from '$lib/Projects/index.svelte';
	import Button from '$lib/Components/Button.svelte';
    import ServiceSubmit from '$lib/Form/Service.svelte';

	export let projects: Projects[] = [];
    export let testimonials = [];

	const services = [
		{
			name: 'Beats',
			text: 'Beats is a music platform that allows you to create, share, and discover music.'
		},
		{
			name: 'Recording',
			text: 'Recording is a music platform that allows you to create, share, and discover music.'
		},
		{
			name: 'Mixing',
			text: 'Mixing is a music platform that allows you to create, share, and discover music.'
		},
		{
			name: 'Mastering',
			text: 'Mastering is a music platform that allows you to create, share, and discover music.'
		}
	];

	const processes = [
		{
			img: '/IMG-4087.jpg',
			alt: '',
			text: 'Lorem ad sequi temporibus consectetur sunt Atque repellendus sint alias laboriosam minus labore. Dicta alias sapiente numquam quisquam consectetur odit? Quae neque blanditiis illo quos nam! Ad earum quisquam veritatis'
		},
		{
			img: '/EEC4FE20-FF48-4239-B0A6-A73AE8193304.jpg',
			alt: '',
			text: 'Lorem ad sequi temporibus consectetur sunt Atque repellendus sint alias laboriosam minus labore. Dicta alias sapiente numquam quisquam consectetur odit? Quae neque blanditiis illo quos nam! Ad earum quisquam veritatis'
		},
		{
			img: '/IMG-4072.jpg',
			alt: '',
			text: 'Lorem ad sequi temporibus consectetur sunt Atque repellendus sint alias laboriosam minus labore. Dicta alias sapiente numquam quisquam consectetur odit? Quae neque blanditiis illo quos nam! Ad earum quisquam veritatis'
		}
	];
</script>

<section class="hero">
	<img class="hero__img" src="/IMG-4290.jpg" alt="The studio" />
	<div class="hero__content">
		<h1>KLEAN STUDIOS</h1>
		<Button>Let's Create</Button>
	</div>
</section>

<section class="services">
	<h2>Services</h2>
	<div class="services__container">
		{#each services as service}
			<div class="service">
				<h3>{service.name}</h3>
				<p>{service.text}</p>
			</div>
		{/each}
	</div>
</section>

<section class="the-space">
	<img class="the-space__img" src="/IMG-4258.jpg" alt="The space" />
	<div class="the-space__content">
		<h2>The Space</h2>
	</div>
</section>

<section class="the-process">
	{#each processes as process, i}
		<div class="process">
			<span class="number">
				{i + 1}
			</span>
			<span class="text">
				{process.text}
			</span>
			<img src={process.img} alt={process.alt} />
		</div>
	{/each}
</section>

<!--
<section class="testimonials">
    {#each testimonials as testimonial}
        {testimonial.name}
        {testimonial.testimony}
    {/each}
</section>
-->

<!--
<Projects {projects} />
-->

<!--
<section class="about-max">
    <img src="/max-1.jpg" alt="Max" />

    <span class="text">
        Klean Studios
    </span>

    <div class="social-media">
    {#each [
        { name: 'Twitter', alt: '', href: '', src: '' },
        { name: 'Facebook', alt: '', href: '', src: '' },
        { name: '', alt: '', href: '', src: '' },
        ] as socialMedia}
        <a href={socialMedia.href}>
            {socialMedia.name}
            <!-- <img alt={socialMedia.alt} src={socialMedia.src} /> --\>
        </a>
    {/each}
    </div>
</section>
-->

<!--
<section class="beats">
    <h2>BEATS</h2>
            <img src="/SoundCloud-Logo.png" />
</section>
-->

<section class="service">
    <ServiceSubmit />
</section>

<style lang="scss">
	h1 {
		font-size: 8em;
	}
	h2 {
		font-size: 5rem;
	}
	h3 {
		font-size: 2rem;
	}

    .beats {
        background: #FE5B00;
        height: 100vh;
        width: 100%;
        position: relative;

        h2 {
            font-size: 30rem;
        }
        img {
            position: absolute;
            width: 200px;
            height: 200px;
            object-fit: contain;
        }
    }

	.hero {
		position: relative;
		display: grid;
		grid-template:
			'. . .' 1fr
			'. content .' auto
			'. . .' 2fr
			/ 3fr 1400px 1fr;
		width: 100%;
		height: 100vh;
        color: white;
        font-size: 2rem;

        h1 {
            font-size: 5em;
            margin-bottom: 2rem;
        }

		.hero__img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			object-fit: cover;
		}

		.hero__content {
			position: relative;
			grid-area: content;
			display: flex;
			flex-direction: column;
			align-items: start;
		}
	}

	.services {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 10rem 0;

		.services__container {
			margin-top: 3em;
			display: flex;
			width: 100%;
			max-width: var(--screen-lg);
		}

		.service + .service {
			margin-left: 1rem;
		}
	}

	.the-space {
		display: grid;
		position: relative;
		height: 100vh;
		width: 100%;
		place-items: center;

		.the-space__content {
			position: relative;
		}

		.the-space__img {
			position: absolute;
            object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	.the-process {
		width: 1000px;
		.process + .process {
			margin-top: 5rem;
		}

		.process {
			display: grid;
			width: 100%;
			align-items: center;
			grid-template:
				'number text img' 600px
				/ auto 250px 1fr;
			grid-gap: 3rem;

			.text {
				grid-area: 'text';
			}

			.number {
				grid-area: 'number';
				font-family: 'Abril Fatface', serif;
				font-size: 16rem;
			}

			img {
				grid-area: 'img';
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

    .about-max {
        display: grid;
        width: 100%;
        grid-template:
            "image text ." 800px
            ". . social-media" auto
            / 1fr 1fr 1fr;

        img {
            grid-area: "image";
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .text {
            grid-area: "text";
        }

        .social-media {
            grid-area: "social-media";
        }
    }
</style>
