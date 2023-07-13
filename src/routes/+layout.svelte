<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import '../app.postcss';
	// import '../normalize.css';
</script>

<Navbar />
<main>
	<slot />
</main>
