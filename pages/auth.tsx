// pages/auth.tsx
import Head from 'next/head';
import { useState } from 'react';
import { supabase } from '@/auth/supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const handleMagicLink = async () => {
    await supabase.auth.signInWithOtp({ email });
    alert('Check your email for the login link.');
  };

  return (
    <>
      <Head>
        <title>Sign In - SEOScribe</title>
        <meta name="description" content="Sign in to SEOScribe with Google or Magic Link." />
        <link rel="canonical" href="https://www.seoscribe.com/auth" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Log In to SEOScribe</h2>
          <button
            onClick={handleGoogleSignIn}
            className="w-full mb-4 flex justify-center items-center bg-white border p-2 rounded hover:bg-gray-100"
          >
            <img src="/google-icon.svg" alt="Google" className="h-5 mr-2" />
            Sign in with Google
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t" />
          </div>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border rounded px-3 py-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleMagicLink}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Magic Link
          </button>
        </div>
      </div>
    </>
  );
}
