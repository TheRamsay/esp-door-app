<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import '../app.postcss';
</script>

<main class="p-5">
	<Navbar />
	<slot />
</main>
