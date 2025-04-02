import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_API_KEY!
);
