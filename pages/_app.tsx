// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '@/auth/supabaseClient';

export default function App({ Component, pageProps }: AppProps) {
  // Track user session
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <MainLayout session={session}>
      <Component {...pageProps} session={session} />
    </MainLayout>
  );
}
