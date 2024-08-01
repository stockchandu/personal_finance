import { createClient } from "@supabase/supabase-js";
const baseUrl = process.env.REACT_APP_DB_BASE_URL

const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)
export const db = createClient(baseUrl, apiKey);