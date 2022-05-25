
<script>
import { gsap } from 'gsap'
import { onMount } from 'svelte'

const fontStyle = "font-family: 'Abril Fatface', serif;"

const timeline = gsap.timeline({
  defaults: { duration: 3, ease: 'power3.in', delay: 0.3 },
})


onMount(async () => {
    /* const userAgent = (agent) => RegExp(agent, 'i').test(window.navigator.userAgent) */

    timeline
        .fromTo(
            'tspan',
            { fill: '#1f222b', stroke: '#1f222b' },
            { duration: 0, stroke: '#fff' },
            0
        )
        .fromTo(
            'tspan',
            { strokeDashoffset: '200', strokeDasharray: '200' },
            {
                strokeDashoffset: '0',
                stagger: { each: 0.2, grid: [2, 7], from: 'start' },
                duration: 0.6,
            }
        )
        .fromTo(
            'tspan',
            { fill: '#1f222b' },
            {
                fill: 'white',
                duration: 1,
                stagger: { each: 0.15, grid: [2, 7], from: 'start' },
            },
            '0.6'
        )
        .fromTo('.welcome-text', {opacity: 1}, { opacity: 0, duration: 0.5 })
})

</script>

<div {...$$restProps} class="welcome-text">
<svg viewBox="0 0 56 46">
  <text x="6.5" y="18" letter-spacing="-0.3">
  {#each 'Klean  ' as c}
      <tspan style={fontStyle}>
        {c}
      </tspan>
  {/each}
  </text>
  <text x="0" y="40" letter-spacing="-0.3">
  {#each 'Studios' as c}
      <tspan style={fontStyle}>
        {c}
      </tspan>
  {/each}
  </text>
</svg>
</div>

<style lang="scss">
    .welcome-text {
        height: 100vh;
        width: 100%;
        left: 0; right: 0;
        z-index: 10;
        position: absolute; top: 0;
        background: #1f222b;
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 1rem;
    }

    svg {
        stroke-width: 0.2;
        stroke: #1f222b;
        fill: #1f222b;
    }
</style>
