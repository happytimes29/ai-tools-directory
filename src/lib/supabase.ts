import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yqmuxdjwyoeogyftjhyf.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AITool {
  id?: number;
  name: string;
  url: string;
  description: string;
  category: string;
  pricing: string;
  image_url?: string;
  featured?: boolean;
  created_at?: string;
}

export interface Category {
  id?: number;
  name: string;
  slug: string;
  icon: string;
  description?: string;
}
