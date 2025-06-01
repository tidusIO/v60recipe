import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            About V60 Recipe
          </h1>
          <p className="text-xl text-coffee-700">
            A personal journey into the world of pour over coffee
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-cream-200 p-8 md:p-12">
            <div className="prose prose-coffee max-w-none">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-coffee-900 mb-2">
                  Hi, I'm Sascha
                </h2>
              </div>

              <div className="space-y-6 text-coffee-800 leading-relaxed">
                <p>
                  Welcome to V60 Recipe! I'm just a guy who loves coffee and enjoys trying out new things
                  to get better at brewing. I'm not an expert by any means, but I thought it would be a
                  great idea to collect all this amazing coffee knowledge in one place.
                </p>

                <p>
                  For the longest time, I was all about barista coffee – you know, flat whites, cappuccinos,
                  the whole espresso scene. There's something magical about watching a skilled barista work
                  their craft, and I loved the rich, creamy textures of milk-based drinks.
                </p>

                <p>
                  But then I lived in Japan for a while, and everything changed. The coffee culture there
                  opened my eyes to a completely different world – the world of pour over brewing. There's
                  something almost meditative about the V60 process: the careful measuring, the precise
                  pouring, the way you can taste the subtle differences in technique.
                </p>

                <p>
                  Now I brew V60 at home every day. It's become part of my morning ritual, and honestly,
                  I'm still learning something new each time. Some days the coffee is perfect, other days
                  it's a bit off, but that's part of the journey, right?
                </p>

                <p>
                  I created this site because I kept finding amazing recipes and techniques scattered
                  across different blogs, YouTube videos, and coffee forums. I thought, "Why not bring
                  all this knowledge together in one beautiful, easy-to-navigate place?"
                </p>

                <p>
                  Whether you're a complete beginner picking up your first V60 or someone who's been
                  brewing for years, I hope you find something useful here. We're all just trying to
                  make better coffee, one cup at a time.
                </p>
              </div>

              <div className="mt-8 p-6 bg-cream-50 rounded-lg">
                <h3 className="font-semibold text-coffee-900 mb-3">What you'll find here:</h3>
                <ul className="space-y-2 text-sm text-coffee-700">
                  <li>• Curated recipes from coffee experts and world champions</li>
                  <li>• Step-by-step brewing guides for all skill levels</li>
                  <li>• Equipment recommendations that won't break the bank</li>
                  <li>• Tips and troubleshooting advice from the community</li>
                  <li>• A growing collection of techniques to try</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Connect Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl font-semibold text-coffee-900 mb-4">
            Let's Connect
          </h3>
          <p className="text-coffee-700 mb-6">
            Have a favorite recipe I should add? Found a mistake? Just want to chat about coffee?
            I'd love to hear from fellow coffee enthusiasts.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-coffee-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl font-semibold mb-4">
            Ready to Start Brewing?
          </h3>
          <p className="text-coffee-100 mb-8">
            Dive into our collection of recipes and guides. Remember, the best cup of coffee
            is the one you enjoy – so don't be afraid to experiment!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/recipes" className="bg-coffee-600 hover:bg-coffee-700 px-8 py-4 rounded-lg font-medium transition-colors">
              Browse Recipes
            </a>
            <a href="/guides" className="bg-transparent border-2 border-coffee-600 hover:bg-coffee-600 px-8 py-4 rounded-lg font-medium transition-colors">
              Read Guides
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}