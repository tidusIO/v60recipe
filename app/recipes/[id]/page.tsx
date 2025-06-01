import Link from 'next/link';
import Header from '../../../components/Header';
import { recipes } from '../../../data/recipes';
import { notFound } from 'next/navigation';

interface RecipeDetailPageProps {
  params: {
    id: string;
  };
}

export default function RecipeDetailPage({ params }: RecipeDetailPageProps) {
  const recipe = recipes.find(r => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Recipe Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-2">
                {recipe.name}
              </h1>
              <p className="text-xl text-coffee-600">by {recipe.author}</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)} mt-4 md:mt-0 self-start`}>
              {recipe.difficulty}
            </span>
          </div>

          <p className="text-lg text-coffee-700 mb-8">
            {recipe.description}
          </p>

          {/* Recipe Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-cream-50 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-coffee-600 mb-1">{recipe.ratio}</div>
              <div className="text-sm text-coffee-500">Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-coffee-600 mb-1">{recipe.brewTime}</div>
              <div className="text-sm text-coffee-500">Brew Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-coffee-600 mb-1">{recipe.coffeeAmount}</div>
              <div className="text-sm text-coffee-500">Coffee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-coffee-600 mb-1">{recipe.waterAmount}</div>
              <div className="text-sm text-coffee-500">Water</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Instructions */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-coffee-900 mb-6">
                Brewing Instructions
              </h2>

              <div className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-cream-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-coffee-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-coffee-800 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Tips Section */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-bold text-coffee-900 mb-4">
                  Pro Tips
                </h3>
                <div className="bg-coffee-50 p-6 rounded-xl">
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-coffee-800">
                        <span className="text-coffee-600 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Recipe Details */}
              <div className="bg-white p-6 rounded-xl border border-cream-200">
                <h3 className="font-display text-lg font-bold text-coffee-900 mb-4">
                  Recipe Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-coffee-500">Grind Size:</span>
                    <span className="text-coffee-800 font-medium">{recipe.grindSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-500">Water Temp:</span>
                    <span className="text-coffee-800 font-medium">{recipe.waterTemp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-500">Difficulty:</span>
                    <span className="text-coffee-800 font-medium">{recipe.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Equipment */}
              <div className="bg-white p-6 rounded-xl border border-cream-200">
                <h3 className="font-display text-lg font-bold text-coffee-900 mb-4">
                  Equipment Needed
                </h3>
                <ul className="space-y-2">
                  {recipe.equipment.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-coffee-800">
                      <span className="w-2 h-2 bg-coffee-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-xl border border-cream-200">
                <h3 className="font-display text-lg font-bold text-coffee-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cream-100 text-coffee-700 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Recipes */}
      <section className="py-8 px-4 bg-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/recipes">
            <button className="btn-secondary">
              ← Back to All Recipes
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}