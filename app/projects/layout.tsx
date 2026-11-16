import "../globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Yain Huento | Portfolio",
  description: "Welcome to Yain's portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ul className="flex items-center gap-3 flex-col m-5">
          <li><Link href="/projects/opensource">Open Source Projects</Link></li>
          <li><Link href="/projects/school">School Projects</Link></li>
        {children}
        </ul>    
        
  );
}