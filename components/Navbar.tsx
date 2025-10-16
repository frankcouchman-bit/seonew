// components/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '@/auth/supabaseClient';

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="font-bold text-xl">SEOScribe</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <Link href="/dashboard" className="hover:text-gray-700">Dashboard</Link>
          <Link href="/blog" className="hover:text-gray-700">Blog</Link>
          {!session ? (
            <Link href="/auth" className="bg-blue-600 text-white px-4 py-2 rounded">Log In</Link>
          ) : (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Log Out</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
