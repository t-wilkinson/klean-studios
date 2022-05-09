<script>
    // import Project from "$lib/Projects/Project.svelte"
    document.title = "Projects | Klean Studios"

/*     gsap.fromTo( */
/*       "h2", */
/*       {y: 100}, */
/*       {y: -100, */
/*         scrollTrigger: { */
/*           trigger: "h2", */
/*           scrub: 0.5, */
/*         }, */
/*       }, */
/*     ) */

    // @ts-ignore
    /* const blurryImageLoad = new BlurryImageLoad() */
    /* blurryImageLoad.load() */

    export let projects = []
    $: {
        // projects.sort((v1, v2) => v1.order - v2.order)
    }
</script>

hi

<main
class="w-full col"
>
<section
  class="w-full h-screen max-w-screen-xl flex flex-col justify-between relative
  mx-4 sm:mx-8 md:mx-16
  sm:px-8 sm:py-4
  md:px-32 md:py-16
  "
>

    <img
      class="blurry-load h-screen w-full md:w-auto absolute right-0 top-0 object-cover -z-10"
      data-large="/assets/images/max-1.jpg"
        style="transform: scaleX(-1)"
        src="/assets/images/max-1.jpg"
        alt="Portfolio of Max"
    />

  <div
    class="h-screen pt-32 pb-16 absolute right-0 w-full top-0 object-cover -z-10"
    style="background: rgba( 255 255 255 / 50%)"
  />

  <h2
    class="
    text-6xl
    sm:text-7xl sm:max-w-screen-sm
    md:text-7xl md:max-w-screen-md
    lg:max-w-screen-lg lg:text-8xl
    pt-16
    mt-8 ml-8
    md:mt-0 md:ml-0
    "
  >
    check out my projects
  </h2>
  <div
    class="text-sm sm:text-base md:text-lg md:w-128 -z-10 space-y-4 px-8 py-4 text-white bg-black"
  >
    <p><strong>Founder of Klean Studios:</strong> Maxwell Klimczak</p>
    <p><strong>Resides:</strong> Roanoke, VA</p>
    <p><strong>Education:</strong>  Currently pursuing a music degree with emphasis in composition at Mary Baldwin University</p>
    <p><strong>Quote:</strong> “Since my childhood I have been obsessed with music. I like how it brings people together and allows us to express ourselves. That is why I want to help people bring their musical ideas to life. It is a language that we can all speak with our own unique slang representing where we came from and how we were brought up.”</p>
  </div>
</section>
<section
  class="w-full px-8
  my-64
  sm:max-w-screen-sm mg:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
  "
>

{#each projects as v, i}
  <Project key={i} group={v.group} href={v.href} src={v.src} alt={v.alt} />
{/each}

  <div
    class="w-full h-1 bg-black"
    style="height: 1px"
  />
</section>
</main>
