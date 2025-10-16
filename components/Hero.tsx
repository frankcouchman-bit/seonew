// components/Hero.tsx
import { motion } from 'framer-motion';
const Hero: React.FC = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        AI Article Writer and SEO Content Tool
      </h1>
      <p className="text-lg mb-6">
        Instantly generate SEO-optimized articles with our AI writing tool. Save time and improve your content quality.
      </p>
      <a href="/auth" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">
        Try it Free
      </a>
      {/* Hero image */}
      <motion.img
        src="/hero-illustration.png"
        alt="AI writer illustration"
        className="mx-auto mt-10 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  </section>
);
export default Hero;
