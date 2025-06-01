import Link from 'next/link';
import { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
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
    <div className="recipe-card group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display font-semibold text-xl text-coffee-900 mb-1">
            {recipe.name}
          </h3>
          <p className="text-coffee-600 text-sm">by {recipe.author}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
          {recipe.difficulty}
        </span>
      </div>

      <p className="text-coffee-700 text-sm mb-4 line-clamp-2">
        {recipe.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <span className="text-coffee-500 font-medium">Ratio:</span>
          <span className="text-coffee-800 ml-1">{recipe.ratio}</span>
        </div>
        <div>
          <span className="text-coffee-500 font-medium">Time:</span>
          <span className="text-coffee-800 ml-1">{recipe.brewTime}</span>
        </div>
        <div>
          <span className="text-coffee-500 font-medium">Coffee:</span>
          <span className="text-coffee-800 ml-1">{recipe.coffeeAmount}</span>
        </div>
        <div>
          <span className="text-coffee-500 font-medium">Water:</span>
          <span className="text-coffee-800 ml-1">{recipe.waterAmount}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {recipe.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-cream-100 text-coffee-700 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/recipes/${recipe.id}`} className="block">
        <button className="w-full btn-primary group-hover:bg-coffee-700 transition-colors">
          View Recipe
        </button>
      </Link>
    </div>
  );
}