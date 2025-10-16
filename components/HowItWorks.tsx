// components/HowItWorks.tsx
const HowItWorks: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">1. Enter Topic</h3>
          <p>Provide keywords or a topic and choose the type of article you need.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">2. AI Generates Draft</h3>
          <p>Our AI writer creates a draft article optimized for SEO and readability.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">3. Export & Publish</h3>
          <p>Review the content, export it, and publish to your site. It's that simple!</p>
        </div>
      </div>
    </div>
  </section>
);
export default HowItWorks;
