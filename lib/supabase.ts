import { createClient } from '@supabase/supabase-js'


export function createBrowserClient() {
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string


if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
throw new Error('Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
}


return createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}