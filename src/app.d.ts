import type { User } from '$lib/models/models';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			user: User;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			// doors: Door[]
		}
		// interface Error {}
		// interface Platform {}
	}
}

export { };