// components/ToolCard.tsx
import { motion } from 'framer-motion';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  disabled?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon, disabled }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`border p-6 rounded-lg shadow ${disabled ? 'opacity-50' : 'hover:shadow-lg'} transition`}
  >
    <img src={icon} alt={title} className="h-12 mb-4" />
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    {disabled ? (
      <button disabled className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
        Upgrade to Pro
      </button>
    ) : (
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Use Tool
      </button>
    )}
  </motion.div>
);
export default ToolCard;
