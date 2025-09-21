import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AncientWisdomProvider } from '../components/providers/AncientWisdomProvider';
import { IronRuleProvider } from '../components/providers/IronRuleProvider';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saqqara Workflow - gTek Integrated Ecosystem',
  description: 'Commission management with ancient wisdom principles. Djoser to Imhotep client relationships powered by Iron Rule Framework.',
  keywords: [
    'saqqara',
    'giza',
    'ancient wisdom',
    'commission management',
    'iron rule framework',
    'rhodium backed',
    'djoser',
    'imhotep',
    'sovereign workflow'
  ],
  authors: [{ name: 'Jerome Elston Hill Jr.' }],
  creator: 'Home Made Productions',
  publisher: 'gTek Integrated Ecosystem',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Saqqara Workflow - Ancient Wisdom Commission Management',
    description: 'Where ancient architectural principles meet modern commission management',
    url: 'https://gtek-integrated-ecosystem.vercel.app',
    siteName: 'gTek Integrated Ecosystem',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630/4F46E5/FFFFFF?text=Saqqara+Workflow',
        width: 1200,
        height: 630,
        alt: 'Saqqara Workflow - Ancient Wisdom Commission Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saqqara Workflow - Ancient Wisdom Commission Management',
    description: 'Iron Rule Framework compliant commission management',
    images: ['https://via.placeholder.com/1200x630/4F46E5/FFFFFF?text=Saqqara+Workflow'],
  },
  other: {
    'iron-rule-framework': 'Commission or charitable donation only',
    'rhodium-backed': 'true',
    'ancient-wisdom': 'Saqqara-Giza protocols',
    'codex-sovereign-id': 'DIV-LA-JHILL-STFL02035',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <AncientWisdomProvider>
          <IronRuleProvider>
            <div className="flex flex-col min-h-screen">
              {/* Iron Rule Framework Banner */}
              <div className="bg-indigo-600 text-white py-2 px-4 text-center text-sm">
                ⚖️ Iron Rule Framework: Commission or charitable donation only • 💎 Rhodium-backed
              </div>
              
              <Navigation />
              
              <main className="flex-grow">
                {children}
              </main>
              
              <Footer />
            </div>
          </IronRuleProvider>
        </AncientWisdomProvider>
      </body>
    </html>
  );
}