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
	// import Projects from '$lib/Projects/index.svelte';
	import Link from '$lib/Components/Link.svelte';
	import ServiceSubmit from '$lib/Form/Service.svelte';
    import { fromResponse, toApiUrl } from '$lib/api.js';

	// export let projects: Projects[] = [];
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
	<img class="img" src="/IMG-4290.jpg" alt="The studio" />
	<div class="content">
		<h1>KLEAN STUDIOS</h1>
        <Link
            class="link"
            href="#service"
            >Let's Create</Link>
	</div>
</section>

<section class="services">
	<h2>Services</h2>
	<div class="container">
		{#each services as service}
			<div class="service">
				<h3>{service.name}</h3>
                <div class="sep" />
				<p>{service.text}</p>
			</div>
		{/each}
	</div>
</section>

<!--
    <img style="width: 100px; height: 100px;" src="IMG-4246.jpg" />
<img style="width: 100px; height: 100px;" src="IMG-4268.jpg" />
<img style="width: 100px; height: 100px;" src="IMG-4279.jpg" />
<img style="width: 100px; height: 100px;" src="IMG-4291.jpg" />
-->

<section class="the-space">
	<img src="/IMG-4258.jpg" alt="The space" />
	<div class="content">
		<h2>The Space</h2>
    <p>
        Klean Studios is a small business that specializes in recording and producing music. We work with independent artists or bands as well as indie labels, major labels, and other producer/audio engineers. Capable of providing guidance or directly working on the production of a track, any service you need can be fulfilled by us. At least one engineer will always be present during studio sessions to provide either assistance in the creation process and/or overlook the production of your track.
    </p>
	</div>
</section>

<section class="the-process">
	{#each processes as process, i}
		<div class="process">
			<span class="number">
                <span>
				{i + 1}
                </span>
                <div class="number-underline" />
			</span>
			<span class="text">
				{process.text}
			</span>
			<img src={process.img} alt={process.alt} />
		</div>
	{/each}
</section>

<section class="testimonials">
    <div class="testimonials-wrapper">

    <button on:click={() => {
            selectedTestimonial -= 1
            if (selectedTestimonial < 0) {
                selectedTestimonial = testimonials.length - 1
            }
            }}>
        <svg
            width="20" height="20"
             viewBox="0 0 34.075 34.075" style="enable-background:new 0 0 34.075 34.075;">
                <path style="fill:#010002;" d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
                    L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
                    C25.58,33.883,25.075,34.075,24.57,34.075z"/>
        </svg>
    </button>

    {#if testimonials[selectedTestimonial]}
    <div class="testimonial">
        <q class="testimony">{testimonials[selectedTestimonial].testimony}</q>
        <span class="name">{testimonials[selectedTestimonial].name}</span>
        <span class="info">{testimonials[selectedTestimonial].info}</span>
    </div>
    {/if}

    <button on:click={() => {
            selectedTestimonial += 1
            if (selectedTestimonial > testimonials.length - 1) {
                selectedTestimonial = 0
            }
        }}>

    <svg
        width="20" height="20"
                   viewBox="0 0 34.075 34.075" style="enable-background:new 0 0 34.075 34.075;"
                                               transform="rotate(180)"
                                               >
            <path style="fill:#010002;" d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
                L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
                C25.58,33.883,25.075,34.075,24.57,34.075z"/>
    </svg>

    </button>
    </div>
</section>

<section class="mission">
    <div class="container">
        <img class="image" src="IMG-4279.jpg" alt="Mission" />
        <div class="text">
            <h2>Our Mission</h2>
            <p>
                Our mission is to create a comfortable workspace as well as provide industry standard production. We believe in collaboration and using the strengths of others to better portray the message you intend to deliver during the listening of your music. When coming to the studio you should feel free to express yourself and speak openly about ideas. Your vision is our priority.
            </p>
        </div>
    </div>
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

<section id="service" class="service">
    <ServiceSubmit
        onSubmit={async (formData) => {
            const response = fetch(toApiUrl('/service/submit'), {
                method: 'POST',
                body: formData,
            })
            const { data, status } = await fromResponse(response)
            console.log(data, status)
        }}
    />
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
        background: white;
        margin: 0;
        width: 100%;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12rem;

        .testimonials-wrapper {
            width: 100%;
            max-width: var(--screen-md);
            display: flex;
            justify-content: space-between;
        }

        button {
            margin: 0 2rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--color-primary);
            font-weight: bold;
        }

        .testimonial {
            height: 25rem;
            padding: 4rem 0;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;

            .testimony {
                font-size: 1.5rem;
            }

            .name {
                margin-top: 1em;
                font-size: 1.5rem;
                font-family: var(--font-secondary);
            }
            .info {
                margin-top: 0.5rem;
                font-family: var(--font-secondary);
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
            width: 100%;
			max-width: 700px;
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
		/* grid-template: */
		/* 	'. . .' 1fr */
		/* 	'. content .' auto */
		/* 	'. . .' 2fr */
		/* 	/ 3fr 1400px 1fr; */
		width: 100%;
		height: 100vh;
		color: white;
        padding: 4rem;
        justify-items: center;

		.img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			object-fit: cover;
		}

		.content {
            font-size: 1vw;

            h1 {
                margin-bottom: 2rem;
            }

            .link {
                font-size: 22rem;
            }

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
		margin: 10rem 0 20rem 0;
        position: relative;
        padding: 2rem;

        h2 {
            opacity: 0.05;
            position: absolute;
            left: 50%;
            transform: translate(-50%, 6rem);
            font-size: 18vw;
            top: 0;
            /* text-shadow: 4px 4px black; */
        }

		.container {
			margin-top: 3em;
            display: flex;
			width: 100%;
			max-width: var(--screen-lg);
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;

            .service {
                background: rgba(0 0 0 / 0.2);
                padding: 1rem;
                width: 240px;

                .sep {
                    width: 6rem;
                    height: 4px;
                    background-color: var(--c-ter);
                    border-radius: 9999rem;
                }
            }
		}
	}

	.the-space {
		display: grid;
		position: relative;
		height: 100vh;
		width: 100%;
		place-items: center;

		.content {
            text-align: center;
            width: 100%;
            max-width: var(--screen-md);
			position: relative;
		}

		img {
			position: absolute;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	.the-process {
        width: 100%;
		max-width: var(--screen-lg);
        margin-top: 6rem;
        margin-bottom: 6rem;

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

            @media only screen and (max-width: 1200px) {
                grid-template:
                    'text img' 600px
                    / 300px 1fr;
                padding: 0 4rem;
                .number {
                    display: none;
                }
            }

			.text {
				grid-area: text;
			}

			.number {
				grid-area: number;
                position: relative;

                span {
                    z-index: 1;
                    font-size: 16rem;
                    position: relative;
                    font-family: 'Abril Fatface', serif;
                }

                .number-underline {
                    display: none;
                    position: absolute;
                    transform: translateY(-120px);
                    background-color: var(--c-ter);
                    height: 8rem;
                    width: 100%;
                }
			}

			img {
				grid-area: img;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}

	.about-max {
		display: grid;
		width: 100%;
        margin-top: 10rem;
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

    .mission {
        background: #494f60;
        width: 100%;
        display: flex;
        justify-content: center;

        .container {
            display: grid;
            max-width: var(--screen-lg);
            grid-template:
                'image text' 100%
                / 1fr 1fr;
            place-items: center;

            .image {
                grid-area: image;
                width: 100%;
            }
            .text {
                grid-area: text;
                padding: 0 2rem;
            }
        }
    }
</style>
