// components/CTA.tsx
const CTA: React.FC = () => (
  <section className="py-12 bg-blue-600 text-white text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Content?</h2>
      <p className="mb-6">Start writing high-ranking articles with SEOScribe today.</p>
      <a href="/auth" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold">
        Get Started Free
      </a>
    </div>
  </section>
);
export default CTA;
