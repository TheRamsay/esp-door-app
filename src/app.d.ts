import type { User } from '$lib/models/models';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			user: User | null
		}
		// interface Error {}
		// interface Platform {}
	}
}

export { };