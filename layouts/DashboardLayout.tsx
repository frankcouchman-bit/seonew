// layouts/DashboardLayout.tsx
import { FC } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DashboardLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <Navbar />
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <Footer />
  </div>
);

export default DashboardLayout;
