import Link from 'next/link';
import Header from '../../components/Header';

interface GuideSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string[];
}

const guideSections: GuideSection[] = [
  {
    id: 'basics',
    title: 'V60 Basics',
    description: 'Essential knowledge for getting started with V60 pour over brewing',
    icon: '☕',
    content: [
      'The Hario V60 is a cone-shaped dripper with spiral ridges and a large hole at the bottom',
      'The 60-degree angle and spiral ridges promote even water flow and extraction',
      'V60s come in different sizes: 01 (1-2 cups), 02 (1-4 cups), 03 (1-6 cups)',
      'Materials include plastic, ceramic, glass, and metal - each affects heat retention',
      'The key to great V60 coffee is controlling water flow, temperature, and timing'
    ]
  },
  {
    id: 'equipment',
    title: 'Essential Equipment',
    description: 'Everything you need to brew perfect V60 coffee at home',
    icon: '⚖️',
    content: [
      'Hario V60 dripper (plastic recommended for beginners)',
      'V60 paper filters (white or natural, size matching your dripper)',
      'Gooseneck kettle for precise pouring control',
      'Digital scale accurate to 0.1g for consistent ratios',
      'Burr grinder for uniform particle size',
      'Timer for tracking brew time',
      'Server or mug to catch the brewed coffee'
    ]
  },
  {
    id: 'grind',
    title: 'Grind Size Guide',
    description: 'How to dial in the perfect grind for your V60',
    icon: '⚙️',
    content: [
      'Start with medium-fine grind (similar to table salt)',
      'If brew time is too fast (under 2:30), grind finer',
      'If brew time is too slow (over 4:30), grind coarser',
      'Burr grinders provide more consistent particle size than blade grinders',
      'Fresh grinding (within 15 minutes of brewing) makes a significant difference',
      'Different coffee origins may require slight grind adjustments'
    ]
  },
  {
    id: 'water',
    title: 'Water Quality & Temperature',
    description: 'The foundation of great coffee starts with great water',
    icon: '💧',
    content: [
      'Use filtered water with 150-300 TDS (total dissolved solids)',
      'Water temperature should be 92-96°C (198-205°F)',
      'Let boiling water rest for 30-60 seconds to reach ideal temperature',
      'Avoid distilled water - minerals are needed for proper extraction',
      'Hard water can over-extract, soft water can under-extract',
      'Water makes up 98% of your coffee, so quality matters immensely'
    ]
  },
  {
    id: 'ratios',
    title: 'Coffee to Water Ratios',
    description: 'Finding your perfect strength and flavor balance',
    icon: '📏',
    content: [
      'Standard ratio: 1:15 to 1:17 (coffee:water by weight)',
      '1:15 for stronger, more intense coffee',
      '1:16 for balanced, versatile brewing',
      '1:17 for lighter, more delicate flavors',
      'Example: 20g coffee + 320g water = 1:16 ratio',
      'Adjust ratio based on personal taste preferences'
    ]
  },
  {
    id: 'technique',
    title: 'Pouring Technique',
    description: 'Master the art of controlled water pouring',
    icon: '🌊',
    content: [
      'Start with a bloom: pour 2x coffee weight in water (e.g., 40g water for 20g coffee)',
      'Pour in slow, controlled circles from center outward',
      'Keep water level consistent throughout the brew',
      'Avoid pouring directly on the filter paper',
      'Maintain steady, gentle flow rate',
      'Total brew time should be 2:30-4:00 minutes'
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and how to fix them',
    icon: '🔧',
    content: [
      'Sour/acidic taste: Grind finer, increase water temperature, or extend brew time',
      'Bitter taste: Grind coarser, decrease water temperature, or reduce brew time',
      'Weak coffee: Use more coffee, grind finer, or increase water temperature',
      'Uneven extraction: Improve pouring technique, ensure level coffee bed',
      'Clogged filter: Grind coarser, pour more gently',
      'Inconsistent results: Check grinder calibration, water temperature, and timing'
    ]
  },
  {
    id: 'maintenance',
    title: 'Care & Maintenance',
    description: 'Keep your equipment in perfect condition',
    icon: '🧽',
    content: [
      'Rinse V60 with hot water after each use',
      'Deep clean weekly with mild soap and warm water',
      'Descale kettle monthly with vinegar solution',
      'Clean grinder burrs regularly to prevent oil buildup',
      'Store coffee beans in airtight container away from light and heat',
      'Replace grinder burrs when coffee tastes dull despite fresh beans'
    ]
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            V60 Brewing Guides
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Master the art of V60 pour over brewing with our comprehensive guides.
            From basic techniques to advanced tips, everything you need to brew exceptional coffee.
          </p>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-coffee-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-coffee-700">
              New to V60? Follow these simple steps for your first great cup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-cream-200 text-center">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="font-semibold text-coffee-900 mb-2">Heat Water</h3>
              <p className="text-sm text-coffee-600">Heat water to 94°C (201°F)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-cream-200 text-center">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="font-semibold text-coffee-900 mb-2">Grind Coffee</h3>
              <p className="text-sm text-coffee-600">Medium-fine grind, 1:16 ratio</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-cream-200 text-center">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="font-semibold text-coffee-900 mb-2">Bloom</h3>
              <p className="text-sm text-coffee-600">Pour 2x coffee weight, wait 30s</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-cream-200 text-center">
              <div className="text-3xl mb-4">4️⃣</div>
              <h3 className="font-semibold text-coffee-900 mb-2">Pour</h3>
              <p className="text-sm text-coffee-600">Slow circles, 2:30-3:30 total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Guides */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-coffee-900 mb-4">
              Complete Brewing Guides
            </h2>
            <p className="text-lg text-coffee-700">
              Deep dive into every aspect of V60 brewing for consistently excellent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guideSections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl border border-cream-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-coffee-900">
                        {section.title}
                      </h3>
                      <p className="text-sm text-coffee-600">{section.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-coffee-800">
                        <span className="text-coffee-400 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Recommendations */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-coffee-900 mb-6">
            Ready to Start Brewing?
          </h2>
          <p className="text-lg text-coffee-700 mb-8">
            Now that you understand the fundamentals, try these beginner-friendly recipes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-cream-50 rounded-xl">
              <h3 className="font-semibold text-coffee-900 mb-2">For Beginners</h3>
              <p className="text-sm text-coffee-600 mb-4">Start with our forgiving beginner recipe</p>
              <Link href="/recipes/beginner-friendly">
                <button className="btn-secondary text-sm">
                  Try Beginner Recipe
                </button>
              </Link>
            </div>

            <div className="p-6 bg-cream-50 rounded-xl">
              <h3 className="font-semibold text-coffee-900 mb-2">Single Pour</h3>
              <p className="text-sm text-coffee-600 mb-4">Simple technique, consistent results</p>
              <Link href="/recipes/single-pour">
                <button className="btn-secondary text-sm">
                  Try Single Pour
                </button>
              </Link>
            </div>

            <div className="p-6 bg-cream-50 rounded-xl">
              <h3 className="font-semibold text-coffee-900 mb-2">Expert Method</h3>
              <p className="text-sm text-coffee-600 mb-4">James Hoffmann's ultimate technique</p>
              <Link href="/recipes/james-hoffmann-ultimate">
                <button className="btn-secondary text-sm">
                  Try Expert Recipe
                </button>
              </Link>
            </div>
          </div>

          <Link href="/recipes">
            <button className="btn-primary text-lg px-8 py-4">
              View All Recipes →
            </button>
          </Link>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-coffee-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-8">
            Pro Tips for Better Coffee
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="font-semibold text-xl mb-4 text-coffee-100">☕ Consistency is Key</h3>
              <ul className="space-y-2 text-coffee-200">
                <li>• Use the same ratio, grind, and technique each time</li>
                <li>• Keep detailed notes of what works</li>
                <li>• Make one adjustment at a time</li>
                <li>• Practice makes perfect</li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-xl mb-4 text-coffee-100">🎯 Focus on Fundamentals</h3>
              <ul className="space-y-2 text-coffee-200">
                <li>• Fresh, quality coffee beans</li>
                <li>• Proper grind size and consistency</li>
                <li>• Accurate measurements</li>
                <li>• Controlled pouring technique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}