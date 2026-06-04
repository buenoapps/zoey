/**
 * Static map from animal id -> bundled audio file.
 *
 * Metro requires `require()` calls to be statically analyzable, so every sound
 * is listed explicitly here. Keep one entry per animal in `src/data/animals.ts`.
 * To swap in a real recording, replace `assets/sounds/<id>.wav` (same filename).
 */
export const SoundFiles: Record<string, number> = {
  // Farm
  cow: require('@/assets/sounds/cow.wav'),
  pig: require('@/assets/sounds/pig.wav'),
  horse: require('@/assets/sounds/horse.wav'),
  sheep: require('@/assets/sounds/sheep.wav'),
  goat: require('@/assets/sounds/goat.wav'),
  chicken: require('@/assets/sounds/chicken.wav'),
  rooster: require('@/assets/sounds/rooster.wav'),
  duck: require('@/assets/sounds/duck.wav'),
  turkey: require('@/assets/sounds/turkey.wav'),
  donkey: require('@/assets/sounds/donkey.wav'),

  // Pets
  dog: require('@/assets/sounds/dog.wav'),
  cat: require('@/assets/sounds/cat.wav'),
  rabbit: require('@/assets/sounds/rabbit.wav'),
  parrot: require('@/assets/sounds/parrot.wav'),
  mouse: require('@/assets/sounds/mouse.wav'),

  // Wild
  lion: require('@/assets/sounds/lion.wav'),
  tiger: require('@/assets/sounds/tiger.wav'),
  elephant: require('@/assets/sounds/elephant.wav'),
  monkey: require('@/assets/sounds/monkey.wav'),
  bear: require('@/assets/sounds/bear.wav'),
  wolf: require('@/assets/sounds/wolf.wav'),
  fox: require('@/assets/sounds/fox.wav'),

  // Birds
  owl: require('@/assets/sounds/owl.wav'),
  crow: require('@/assets/sounds/crow.wav'),
  eagle: require('@/assets/sounds/eagle.wav'),
  penguin: require('@/assets/sounds/penguin.wav'),
  chick: require('@/assets/sounds/chick.wav'),
  dove: require('@/assets/sounds/dove.wav'),

  // Bugs
  bee: require('@/assets/sounds/bee.wav'),
  cricket: require('@/assets/sounds/cricket.wav'),
  mosquito: require('@/assets/sounds/mosquito.wav'),
  fly: require('@/assets/sounds/fly.wav'),

  // Ocean
  dolphin: require('@/assets/sounds/dolphin.wav'),
  whale: require('@/assets/sounds/whale.wav'),
  seal: require('@/assets/sounds/seal.wav'),

  // Reptiles
  frog: require('@/assets/sounds/frog.wav'),
  snake: require('@/assets/sounds/snake.wav'),
  crocodile: require('@/assets/sounds/crocodile.wav'),
  lizard: require('@/assets/sounds/lizard.wav'),

  // Dinos
  trex: require('@/assets/sounds/trex.wav'),
  dino: require('@/assets/sounds/dino.wav'),
};
