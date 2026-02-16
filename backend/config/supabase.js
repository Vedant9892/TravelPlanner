import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (process.env.SUPABASE_URL || '').trim()
// Keys must be the actual JWT strings from Supabase (Project Settings → API), e.g. eyJhbGciOiJIUzI1...
// Using "sb_publishable_..." or "sb_secret_..." style values causes "Invalid Compact JWS".
const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim().replace(/^["']|["']$/g, '')

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or keys missing. Profile uploads will fail.')
}
if (supabaseKey && !supabaseKey.includes('.')) {
  console.warn('Supabase key should be a JWT (long string with dots). Get anon/service_role from Project Settings → API.')
}

// Create a storage bucket named "profile-images" in Supabase dashboard and set it to public.
export const supabase = createClient(supabaseUrl || '', supabaseKey || '')
