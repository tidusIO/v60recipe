export interface Recipe {
  id: string;
  name: string;
  author: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  brewTime: string;
  coffeeAmount: string;
  waterAmount: string;
  grindSize: string;
  waterTemp: string;
  ratio: string;
  description: string;
  steps: string[];
  tips: string[];
  equipment: string[];
  tags: string[];
  featured?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: 'james-hoffmann-ultimate',
    name: 'James Hoffmann Ultimate V60',
    author: 'James Hoffmann',
    difficulty: 'Intermediate',
    brewTime: '3-4 minutes',
    coffeeAmount: '30g',
    waterAmount: '500ml',
    grindSize: 'Medium-fine',
    waterTemp: '96°C',
    ratio: '1:16.7',
    description: 'The ultimate V60 technique by James Hoffmann, focusing on even extraction and clarity.',
    steps: [
      'Rinse filter with hot water and preheat V60',
      'Add 30g of medium-fine ground coffee',
      'Start timer and pour 60ml water for bloom (2x coffee weight)',
      'Wait 45 seconds for bloom',
      'Pour water in stages: 60% by 1:15, 100% by 1:45',
      'Aim for total brew time of 3:30-4:00',
      'Give the V60 a gentle swirl at the end'
    ],
    tips: [
      'Use filtered water for best results',
      'Pour in slow, controlled circles',
      'Keep water level consistent',
      'Adjust grind size if brew time is off'
    ],
    equipment: ['Hario V60', 'V60 filters', 'Gooseneck kettle', 'Scale', 'Timer'],
    tags: ['clarity', 'balanced', 'expert-approved'],
    featured: true
  },
  {
    id: 'tetsu-kasuya-4-6',
    name: '4:6 Method by Tetsu Kasuya',
    author: 'Tetsu Kasuya',
    difficulty: 'Advanced',
    brewTime: '3:30 minutes',
    coffeeAmount: '20g',
    waterAmount: '300ml',
    grindSize: 'Medium-coarse',
    waterTemp: '92°C',
    ratio: '1:15',
    description: 'World Brewers Cup winning method that allows you to control sweetness and strength separately.',
    steps: [
      'Rinse filter and add 20g coarsely ground coffee',
      'First pour: 50ml water, wait 45 seconds',
      'Second pour: 70ml water (total 120ml - 40% of total)',
      'Third pour: 60ml water (total 180ml)',
      'Fourth pour: 60ml water (total 240ml)',
      'Fifth pour: 60ml water (total 300ml)',
      'Each pour after bloom should be 45 seconds apart'
    ],
    tips: [
      'First 40% controls sweetness/acidity balance',
      'Remaining 60% controls strength',
      'Use coarser grind than typical V60',
      'Pour slowly and evenly'
    ],
    equipment: ['Hario V60', 'V60 filters', 'Gooseneck kettle', 'Scale', 'Timer'],
    tags: ['world-champion', 'customizable', 'sweet'],
    featured: true
  },
  {
    id: 'scott-rao-method',
    name: 'Scott Rao V60 Method',
    author: 'Scott Rao',
    difficulty: 'Advanced',
    brewTime: '4-5 minutes',
    coffeeAmount: '22g',
    waterAmount: '360ml',
    grindSize: 'Medium-fine',
    waterTemp: '96°C',
    ratio: '1:16.4',
    description: 'A precise method focusing on even saturation and optimal extraction.',
    steps: [
      'Rinse filter and add coffee, create small well in center',
      'Pour 44ml for bloom (2x coffee weight)',
      'Stir bloom with spoon to ensure even saturation',
      'Wait 30 seconds',
      'Pour remaining water in one continuous pour',
      'Finish pouring by 1:30',
      'Stir once clockwise, once counter-clockwise',
      'Let drain completely'
    ],
    tips: [
      'Focus on even saturation during bloom',
      'Single continuous pour after bloom',
      'Stirring helps even extraction',
      'Plastic V60 retains heat better'
    ],
    equipment: ['Hario V60 (plastic preferred)', 'V60 filters', 'Gooseneck kettle', 'Scale', 'Spoon'],
    tags: ['precision', 'even-extraction', 'expert'],
    featured: true
  },
  {
    id: 'beginner-friendly',
    name: 'Beginner-Friendly V60',
    author: 'V60 Recipes',
    difficulty: 'Beginner',
    brewTime: '3 minutes',
    coffeeAmount: '15g',
    waterAmount: '250ml',
    grindSize: 'Medium',
    waterTemp: '94°C',
    ratio: '1:16.7',
    description: 'A simple, forgiving recipe perfect for those new to pour over coffee.',
    steps: [
      'Rinse filter with hot water',
      'Add 15g medium ground coffee',
      'Pour 30ml water for bloom, wait 30 seconds',
      'Pour water in 3 stages: 100ml, 150ml, 250ml',
      'Pour each stage in slow circles',
      'Total brew time should be around 3 minutes'
    ],
    tips: [
      'Don\'t worry about perfect technique',
      'Focus on consistent grind size',
      'Pour slowly and steadily',
      'Taste and adjust grind for next brew'
    ],
    equipment: ['Hario V60', 'V60 filters', 'Kettle', 'Scale'],
    tags: ['beginner', 'forgiving', 'simple']
  },
  {
    id: 'single-pour',
    name: 'Single Pour V60',
    author: 'Coffee with April',
    difficulty: 'Beginner',
    brewTime: '2:30 minutes',
    coffeeAmount: '18g',
    waterAmount: '300ml',
    grindSize: 'Medium-fine',
    waterTemp: '95°C',
    ratio: '1:16.7',
    description: 'Simplified single pour method that\'s hard to mess up and produces consistent results.',
    steps: [
      'Rinse filter and add coffee',
      'Pour 36ml for bloom (2x coffee weight)',
      'Wait 30 seconds',
      'Pour remaining 264ml water in one continuous pour',
      'Pour in slow, steady circles',
      'Finish pouring by 1:30',
      'Let drain completely'
    ],
    tips: [
      'Keep pour rate consistent',
      'Don\'t pour too close to edges',
      'Aim for 2:30 total brew time',
      'Great for busy mornings'
    ],
    equipment: ['Hario V60', 'V60 filters', 'Gooseneck kettle', 'Scale'],
    tags: ['simple', 'consistent', 'quick']
  },
  {
    id: 'iced-v60',
    name: 'Iced V60 Flash Brew',
    author: 'V60 Recipes',
    difficulty: 'Intermediate',
    brewTime: '3 minutes',
    coffeeAmount: '25g',
    waterAmount: '200ml hot + 150ml ice',
    grindSize: 'Medium-fine',
    waterTemp: '96°C',
    ratio: '1:14',
    description: 'Perfect for hot days - brew directly over ice for instant iced coffee with bright flavors.',
    steps: [
      'Place 150ml ice in serving vessel',
      'Set up V60 over ice-filled vessel',
      'Rinse filter and add 25g coffee',
      'Bloom with 50ml water, wait 30 seconds',
      'Pour remaining 150ml water in two stages',
      'Coffee will melt ice and cool instantly',
      'Stir and serve immediately'
    ],
    tips: [
      'Use slightly finer grind for stronger extraction',
      'Account for ice dilution in recipe',
      'Serve immediately for best flavor',
      'Great with fruity, acidic coffees'
    ],
    equipment: ['Hario V60', 'V60 filters', 'Gooseneck kettle', 'Scale', 'Ice'],
    tags: ['iced', 'summer', 'refreshing']
  }
];

export const featuredRecipes = recipes.filter(recipe => recipe.featured);
export const beginnerRecipes = recipes.filter(recipe => recipe.difficulty === 'Beginner');
export const advancedRecipes = recipes.filter(recipe => recipe.difficulty === 'Advanced');