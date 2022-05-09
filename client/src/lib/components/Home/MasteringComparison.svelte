<script lang="ts">
	import { Howl, Howler } from 'howler';

	function playSound(src: string) {
		const sound = new Howl({
			src: [src],
            volume: 0.25,
		});

		Howler.stop();
		sound.play();
        console.log(sound.duration())
	}
</script>

<section class="mastering-comparison">
    <div class="wrapper">
        <h2>Track Comparisons</h2>
        {#each [
            { beforeText: 'Final Mix', afterText: 'Mastered', name: 'Look at You', before: 'look-at-you-preview.wav', after: 'look-at-you-preview-master.wav'},
            { beforeText: 'Unmixed', afterText: 'Mastered', name: 'Sleep Walkers', before: 'sleep-walkers-preview.wav', after: 'sleep-walkers-preview-master.wav'},
            ] as track, i}
            {#if i !== 0}
                <div class="divider" />
            {/if}
            <div class="track-preview">
                <span class="track-name">
                    {track.name}
                </span>
                <button class="before" on:click={() => playSound(`/audio/${track.before}`)}>{track.beforeText}</button>
                <button class="after" on:click={() => playSound(`/audio/${track.after}`)}>{track.afterText}</button>
            </div>
        {/each}
                </div>
</section>


<style lang="scss">
    .mastering-comparison {
        margin: 4rem auto;
        margin-bottom: 8rem;
        /* background: var(--c-gray); */
        max-width: var(--screen-md);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .wrapper {
            padding: 4rem 0;
            width: 100%;
            max-width: var(--screen-md);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h2 {
            align-self: start;
            margin-bottom: 4rem;
        }

        .divider {
            width: 100%;
            height: 1px;
            background-color: white;
            margin: 2rem 0;
        }

        .track-preview {
            display: grid;
            width: 100%;
            grid-template:
                "name before after"  auto
                / 1fr auto auto;
            --gradient-rotation: 65deg;
            --before-color-end: #DA9B76;
            --after-color-end: #D68E7C;

            .track-name {
                grid-area: name;
                font-family: var(--font-secondary);
                align-self: center;
                font-size: 1.5rem;
            }

            .before {
                grid-area: before;
                background: linear-gradient(var(--gradient-rotation), var(--c-pri), var(--before-color-end));
            }

            .after {
                grid-area: after;
                background: linear-gradient(var(--gradient-rotation), var(--after-color-end), #b6a384);
            }

            button {
                width: 12rem;
                height: 7.25rem;
                margin: 0.25rem;
                border: none;
                border-radius: 0.25rem;
                /* background: var(--c-gray); */
                padding: 1rem;
                color: white;
                font-size: 2rem;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 1000px) {
        .mastering-comparison {
            padding: 0 2rem;
            h2 {
                font-size: 4rem;
            }
            .track-name {
                font-size: 1rem;
            }

            .track-preview {
                button {
                    padding: 0.5rem;
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (max-width: 700px) {
        .mastering-comparison {
            padding: 0 2rem;
            h2 {
                font-size: 3rem;
            }
            .track-name {
                font-size: 1rem;
            }

            .track-preview {
                button {
                    width: auto;
                    height: auto;
                    padding: 0.5rem;
                    font-size: 1.5rem;
                }
            }
        }
    }

    @media (max-width: 400px) {
        .mastering-comparison {

            .track-preview {
                display: flex;
                flex-direction: column;
                align-items: center;

                .track-name {
                    font-size: 1.5rem;
                    padding: 1rem 0 2rem;
                }

                button {
                    width: 100%;
                }
            }
        }
    }
</style>
