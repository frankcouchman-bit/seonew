// components/TrustedBy.tsx
const brands = [
  { name: 'ClearSEO Tools', logo: '/logo-clearseo.png' },
  { name: 'WaveMarket Labs', logo: '/logo-wavemarket.png' },
  { name: 'MetricHawk', logo: '/logo-mertrichawk.png' }
];

const TrustedBy: React.FC = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold mb-6">Trusted by Top Brands</h2>
      <div className="flex justify-center items-center space-x-8">
        {brands.map((b, idx) => (
          <img key={idx} src={b.logo} alt={b.name} className="h-10" />
        ))}
      </div>
    </div>
  </section>
);
export default TrustedBy;
