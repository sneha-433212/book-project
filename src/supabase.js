// src/supabaseClient.js
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://ewpyhirjnwmutlkpvygl.supabase.co'; // replace with your URL
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cHloaXJqbndtdXRsa3B2eWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4OTc0NTUsImV4cCI6MjA2OTQ3MzQ1NX0.ceO9YvHz1l2I9Spf35WqENjUbCS72Br8ppl-tVjIEOk'; // replace with your anon key

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ewpyhirjnwmutlkpvygl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cHloaXJqbndtdXRsa3B2eWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4OTc0NTUsImV4cCI6MjA2OTQ3MzQ1NX0.ceO9YvHz1l2I9Spf35WqENjUbCS72Br8ppl-tVjIEOk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

