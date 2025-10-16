// components/UsageTracker.tsx
const UsageTracker: React.FC<{ used: number; limit: number }> = ({ used, limit }) => (
  <div className="mb-4 text-right">
    <span className="text-sm text-gray-600">
      Used {used} of {limit} free generations
    </span>
  </div>
);
export default UsageTracker;
