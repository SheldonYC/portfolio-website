import { createClient } from '@supabase/supabase-js'
import { Database } from '@/supabase/database.types'

const db = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string, {db: { schema: 'public' }})

export { db };