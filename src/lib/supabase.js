import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oanednoghmsaokcdgbsw.supabase.co'; 
const supabaseKey = 'sb_publishable_h6fvP8noZ_9eUaxajCq-LA_urov1WIB'; 

export const supabase = createClient(supabaseUrl, supabaseKey);