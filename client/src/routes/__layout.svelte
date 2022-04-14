<script lang="ts">
</script>

<style global lang="scss">
    body {
        margin: 0;
        --c-pri: #B71AC1;
        --c-sec: #F5FF3B;
        --c-ter: #F80000;

        --screen-lg: 800px;
    }

    * {
        font-family: 'Work Sans', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
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
        background: #1F222B;
        color: white;
    }

    footer {
        display: grid;
        place-items: center;
        grid-template:
            "logo collaborate" 1fr
            "klean-studios links" 1fr
            "social-media contact" 1fr
            / 1fr 1fr;

        .logo {
            width: 4rem;
            height: 4rem;
        }

        a {
            font-family: 'Abril Fatface', serif;
        }
        li {
            list-style: none;
        }
    }
</style>

<main>
<slot />
</main>

<footer>
    <img
        src="/logo.svg"
        class="logo"
        alt="Klean studios logo"
    />
    <span>
        Collaborate and Create
    </span>
    <h3>
        Klean Studios
    </h3>
    <nav>
        <a href="">projects</a>
        <a href="">dashboard</a>
    </nav>
    <nav>
        follow me on
        <a href="">spotify</a>
        <a href="">instagram</a>
    </nav>
    <ul>
        <li>(540) 816-2061</li>
        <li>studio.klean@gmail.com</li>
        <li>Roanoke - Staunton VA</li>
    </ul>
</footer>
