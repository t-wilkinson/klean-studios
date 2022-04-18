<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { getApi, getAttributes } from '$lib/api.js';

	export const load: Load = async ({ params, fetch, session, stuff, ...props }) => {
		let [projects, testimonials] = await Promise.all([
			getApi('/projects'),
			getApi('/testimonials')
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
				testimonials: getAttributes(testimonials.data)
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
    let selectedTestimonial = null;

    $: {
        if (testimonials.length > 0 && selectedTestimonial === null) {
            selectedTestimonial = 0;
        }
    }

	const services = [
		{
			name: 'Beats',
			text: 'Visit our beat catalog on Soundcloud or Youtube. Links can be found on our beats page.'
		},
		{
			name: 'Recording',
			text: 'Klean Studios has no official hours of operation. We work to the artist’s convenience and base scheduling around clientele availability.'
		},
		{
			name: 'Mixing',
			text: 'We offer two types of mixing. Stem mixing and two stereo track mixing for pre-master final mixes.'
		},
		{
			name: 'Mastering',
			text: 'Send us two or three reference mixes for track comparison and we’ll master your song to your liking. Our mastering deal also includes one revision with no additional cost.'
		}
	];

	const processes = [
		{
			img: '/IMG-4087.jpg',
			alt: '',
			text: 'The song creation and recording process begins with an introduction to your style. It is super beneficial to know what kind of sound you are aiming for from the very jump, so we always request two to three songs that we can use as references for your track. Typically these are songs from other artists but they can also be past songs by you that you think represents your style well.'
		},
		{
			img: '/EEC4FE20-FF48-4239-B0A6-A73AE8193304.jpg',
			alt: '',
			text: 'For recording vocals we have an acoustically treated vocal booth. The two pieces of equipment you’ll find inside are the Shure SM57 microphone and a pair of Audio Technica ATH M40x’s. All vocals are recorded through the Apollo Twin X DUO audio interface and processed in Ableton Live or Logic Pro. The booth also has LED lights installed with a remote control so that you can choose the color that best suits you while inside. When recording instrumentation we have a standard way of doing things, but we are always open to suggestions and new ideas. If there is a specific way you would like to record something we will accompany that to our best ability.'
		},
		{
			img: '/IMG-4072.jpg',
			alt: '',
			text: "Before hitting the record button we will check tuning and each microphone's response to instrumentation and voice. In band settings this includes checking the microphones response between the instruments that are opposite of each other. Such as the guitar one’s microphone will record guitar two to check for bleeding then vice versa. Upon that we will capture approximately ten seconds of performance and listen to the playback. That way you have an idea of how everything will sound once fully recorded. Now we are ready to record your track."
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

<section class="testimonials">
    <button on:click={() => selectedTestimonial -= 1}>
        -
    </button>
    {selectedTestimonial}
    {#if testimonials[selectedTestimonial]}
    <div class="testimonial">
        <span class="testimony">{testimonials[selectedTestimonial].testimony}</span>
        <span class="name">{testimonials[selectedTestimonial].name}</span>
        <span class="info">{testimonials[selectedTestimonial].info}</span>
    </div>
    {/if}
    <button on:click={() => selectedTestimonial += 1}>
        +
    </button>
</section>

<!--
<Projects {projects} />
-->

<section class="about-max">
	<img src="/max-profile.jpg" alt="Max" />

    <span class="about-me">
        About<br />Me
    </span>

	<span class="text">
        <p>
		Graduating in May of 2022 from Mary Baldwin University, Klean received a degree in music with
		emphasis in composition as well as completed extracurricular training in mastering music. Over
		the past five years he has worked with many artists in a multitude of genres, including rock,
        rap/hip hop, RnB, indie, pop, and jazz music.
        </p>
        <p>With experience in recording/producing live bands
		and doing studio production he is equipped with all the skills of a full stack audio engineer
		and can be used as a producer or for unbiased feedback.
        </p>
	</span>

	<div class="social-media">
		{#each [{ name: 'Twitter', alt: '', href: '', src: '' }, { name: 'Facebook', alt: '', href: '', src: '' }, { name: '', alt: '', href: '', src: '' }] as socialMedia}
			<a href={socialMedia.href}>
				{socialMedia.name}
                <!-- <img alt={socialMedia.alt} src={socialMedia.src} /> -->
			</a>
		{/each}
	</div>
</section>

<section class="beats">
    <h2>BEATS</h2>
    <a href="https://soundcloud.com/kleanstudios" target="_blank">
        <img src="/soundcloud-logo-white.png" alt="Soundcloud logo"/>
    </a>
</section>

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

    .testimonials {
        .testimonial {
            display: flex;
            flex-direction: column;

            .testimony {
            }
            .name {
                font-family: var(--font-secondary);
            }
            .info {
            }
        }
    }

	.beats {
		height: 100vh;
		width: 100%;
		position: relative;
        display: grid;
        grid-template: 1fr / 1fr;
        align-items: start;
        justify-items: center;
        padding: 8rem 0 12rem 0;

		background: linear-gradient(to bottom, #f89810 0%, #f8320f 100%);

		img {
			width: 700px;
			height: 700px;
			object-fit: contain;
            position: relative;
		}

		h2 {
            opacity: 0.5;
            position: absolute;
            color: var(--c-bg);
            bottom: 0;
            right: 0;
			font-size: 30vw;
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
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			width: 100%;
			max-width: var(--screen-lg);
			grid-gap: 1rem;
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
		width: var(--screen-lg);
		margin-bottom: 4rem;

		.process + .process {
			margin-top: 5rem;
		}

		.process {
			display: grid;
			width: 100%;
			align-items: center;
			grid-template:
				'number text img' 600px
				/ 250px 300px 1fr;
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
        margin-top: 4rem;
        margin-bottom: 8rem;
        margin-right: 4rem;
		grid-template:
			'image . .' 800px
			'. . .' 50px
			/ 1fr 1fr 200px;

		img {
			grid-area: image;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

        .about-me {
            grid-row: 1 / -1;
            grid-column: 2;
            align-self: start;
            justify-self: end;
            position: absolute;

            text-transform: uppercase;
            text-align: right;
            line-height: 1;
            font-size: 20vw;
            font-family: var(--font-secondary);
        }

		.text {
            align-self: end;
            justify-self: start;
            grid-row: 1;
            grid-column: 1 / 3;

            padding: 2rem;
            margin: 0 0 4rem 4rem;
            position: relative;
            width: max(50%, 400px);

            text-align: left;
            background: rgba(0 0 0 / 0.7);
		}

		.social-media {
            display: flex;
            flex-direction: column;
            justify-self: end;
            text-align: right;
            grid-column: 3;
            grid-row: 2;

            a {
                color: white;
            }
		}
	}
</style>
