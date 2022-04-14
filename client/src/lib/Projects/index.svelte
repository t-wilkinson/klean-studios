<script context="module" lang="ts">
</script>

<script lang="ts">
    export let projects;

	import { spring } from 'svelte/motion';
    let coords = spring({ x: 0, y: 0}, {
    stiffness: 0.1,
    damping: 0.25,
    });

    let size = spring(10)
</script>

<style>
    .separator {
        height: 2px;
        background-color: #e0e0e0;
    }

    .project {
        position: relative;
    }

    .image {
        position: absolute;
        width: 80px;
        height: 80px;
        background-color: green;
    }
</style>

<div class="separator" />
{#each projects as project}
    <div>
    </div>
    <div class="project" on:mousemove={e => coords.set({ x: e.clientX, y: e.clientY })}>
        <h2>{project.name}</h2>
        <p>{project.url}</p>
        <div class="image" style="translate-x: $coords.x; translate-y: $coords.y;">
            <img src="{project.image}" alt={project.name} />
        </div>
    </div>
    <div class="separator" />
{/each}
