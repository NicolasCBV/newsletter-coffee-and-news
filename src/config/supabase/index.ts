import { createClient } from "@supabase/supabase-js";

const client_url = process.env.SUPABASE_URL as string;
const secret_role_key = process.env.SUPABASE_SECRET_ROLE_KEY as string;

export const supaClient = createClient(client_url, secret_role_key, {
  auth: {
    persistSession: false,
  },
});
