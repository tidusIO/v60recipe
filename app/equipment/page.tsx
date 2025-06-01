import Link from 'next/link';
import Header from '../../components/Header';

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  description: string;
  importance: 'Essential' | 'Recommended' | 'Nice to Have';
  priceRange: string;
  tips: string[];
}

const equipment: EquipmentItem[] = [
  {
    id: 'v60-dripper',
    name: 'Hario V60 Dripper',
    category: 'Brewing',
    description: 'The heart of your V60 setup. Available in different sizes and materials.',
    importance: 'Essential',
    priceRange: '$8-40',
    tips: [
      'Size 02 is most versatile for 1-4 cups',
      'Plastic retains heat well and is affordable',
      'Ceramic looks great but needs preheating',
      'Glass is beautiful but fragile'
    ]
  },
  {
    id: 'filters',
    name: 'V60 Paper Filters',
    category: 'Brewing',
    description: 'Specially designed filters that fit the V60\'s unique shape and ridges.',
    importance: 'Essential',
    priceRange: '$6-12',
    tips: [
      'White filters are bleached, natural are unbleached',
      'Always rinse before brewing to remove papery taste',
      'Buy the correct size for your dripper',
      'Store in dry place to prevent moisture absorption'
    ]
  },
  {
    id: 'gooseneck-kettle',
    name: 'Gooseneck Kettle',
    category: 'Water',
    description: 'Precise pouring control is essential for even extraction.',
    importance: 'Essential',
    priceRange: '$25-150',
    tips: [
      'Electric models offer temperature control',
      'Stovetop versions are more affordable',
      'Look for comfortable handle and balanced weight',
      'Narrow spout provides better control'
    ]
  },
  {
    id: 'scale',
    name: 'Digital Scale',
    category: 'Measurement',
    description: 'Accurate measurements are crucial for consistent results.',
    importance: 'Essential',
    priceRange: '$15-200',
    tips: [
      'Must be accurate to 0.1g',
      'Built-in timer is very helpful',
      'Water-resistant models last longer',
      'Large platform accommodates dripper and server'
    ]
  },
  {
    id: 'grinder',
    name: 'Burr Coffee Grinder',
    category: 'Preparation',
    description: 'Consistent grind size is fundamental to good extraction.',
    importance: 'Essential',
    priceRange: '$30-500+',
    tips: [
      'Burr grinders are superior to blade grinders',
      'Manual grinders are affordable and portable',
      'Electric grinders offer convenience',
      'Stepless adjustment provides more control'
    ]
  },
  {
    id: 'server',
    name: 'Coffee Server/Carafe',
    category: 'Serving',
    description: 'Collects brewed coffee and keeps it warm.',
    importance: 'Recommended',
    priceRange: '$15-60',
    tips: [
      'Glass servers show coffee color and clarity',
      'Thermal carafes keep coffee warm longer',
      'Size should match your brewing volume',
      'Pour spout design affects serving experience'
    ]
  },
  {
    id: 'thermometer',
    name: 'Thermometer',
    category: 'Temperature',
    description: 'Monitor water temperature for optimal extraction.',
    importance: 'Recommended',
    priceRange: '$10-30',
    tips: [
      'Instant-read thermometers are most convenient',
      'Some kettles have built-in temperature display',
      'Infrared thermometers are contactless',
      'Aim for 92-96°C (198-205°F) water temperature'
    ]
  },
  {
    id: 'timer',
    name: 'Timer',
    category: 'Timing',
    description: 'Track brew time for consistency and troubleshooting.',
    importance: 'Recommended',
    priceRange: '$5-25',
    tips: [
      'Many scales include built-in timers',
      'Smartphone apps work well too',
      'Some prefer dedicated brewing timers',
      'Track both bloom and total brew time'
    ]
  },
  {
    id: 'stirrer',
    name: 'Coffee Stirrer',
    category: 'Technique',
    description: 'For stirring bloom and ensuring even saturation.',
    importance: 'Nice to Have',
    priceRange: '$5-15',
    tips: [
      'Bamboo stirrers are gentle on filters',
      'Spoons work but may tear filter',
      'Some prefer chopsticks',
      'Only needed for certain techniques'
    ]
  }
];

const categories = ['Brewing', 'Water', 'Measurement', 'Preparation', 'Serving', 'Temperature', 'Timing', 'Technique'];

export default function EquipmentPage() {
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Essential':
        return 'bg-red-100 text-red-800';
      case 'Recommended':
        return 'bg-yellow-100 text-yellow-800';
      case 'Nice to Have':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            V60 Equipment Guide
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Everything you need to brew exceptional V60 coffee at home. From essential basics
            to nice-to-have upgrades, find the right equipment for your brewing journey.
          </p>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 px-4 bg-cream-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-coffee-900 mb-4">
              Budget-Friendly Starter Kits
            </h2>
            <p className="text-lg text-coffee-700">
              Get started with V60 brewing at different price points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-cream-200">
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold text-coffee-900 mb-2">
                  Budget Starter
                </h3>
                <div className="text-2xl font-bold text-coffee-600">$50-80</div>
              </div>
              <ul className="space-y-2 text-sm text-coffee-800">
                <li>• Plastic V60 dripper</li>
                <li>• Paper filters</li>
                <li>• Basic digital scale</li>
                <li>• Manual burr grinder</li>
                <li>• Regular kettle</li>
              </ul>
              <p className="text-xs text-coffee-600 mt-4">
                Perfect for trying V60 brewing without a big investment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-cream-200 ring-2 ring-coffee-200">
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold text-coffee-900 mb-2">
                  Recommended Setup
                </h3>
                <div className="text-2xl font-bold text-coffee-600">$150-250</div>
                <span className="text-xs bg-coffee-100 text-coffee-800 px-2 py-1 rounded-full">Most Popular</span>
              </div>
              <ul className="space-y-2 text-sm text-coffee-800">
                <li>• Ceramic V60 dripper</li>
                <li>• Paper filters</li>
                <li>• Scale with timer</li>
                <li>• Electric burr grinder</li>
                <li>• Gooseneck kettle</li>
                <li>• Glass server</li>
              </ul>
              <p className="text-xs text-coffee-600 mt-4">
                Great balance of quality and value for serious home brewing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-cream-200">
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold text-coffee-900 mb-2">
                  Premium Kit
                </h3>
                <div className="text-2xl font-bold text-coffee-600">$400+</div>
              </div>
              <ul className="space-y-2 text-sm text-coffee-800">
                <li>• Multiple V60 drippers</li>
                <li>• Premium filters</li>
                <li>• Professional scale</li>
                <li>• High-end grinder</li>
                <li>• Electric gooseneck kettle</li>
                <li>• Thermal server</li>
                <li>• Accessories</li>
              </ul>
              <p className="text-xs text-coffee-600 mt-4">
                Professional-grade equipment for the ultimate brewing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-coffee-900 mb-4">
              Complete Equipment Guide
            </h2>
            <p className="text-lg text-coffee-700">
              Detailed breakdown of every piece of equipment you might need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-cream-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-coffee-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-coffee-600">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(item.importance)}`}>
                        {item.importance}
                      </span>
                      <div className="text-sm font-semibold text-coffee-800 mt-1">
                        {item.priceRange}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-coffee-700 mb-4">
                    {item.description}
                  </p>

                  <div>
                    <h4 className="font-medium text-coffee-900 mb-2 text-sm">Tips:</h4>
                    <ul className="space-y-1">
                      {item.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-coffee-800">
                          <span className="text-coffee-400 mt-1 flex-shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-coffee-900 mb-4">
              Equipment Care & Maintenance
            </h2>
            <p className="text-lg text-coffee-700">
              Keep your equipment in perfect condition for consistently great coffee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream-50 p-6 rounded-xl">
              <h3 className="font-semibold text-coffee-900 mb-4">Daily Care</h3>
              <ul className="space-y-2 text-sm text-coffee-800">
                <li>• Rinse V60 and server with hot water after use</li>
                <li>• Empty and rinse kettle</li>
                <li>• Wipe down scale and grinder exterior</li>
                <li>• Store filters in dry place</li>
              </ul>
            </div>

            <div className="bg-cream-50 p-6 rounded-xl">
              <h3 className="font-semibold text-coffee-900 mb-4">Weekly Maintenance</h3>
              <ul className="space-y-2 text-sm text-coffee-800">
                <li>• Deep clean all equipment with mild soap</li>
                <li>• Clean grinder burrs and chamber</li>
                <li>• Descale kettle if needed</li>
                <li>• Check scale calibration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-coffee-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Brewing?
          </h3>
          <p className="text-coffee-100 mb-8">
            Now that you know what equipment you need, check out our brewing guides
            to learn the techniques that will make your coffee shine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides">
              <button className="bg-coffee-600 hover:bg-coffee-700 px-8 py-4 rounded-lg font-medium transition-colors">
                View Brewing Guides
              </button>
            </Link>
            <Link href="/recipes">
              <button className="bg-transparent border-2 border-coffee-600 hover:bg-coffee-600 px-8 py-4 rounded-lg font-medium transition-colors">
                Try Our Recipes
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}