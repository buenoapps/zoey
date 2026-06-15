/**
 * Animal + category data for Zoey.
 *
 * Every animal here makes a sound. Each `id` maps to a bundled audio file in
 * `src/data/sounds.ts` (and `assets/sounds/<id>.wav`). An animal can belong to
 * more than one category (e.g. a cat lives on the farm *and* is a pet). To add
 * a new animal, add an entry here, a matching `require` in `sounds.ts`, and a
 * sound file (run `npm run generate-sounds` to create a placeholder tone).
 */

export type CategoryId = 'pets' | 'farm' | 'wild' | 'birds' | 'bugs' | 'ocean' | 'reptiles';

export type Category = {
  id: CategoryId;
  /** English fallback name; localized names live in `src/i18n/translations.ts`. */
  name: string;
  emoji: string;
  /** Bright background color for this category's cards. */
  color: string;
};

export type Animal = {
  id: string;
  name: string;
  emoji: string;
  /** Every category this animal belongs to (first one drives its card color). */
  categories: CategoryId[];
  /** Friendly onomatopoeia shown to kids, e.g. "Moo". */
  sound: string;
};

export const Categories: Category[] = [
  { id: 'pets', name: 'Pets', emoji: '🐱', color: '#FB8500' },
  { id: 'farm', name: 'Farm', emoji: '🚜', color: '#FFB703' },
  { id: 'wild', name: 'Wild', emoji: '🦁', color: '#E76F51' },
  { id: 'birds', name: 'Birds', emoji: '🦜', color: '#2A9D8F' },
  { id: 'bugs', name: 'Bugs', emoji: '🐝', color: '#8AB17D' },
  { id: 'ocean', name: 'Ocean', emoji: '🐬', color: '#219EBC' },
  { id: 'reptiles', name: 'Reptiles', emoji: '🐸', color: '#6A994E' },
];

export const Animals: Animal[] = [
  // Pets 🐱
  { id: 'cat', name: 'Cat', emoji: '🐱', categories: ['pets', 'farm'], sound: 'Meow' },
  { id: 'dog', name: 'Dog', emoji: '🐶', categories: ['pets', 'farm'], sound: 'Woof' },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', categories: ['pets'], sound: 'Squeak' },
  { id: 'guineapig', name: 'Guinea Pig', emoji: '🐹', categories: ['pets'], sound: 'Wheek' },
  { id: 'parrot', name: 'Parrot', emoji: '🦜', categories: ['pets', 'birds'], sound: 'Squawk' },
  { id: 'mouse', name: 'Mouse', emoji: '🐭', categories: ['pets'], sound: 'Squeak' },

  // Farm 🚜
  { id: 'cow', name: 'Cow', emoji: '🐄', categories: ['farm'], sound: 'Moo' },
  { id: 'pig', name: 'Pig', emoji: '🐷', categories: ['farm'], sound: 'Oink' },
  { id: 'horse', name: 'Horse', emoji: '🐴', categories: ['farm'], sound: 'Neigh' },
  { id: 'sheep', name: 'Sheep', emoji: '🐑', categories: ['farm'], sound: 'Baa' },
  { id: 'goat', name: 'Goat', emoji: '🐐', categories: ['farm'], sound: 'Maa' },
  { id: 'chicken', name: 'Chicken', emoji: '🐔', categories: ['farm'], sound: 'Cluck' },
  { id: 'rooster', name: 'Rooster', emoji: '🐓', categories: ['farm'], sound: 'Cock-a-doodle-doo' },
  { id: 'duck', name: 'Duck', emoji: '🦆', categories: ['farm'], sound: 'Quack' },
  { id: 'turkey', name: 'Turkey', emoji: '🦃', categories: ['farm'], sound: 'Gobble' },
  { id: 'donkey', name: 'Donkey', emoji: '🫏', categories: ['farm'], sound: 'Hee-haw' },

  // Wild 🦁
  { id: 'lion', name: 'Lion', emoji: '🦁', categories: ['wild'], sound: 'Roar' },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', categories: ['wild'], sound: 'Growl' },
  { id: 'elephant', name: 'Elephant', emoji: '🐘', categories: ['wild'], sound: 'Trumpet' },
  { id: 'monkey', name: 'Monkey', emoji: '🐵', categories: ['wild'], sound: 'Ooh-ooh' },
  { id: 'bear', name: 'Bear', emoji: '🐻', categories: ['wild'], sound: 'Growl' },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', categories: ['wild'], sound: 'Howl' },
  { id: 'fox', name: 'Fox', emoji: '🦊', categories: ['wild'], sound: 'Yip' },

  // Birds 🦜
  { id: 'owl', name: 'Owl', emoji: '🦉', categories: ['birds'], sound: 'Hoot' },
  { id: 'crow', name: 'Crow', emoji: '🐦‍⬛', categories: ['birds'], sound: 'Caw' },
  { id: 'eagle', name: 'Eagle', emoji: '🦅', categories: ['birds'], sound: 'Screech' },
  { id: 'penguin', name: 'Penguin', emoji: '🐧', categories: ['birds'], sound: 'Squawk' },
  { id: 'chick', name: 'Chick', emoji: '🐤', categories: ['birds'], sound: 'Cheep' },
  { id: 'dove', name: 'Dove', emoji: '🕊️', categories: ['birds'], sound: 'Coo' },

  // Bugs 🐝
  { id: 'bee', name: 'Bee', emoji: '🐝', categories: ['bugs'], sound: 'Buzz' },
  { id: 'cricket', name: 'Cricket', emoji: '🦗', categories: ['bugs'], sound: 'Chirp' },
  { id: 'mosquito', name: 'Mosquito', emoji: '🦟', categories: ['bugs'], sound: 'Bzzz' },
  { id: 'fly', name: 'Fly', emoji: '🪰', categories: ['bugs'], sound: 'Buzz' },

  // Ocean 🐬
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', categories: ['ocean'], sound: 'Click' },
  { id: 'whale', name: 'Whale', emoji: '🐳', categories: ['ocean'], sound: 'Song' },
  { id: 'seal', name: 'Seal', emoji: '🦭', categories: ['ocean'], sound: 'Bark' },

  // Reptiles 🐸
  { id: 'frog', name: 'Frog', emoji: '🐸', categories: ['reptiles'], sound: 'Ribbit' },
  { id: 'snake', name: 'Snake', emoji: '🐍', categories: ['reptiles'], sound: 'Hiss' },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', categories: ['reptiles'], sound: 'Hiss' },
  { id: 'lizard', name: 'Lizard', emoji: '🦎', categories: ['reptiles'], sound: 'Chirp' },
];

/** Animals that belong to a category. */
export function getAnimalsByCategory(id: CategoryId): Animal[] {
  return Animals.filter((animal) => animal.categories.includes(id));
}

export function getCategory(id: CategoryId): Category {
  return Categories.find((category) => category.id === id) ?? Categories[0];
}
