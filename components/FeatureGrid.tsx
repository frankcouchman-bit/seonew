// components/FeatureGrid.tsx
const features = [
  { title: 'Article Generator', desc: 'Generate full-length articles on any topic.' },
  { title: 'Headline Analyzer', desc: 'Optimize headlines for clicks and SEO.' },
  { title: 'Plagiarism Checker', desc: 'Ensure your content is 100% original.' },
  { title: 'Meta Writer', desc: 'Create SEO meta descriptions and titles.' },
  { title: 'Grammar Assistant', desc: 'Check grammar and readability.' },
  { title: 'Content Summarizer', desc: 'Summarize articles into key points.' }
];

const FeatureGrid: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default FeatureGrid;
