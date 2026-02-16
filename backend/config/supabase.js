import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
// Use service role key for backend uploads so we bypass Row Level Security (RLS).
// The anon key has no permission to INSERT into storage by default, causing "new row violates row-level security policy".
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or keys missing. Profile uploads will fail.')
}

// Create a storage bucket named "profile-images" in Supabase dashboard and set it to public.
export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
