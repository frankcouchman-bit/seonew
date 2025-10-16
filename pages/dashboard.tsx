// pages/dashboard.tsx
import Head from 'next/head';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import ToolCard from '@/components/ToolCard';
import UsageTracker from '@/components/UsageTracker';
import { supabase } from '@/auth/supabaseClient';

const tools = [
  { title: 'Article Writer', icon: '/icon-article.png', desc: 'Generate full articles' },
  { title: 'Headline Analyzer', icon: '/icon-headline.png', desc: 'Optimize your titles' },
  { title: 'Plagiarism Checker', icon: '/icon-plagiarism.png', desc: 'Check for duplicate content' },
  { title: 'Meta Writer', icon: '/icon-meta.png', desc: 'Write SEO meta tags' },
];

export default function Dashboard({ session }: any) {
  const [user, setUser] = useState<any>(null);
  const [isPro, setIsPro] = useState(false);
  const [usedGen, setUsedGen] = useState(0);

  useEffect(() => {
    if (session) {
      // Fetch user data (simulate subscription flag)
      const getUser = async () => {
        const { data } = await supabase.from('profiles').select('is_pro').eq('id', session.user.id).single();
        setUser(data);
        setIsPro(data?.is_pro || false);
      };
      getUser();
    }
  }, [session]);

  if (!session) {
    return (
      <DashboardLayout>
        <Head>
          <title>Dashboard - SEOScribe</title>
          <meta name="description" content="Dashboard - please log in." />
        </Head>
        <div className="text-center py-20">
          <p>Please log in to access your dashboard.</p>
        </div>
      </DashboardLayout>
    );
  }

  const freeLimit = 3;

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard - SEOScribe</title>
        <meta name="description" content="Your SEOScribe Dashboard." />
        <link rel="canonical" href="https://www.seoscribe.com/dashboard" />
      </Head>

      <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.email}</h1>
      {!isPro && <UsageTracker used={usedGen} limit={freeLimit} />}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <ToolCard
            key={idx}
            title={tool.title}
            description={tool.desc}
            icon={tool.icon}
            disabled={!isPro && idx >= 2} // first 2 free, rest locked for free users
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
