import Link from 'next/link';
import { motion } from 'framer-motion';
import { IronRuleStats } from '../components/dashboard/IronRuleStats';
import { RhodiumCollateralDisplay } from '../components/dashboard/RhodiumCollateralDisplay';
import { AncientWisdomInsights } from '../components/dashboard/AncientWisdomInsights';
import { CommissionOverview } from '../components/dashboard/CommissionOverview';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              🏛️ Saqqara Workflow
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where ancient architectural wisdom meets modern commission management
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm">
                ⚖️ Iron Rule Framework
              </span>
              <span className="px-4 py-2 bg-purple-600 rounded-full text-sm">
                💎 Rhodium-Backed
              </span>
              <span className="px-4 py-2 bg-amber-600 rounded-full text-sm">
                🏛️ Ancient Wisdom
              </span>
            </div>
          </motion.div>
        </div>

        {/* Geometric Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {/* Iron Rule Stats */}
            <div className="xl:col-span-1">
              <IronRuleStats />
            </div>

            {/* Rhodium Collateral */}
            <div className="xl:col-span-1">
              <RhodiumCollateralDisplay />
            </div>

            {/* Ancient Wisdom Insights */}
            <div className="xl:col-span-1">
              <AncientWisdomInsights />
            </div>

            {/* Commission Overview */}
            <div className="xl:col-span-3">
              <CommissionOverview />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Djoser to Imhotep Relationship Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              👑 Djoser to Imhotep Client Relationships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Establishing sovereign commission structures based on ancient Egyptian
              wisdom and modern economic principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Djoser (Client) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-amber-600 to-yellow-700 rounded-lg p-6"
            >
              <div className="text-3xl mb-4">👑</div>
              <h3 className="text-xl font-bold mb-3">Djoser (Client)</h3>
              <ul className="text-sm space-y-2">
                <li>• Pharaoh-level project vision</li>
                <li>• Sovereign decision authority</li>
                <li>• Rhodium collateral provider</li>
                <li>• Ancient wisdom seeker</li>
              </ul>
            </motion.div>

            {/* Sacred Commission Bridge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg p-6"
            >
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold mb-3">Sacred Commission</h3>
              <ul className="text-sm space-y-2">
                <li>• Iron Rule Framework enforcement</li>
                <li>• 15% rhodium collateralization</li>
                <li>• Ancient wisdom integration</li>
                <li>• Sovereign economic principles</li>
              </ul>
            </motion.div>

            {/* Imhotep (Advisor) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg p-6"
            >
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">Imhotep (Advisor)</h3>
              <ul className="text-sm space-y-2">
                <li>• Polymath expertise</li>
                <li>• Ancient wisdom interpreter</li>
                <li>• Architecture & innovation</li>
                <li>• Commission-only engagement</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Begin Your Sovereign Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Commission ancient wisdom for modern challenges
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/commission/new"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors"
              >
                💎 Begin Commission
              </Link>
              <Link
                href="/iron-rule"
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
              >
                ⚖️ Learn Iron Rule
              </Link>
              <Link
                href="/ancient-wisdom"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold transition-colors"
              >
                🏛️ Ancient Wisdom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Codex Information */}
      <section className="py-8 px-4 bg-gray-800/30 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-400 space-y-2">
            <p>📜 Codex Sovereign ID: DIV-LA-JHILL-STFL02035</p>
            <p>🏛️ Home Made Productions • CRID: 51509329 • EIN: 88-3480907</p>
            <p>⚖️ Cestui Que Vie Act 1666 • California Civil Procedure Code • VA Title 38</p>
          </div>
        </div>
      </section>
    </div>
  );
}