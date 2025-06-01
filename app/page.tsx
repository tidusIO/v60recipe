import Link from 'next/link';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { featuredRecipes } from '../data/recipes';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-coffee-900 mb-6">
            Your Ultimate Resource
            <br />
            <span className="gradient-text">for V60 Coffee</span>
          </h1>
          <p className="text-xl text-coffee-700 mb-8 max-w-2xl mx-auto">
            V60 Recipe is your one-stop hub for pour over techniques, expert recipes,
            and the community that binds them all. Where coffee enthusiasts come together
            to learn, share, and inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recipes">
              <button className="btn-primary text-lg px-8 py-4">
                Explore Recipes →
              </button>
            </Link>
            <Link href="/guides">
              <button className="btn-secondary text-lg px-8 py-4">
                Learn Basics
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-coffee-900 mb-4">
              Discover our library of V60 recipes
            </h2>
            <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
              Every recipe tells a story. Discover our curated collection of V60 recipes
              with detailed instructions, expert tips, and brewing techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/recipes">
              <button className="btn-primary text-lg px-8 py-4">
                Explore All Recipes →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-coffee-600 mb-2">6+</div>
              <div className="text-coffee-700">Expert Recipes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coffee-600 mb-2">3</div>
              <div className="text-coffee-700">Difficulty Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coffee-600 mb-2">∞</div>
              <div className="text-coffee-700">Perfect Cups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-coffee-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Join our brewing newsletter
          </h3>
          <p className="text-coffee-100 mb-8">
            Get the latest V60 recipes, brewing tips, and coffee insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-500"
            />
            <button className="bg-coffee-600 hover:bg-coffee-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-coffee-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="font-display font-semibold text-xl text-coffee-900">
                  V60 Recipe
                </span>
              </div>
              <p className="text-coffee-600 text-sm">
                Your ultimate resource for V60 pour over coffee recipes and techniques.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-coffee-900 mb-4">Discover</h4>
              <ul className="space-y-2 text-sm text-coffee-600">
                <li><Link href="/recipes" className="hover:text-coffee-800 transition-colors">All Recipes</Link></li>
                <li><Link href="/guides" className="hover:text-coffee-800 transition-colors">Beginner Guides</Link></li>
                <li><Link href="/guides" className="hover:text-coffee-800 transition-colors">Advanced Techniques</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-coffee-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-coffee-600">
                <li><Link href="/calculator" className="hover:text-coffee-800 transition-colors">Brewing Calculator</Link></li>
                <li><Link href="/equipment" className="hover:text-coffee-800 transition-colors">Equipment Guide</Link></li>
                <li><Link href="/glossary" className="hover:text-coffee-800 transition-colors">Coffee Glossary</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-coffee-900 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-coffee-600">
                <li><Link href="/about" className="hover:text-coffee-800 transition-colors">Our Story</Link></li>
                <li><Link href="/privacy" className="hover:text-coffee-800 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/imprint" className="hover:text-coffee-800 transition-colors">Imprint</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream-200 mt-8 pt-8 text-center text-sm text-coffee-600">
            © 2024 V60 Recipe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}