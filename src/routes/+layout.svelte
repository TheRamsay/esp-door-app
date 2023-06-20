<script>
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { userStore } from '$lib/stores/userStore';
	import { onMount } from 'svelte';
	import '../app.css';
	import '../normalize.css';
	import { getCurrentUser } from '$lib/api/api';

	export const ssr = false;

	onMount(async () => {
		try {
			const user = await getCurrentUser();
			userStore.set(user);
		} catch {
			console.log('User not found');
		}
	});
</script>

<Navbar />
<main>
	<slot />
</main>
