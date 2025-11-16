import { createClient } from '@supabase/supabase-js'

// Create a lazy supabase client for interacting with your database.
// Using a getter avoids potential circular-import / TDZ issues
// where another module might try to access the binding before
// initialization (common with HMR or import cycles).
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
	console.error(
		'Missing Supabase env vars. Create a `.env.local` with REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY and restart the dev server.'
	);
}

const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '');

export { supabase };
export function getSupabase() {
	return supabase;
}