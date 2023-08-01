import type { LayoutServerLoad } from './$types'

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ fetch, locals }) => {
    return {
        user: locals.user,
    }
}
