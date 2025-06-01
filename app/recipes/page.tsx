'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import { recipes, featuredRecipes } from '../../data/recipes';
import { Recipe } from '../../data/recipes';

type FilterType = 'all' | 'beginner' | 'intermediate' | 'advanced' | 'featured';

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const getFilteredRecipes = (): Recipe[] => {
    switch (activeFilter) {
      case 'beginner':
        return recipes.filter(recipe => recipe.difficulty === 'Beginner');
      case 'intermediate':
        return recipes.filter(recipe => recipe.difficulty === 'Intermediate');
      case 'advanced':
        return recipes.filter(recipe => recipe.difficulty === 'Advanced');
      case 'featured':
        return featuredRecipes;
      default:
        return recipes;
    }
  };

  const filteredRecipes = getFilteredRecipes();

  const getFilterButtonClass = (filter: FilterType) => {
    return activeFilter === filter
      ? 'px-4 py-2 bg-coffee-600 text-white rounded-lg font-medium transform scale-105 shadow-md'
      : 'px-4 py-2 bg-white text-coffee-700 rounded-lg font-medium hover:bg-cream-200 hover:scale-105 transition-all duration-200';
  };

  const getFilterLabel = (filter: FilterType): string => {
    switch (filter) {
      case 'all':
        return 'All Recipes';
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      case 'featured':
        return 'Featured';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            All V60 Recipes
          </h1>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Explore our complete collection of V60 pour over recipes, from beginner-friendly
            methods to advanced techniques used by world champions.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={getFilterButtonClass('all')}
            >
              All Recipes ({recipes.length})
            </button>
            <button
              onClick={() => setActiveFilter('beginner')}
              className={getFilterButtonClass('beginner')}
            >
              Beginner ({recipes.filter(r => r.difficulty === 'Beginner').length})
            </button>
            <button
              onClick={() => setActiveFilter('intermediate')}
              className={getFilterButtonClass('intermediate')}
            >
              Intermediate ({recipes.filter(r => r.difficulty === 'Intermediate').length})
            </button>
            <button
              onClick={() => setActiveFilter('advanced')}
              className={getFilterButtonClass('advanced')}
            >
              Advanced ({recipes.filter(r => r.difficulty === 'Advanced').length})
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={getFilterButtonClass('featured')}
            >
              Featured ({featuredRecipes.length})
            </button>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8 text-center">
            <p className="text-coffee-600">
              Showing <span className="font-semibold text-coffee-800">{filteredRecipes.length}</span> recipe{filteredRecipes.length !== 1 ? 's' : ''}
              {activeFilter !== 'all' && (
                <span className="ml-1">
                  for <span className="font-medium capitalize text-coffee-800">{getFilterLabel(activeFilter)}</span>
                </span>
              )}
            </p>
          </div>

          {/* Recipes Grid */}
          <div key={activeFilter} className="recipes-grid">
            {filteredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-coffee-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-coffee-700 mb-2">No recipes found</h3>
              <p className="text-coffee-600 mb-4">Try selecting a different filter to see more recipes.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="btn-secondary"
              >
                Show All Recipes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-coffee-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-coffee-100 mb-8">
            Have a favorite V60 recipe you'd like to share? We'd love to feature it in our collection.
          </p>
          <button className="bg-coffee-600 hover:bg-coffee-700 px-8 py-4 rounded-lg font-medium transition-colors">
            Submit Your Recipe
          </button>
        </div>
      </section>
    </div>
  );
}