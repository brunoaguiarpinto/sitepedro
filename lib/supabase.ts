import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xiapmvxuksphlpeiljvr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpYXBtdnh1a3NwaGxwZWlsanZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzOTgyMTEsImV4cCI6MjA2Njk3NDIxMX0.WrONosk9_WfvZvuLup1xZ1ShRRm8ePJ6tIncQMEA59o';

export const supabase = createClient(supabaseUrl, supabaseKey);