import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; https://oanednoghmsaokcdgbsw.supabase.co
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; sb_publishable_h6fvP8noZ_9eUaxajCq-LA_urov1WIB

export const supabase = createClient(supabaseUrl, supabaseKey);