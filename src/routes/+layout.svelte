<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import '../app.css';
	import '../normalize.css';
</script>

<Navbar />
<main>
	<slot />
</main>
