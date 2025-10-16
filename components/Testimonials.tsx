// components/Testimonials.tsx
const testimonials = [
  { name: 'James Lua', text: 'SEOScribe transformed my blogging workflow. The AI writer is incredibly accurate and saves me hours each week.' },
  { name: 'Stacy Pitt', text: 'As a marketer, I love how SEOScribe optimizes my content for SEO automatically. My traffic has never been higher!' },
  { name: 'Trevor Calum', text: 'The writing tool is so intuitive. It helps me overcome writer’s block and create engaging articles in minutes.' }
];

const Testimonials: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">&ldquo;{t.text}&rdquo;</p>
            <p className="font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;
