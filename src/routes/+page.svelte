<script lang="ts">
	import DoorList from '$lib/components/DoorList/DoorList.svelte';
	import DoorListItem from '$lib/components/DoorListItem/DoorListItem.svelte';
	import type { Door } from '$lib/models/models';
	import type { PageData } from './$types';

	export let data: PageData;

	const dummyDoors: Door[] = [
		{
			id: 1,
			about: 'Purkyňova 2447/92 ',
			owner: {
				id: 1,
				username: 'Ramsay',
				discord_id: '1',
				avatar_url:
					'https://cdn.discordapp.com/avatars/314659552505102347/670d84f30859f08730b21f1ea3ea0339.webp?size=80'
			}
		},
		{
			id: 2,
			about: 'Vsetínská 117 ',
			owner: {
				id: 1,
				username: 'Ramsay',
				discord_id: '1',
				avatar_url:
					'https://cdn.discordapp.com/avatars/314659552505102347/670d84f30859f08730b21f1ea3ea0339.webp?size=80'
			}
		},
		{
			id: 3,
			about: 'Hybeška hovno',
			owner: {
				id: 1,
				username: 'PadakBahnak',
				discord_id: '1',
				avatar_url:
					'https://cdn.discordapp.com/avatars/314659552505102347/670d84f30859f08730b21f1ea3ea0339.webp?size=80'
			}
		}
	];
</script>

<div>
	<DoorList doors={data.doors} />
</div>
