<section class="beats">
    <div class="marquee">
        <h2>BEATS   BEATS   BEATS   BEATS   </h2>
        <h2>BEATS   BEATS   BEATS   BEATS   </h2>
    </div>
	<a href="https://soundcloud.com/kleanstudios?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">
		<img src="/soundcloud-logo-white.png" alt="Soundcloud logo" />
	</a>
</section>

<style lang="scss">
	.beats {
		height: 100vh;
		width: 100%;
		position: relative;
		display: grid;
		grid-template: 1fr / 1fr;
		align-items: start;
		justify-items: center;
		padding: 8rem 0 12rem 0;
        overflow: hidden;

		background: linear-gradient(to bottom, #f89810 0%, #f8320f 100%);

        @keyframes -scroll-text {
            0% { transform: translate(0, -47%); }
            100% { transform: translate(-50%, -47%); }
        }

		img {
			width: 100%;
			max-width: 700px;
			height: 700px;
			object-fit: contain;
			position: relative;
		}

        .marquee {
            animation: -scroll-text 30s linear infinite;
            white-space: pre;
            overflow: hidden;
            display: inline-block;

            top: 50%;
			position: absolute;
			left: 0;
			opacity: 0.5;
			color: var(--c-bg);
        }

        .marquee h2 {
            white-space: pre;
            display: inline-block;
			font-size: min(70vw, 50rem);
        }

        @media (max-width: 800px) {
            .marquee h2 {
                font-size: 40vh;
            }
        }

	}

</style>
