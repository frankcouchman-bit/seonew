// components/FAQ.tsx
const faqData = [
  {
    question: 'Can I try SEOScribe for free?',
    answer: 'Yes! We offer a free tier. Sign up to get started with a limited number of article generations.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards via Stripe for our Pro subscription.'
  },
  {
    question: 'How do I upgrade to Pro?',
    answer: 'Go to your Dashboard and click the "Upgrade to Pro" button to subscribe via Stripe.'
  }
];

const FAQ: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{item.question}</h3>
            <p className="mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(q => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
              }
            }))
          })
        }}
      />
    </div>
  </section>
);
export default FAQ;
