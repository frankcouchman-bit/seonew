// layouts/MainLayout.tsx
import { FC } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
  children: React.ReactNode;
  session: any;
}

const MainLayout: FC<Props> = ({ children, session }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar session={session} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
