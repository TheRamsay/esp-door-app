<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { userStore } from '$lib/stores/userStore';
	import { onMount } from 'svelte';
	import '../app.css';
	import '../normalize.css';
	import { getCurrentUser } from '$lib/api/authApi';

	onMount(async () => {
		const user = await getCurrentUser();
		userStore.set(user);
	});
</script>

<Navbar />
<main>
	<slot />
</main>
