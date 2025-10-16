// pages/index.tsx
import Head from 'next/head';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import FeatureGrid from '@/components/FeatureGrid';
import Testimonials from '@/components/Testimonials';
import TrustedBy from '@/components/TrustedBy';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>SEOScribe - AI Article Writer & SEO Tool</title>
        <meta name="description" content="SEOScribe is an AI-powered article writer and SEO tool. Generate high-quality content with our AI writer." />
        {/* Open Graph */}
        <meta property="og:title" content="SEOScribe - AI Article Writer & SEO Tool" />
        <meta property="og:description" content="Generate SEO-optimized articles instantly with SEOScribe's AI writing tool." />
        <meta property="og:image" content="/og-home.png" />
        <link rel="canonical" href="https://www.seoscribe.com/" />
      </Head>

      <Hero />
      <HowItWorks />
      <FeatureGrid />
      <Testimonials />
      <TrustedBy />
      <FAQ />
      <CTA />
    </>
  );
}
