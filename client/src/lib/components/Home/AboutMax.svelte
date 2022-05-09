<section class="about-max">
	<img class="image" src="/max-profile.jpg" alt="Max" />

	<span class="about-me">
		About<br />Me
	</span>

	<span class="text">
		<p>
            Graduating in May of 2022 from Mary Baldwin University, Maxwell Klimczak (aka Klean) received a degree in music with emphasis in composition as well as completed extracurricular training in mastering audio. Over the past five years he has worked with many artists in a multitude of genres, including rock, rap/hip hop, RnB, indie, pop, and jazz. With experience in recording/producing live bands and doing studio production he is equipped with all the skills of a full stack audio engineer and can be used as a producer or to oversee your own production.
		</p>
		<p>
			With experience in recording/producing live bands and doing studio production he is equipped
			with all the skills of a full stack audio engineer and can be used as a producer or for
			unbiased feedback.
		</p>
	</span>

	<div class="social-media">
        {#each [
            { name: 'Instagram', alt: 'Instagram@klean__official', href: 'https://www.instagram.com/klean_official/', src: '' },
            { name: 'Soundcloud', alt: 'Soundcloud@kleanstudios', href: 'https://soundcloud.com/kleanstudios?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', src: '' },
            ] as socialMedia}
			<a target="_blank" href={socialMedia.href}>
				{socialMedia.name}
				<!-- <img alt={socialMedia.alt} src={socialMedia.src} /> -->
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
	.about-max {
		display: grid;
		width: 100%;
		margin-top: 10rem;
		margin-bottom: 8rem;
		grid-template:
			'image . .' 800px
			'. . .' 50px
			/ 1fr 1fr 200px;
        position: relative;

		.image {
			grid-area: image;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.about-me {
            top: 0;
            right: 0;
			align-self: start;
			justify-self: end;
			position: absolute;

			text-transform: uppercase;
			text-align: right;
			line-height: 1;
			font-size: 14vw;
			font-family: var(--font-secondary);
            margin-right: 1rem;
		}

		.text {
			align-self: end;
			justify-self: center;
			grid-row: 1;
			grid-column: 1 / -1;

			padding: 2rem;
			margin: 0 0 0rem 0rem;
			position: relative;
			width: max(50%, 600px);
            transform: translateY(25%);

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
			padding-right: 1rem;

			a {
				color: white;
			}
		}

		@media only screen and (max-width: 800px) {
			margin-right: 0rem;
			grid-template:
				'top' 800px
				'bottom' 50px
				/ 1fr;

			.image {
                grid-area: top;
			}

            .about-me {
                font-size: 20vw;
            }

			.text {
				width: auto;
				box-sizing: border-box;
				margin: 1rem;
                grid-area: top;
                transform: translateY(0);
			}

			.social-media {
                grid-area: bottom;
			}
		}

		@media only screen and (max-width: 650px) {
            margin-top: 0;
            margin-bottom: 4rem;
			grid-template:
				'image' 500px
				'text' auto
				'social-media' auto
				/ 1fr;

            .image {
                grid-area: image;
            }
            .about-me {
                grid-area: image;
            }
            .text {
                margin: 0;
                align-self: auto;
                justify-self: auto;
                grid-area: text;
                transform: none;
                background: none;
            }
            .social-media {
                grid-area: social-media;
                width: 100%;
                padding-bottom: 1rem;
            }
        }
	}

</style>
