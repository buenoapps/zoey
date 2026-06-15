/**
 * App translations: UI strings plus category and animal names.
 *
 * The little sound words (Woof, Moo, …) intentionally stay in English and live
 * on each animal in `src/data/animals.ts`. English is the fallback language.
 */
import { type CategoryId } from '@/data/animals';
import { type LanguageCode } from '@/i18n/languages';

export type UiKey =
  | 'pickGroup'
  | 'mascotMessage'
  | 'says'
  | 'settings'
  | 'language'
  | 'shareApp'
  | 'rateApp'
  | 'version'
  | 'build'
  | 'shareMessage'
  | 'openSettings'
  | 'back';

export type LanguageStrings = {
  ui: Record<UiKey, string>;
  categories: Record<CategoryId, string>;
  animals: Record<string, string>;
};

export const translations: Record<LanguageCode, LanguageStrings> = {
  en: {
    ui: {
      pickGroup: 'Pick a group!',
      mascotMessage: "Hi, I'm Zoey! Tap an animal to hear it! 🐾",
      says: 'says',
      settings: 'Settings',
      language: 'Language',
      shareApp: 'Share this app',
      rateApp: 'Rate this app',
      version: 'Version',
      build: 'Build',
      shareMessage: 'Check out Zoey — a fun app for kids to learn animals and their sounds! 🐶',
      openSettings: 'Open settings',
      back: 'Back',
    },
    categories: {
      pets: 'Pets',
      farm: 'Farm',
      wild: 'Wild',
      birds: 'Birds',
      bugs: 'Bugs',
      ocean: 'Ocean',
      reptiles: 'Reptiles',
    },
    animals: {
      cat: 'Cat', dog: 'Dog', rabbit: 'Rabbit', guineapig: 'Guinea Pig', parrot: 'Parrot', mouse: 'Mouse',
      cow: 'Cow', pig: 'Pig', horse: 'Horse', sheep: 'Sheep', goat: 'Goat', chicken: 'Chicken',
      rooster: 'Rooster', duck: 'Duck', turkey: 'Turkey', donkey: 'Donkey',
      lion: 'Lion', tiger: 'Tiger', elephant: 'Elephant', monkey: 'Monkey', bear: 'Bear', wolf: 'Wolf', fox: 'Fox',
      owl: 'Owl', crow: 'Crow', eagle: 'Eagle', penguin: 'Penguin', chick: 'Chick', dove: 'Dove',
      bee: 'Bee', cricket: 'Cricket', mosquito: 'Mosquito', fly: 'Fly',
      dolphin: 'Dolphin', whale: 'Whale', seal: 'Seal',
      frog: 'Frog', snake: 'Snake', crocodile: 'Crocodile', lizard: 'Lizard',
    },
  },
  de: {
    ui: {
      pickGroup: 'Wähle eine Gruppe!',
      mascotMessage: 'Hallo, ich bin Zoey! Tippe ein Tier an, um es zu hören! 🐾',
      says: 'sagt',
      settings: 'Einstellungen',
      language: 'Sprache',
      shareApp: 'Diese App teilen',
      rateApp: 'Diese App bewerten',
      version: 'Version',
      build: 'Build',
      shareMessage: 'Schau dir Zoey an – eine lustige App für Kinder, um Tiere und ihre Geräusche zu lernen! 🐶',
      openSettings: 'Einstellungen öffnen',
      back: 'Zurück',
    },
    categories: {
      pets: 'Haustiere',
      farm: 'Bauernhof',
      wild: 'Wildtiere',
      birds: 'Vögel',
      bugs: 'Insekten',
      ocean: 'Meer',
      reptiles: 'Reptilien',
    },
    animals: {
      cat: 'Katze', dog: 'Hund', rabbit: 'Hase', guineapig: 'Meerschweinchen', parrot: 'Papagei', mouse: 'Maus',
      cow: 'Kuh', pig: 'Schwein', horse: 'Pferd', sheep: 'Schaf', goat: 'Ziege', chicken: 'Huhn',
      rooster: 'Hahn', duck: 'Ente', turkey: 'Truthahn', donkey: 'Esel',
      lion: 'Löwe', tiger: 'Tiger', elephant: 'Elefant', monkey: 'Affe', bear: 'Bär', wolf: 'Wolf', fox: 'Fuchs',
      owl: 'Eule', crow: 'Krähe', eagle: 'Adler', penguin: 'Pinguin', chick: 'Küken', dove: 'Taube',
      bee: 'Biene', cricket: 'Grille', mosquito: 'Mücke', fly: 'Fliege',
      dolphin: 'Delfin', whale: 'Wal', seal: 'Robbe',
      frog: 'Frosch', snake: 'Schlange', crocodile: 'Krokodil', lizard: 'Eidechse',
    },
  },
  it: {
    ui: {
      pickGroup: 'Scegli un gruppo!',
      mascotMessage: 'Ciao, sono Zoey! Tocca un animale per sentirlo! 🐾',
      says: 'dice',
      settings: 'Impostazioni',
      language: 'Lingua',
      shareApp: 'Condividi questa app',
      rateApp: 'Valuta questa app',
      version: 'Versione',
      build: 'Build',
      shareMessage: "Scopri Zoey, un'app divertente per bambini per imparare gli animali e i loro versi! 🐶",
      openSettings: 'Apri impostazioni',
      back: 'Indietro',
    },
    categories: {
      pets: 'Animali domestici',
      farm: 'Fattoria',
      wild: 'Selvatici',
      birds: 'Uccelli',
      bugs: 'Insetti',
      ocean: 'Oceano',
      reptiles: 'Rettili',
    },
    animals: {
      cat: 'Gatto', dog: 'Cane', rabbit: 'Coniglio', guineapig: "Porcellino d'India", parrot: 'Pappagallo', mouse: 'Topo',
      cow: 'Mucca', pig: 'Maiale', horse: 'Cavallo', sheep: 'Pecora', goat: 'Capra', chicken: 'Gallina',
      rooster: 'Gallo', duck: 'Anatra', turkey: 'Tacchino', donkey: 'Asino',
      lion: 'Leone', tiger: 'Tigre', elephant: 'Elefante', monkey: 'Scimmia', bear: 'Orso', wolf: 'Lupo', fox: 'Volpe',
      owl: 'Gufo', crow: 'Corvo', eagle: 'Aquila', penguin: 'Pinguino', chick: 'Pulcino', dove: 'Colomba',
      bee: 'Ape', cricket: 'Grillo', mosquito: 'Zanzara', fly: 'Mosca',
      dolphin: 'Delfino', whale: 'Balena', seal: 'Foca',
      frog: 'Rana', snake: 'Serpente', crocodile: 'Coccodrillo', lizard: 'Lucertola',
    },
  },
  es: {
    ui: {
      pickGroup: '¡Elige un grupo!',
      mascotMessage: '¡Hola, soy Zoey! ¡Toca un animal para oírlo! 🐾',
      says: 'dice',
      settings: 'Ajustes',
      language: 'Idioma',
      shareApp: 'Compartir esta app',
      rateApp: 'Valorar esta app',
      version: 'Versión',
      build: 'Compilación',
      shareMessage: '¡Descubre Zoey, una app divertida para que los niños aprendan los animales y sus sonidos! 🐶',
      openSettings: 'Abrir ajustes',
      back: 'Atrás',
    },
    categories: {
      pets: 'Mascotas',
      farm: 'Granja',
      wild: 'Salvajes',
      birds: 'Aves',
      bugs: 'Insectos',
      ocean: 'Océano',
      reptiles: 'Reptiles',
    },
    animals: {
      cat: 'Gato', dog: 'Perro', rabbit: 'Conejo', guineapig: 'Cobaya', parrot: 'Loro', mouse: 'Ratón',
      cow: 'Vaca', pig: 'Cerdo', horse: 'Caballo', sheep: 'Oveja', goat: 'Cabra', chicken: 'Gallina',
      rooster: 'Gallo', duck: 'Pato', turkey: 'Pavo', donkey: 'Burro',
      lion: 'León', tiger: 'Tigre', elephant: 'Elefante', monkey: 'Mono', bear: 'Oso', wolf: 'Lobo', fox: 'Zorro',
      owl: 'Búho', crow: 'Cuervo', eagle: 'Águila', penguin: 'Pingüino', chick: 'Pollito', dove: 'Paloma',
      bee: 'Abeja', cricket: 'Grillo', mosquito: 'Mosquito', fly: 'Mosca',
      dolphin: 'Delfín', whale: 'Ballena', seal: 'Foca',
      frog: 'Rana', snake: 'Serpiente', crocodile: 'Cocodrilo', lizard: 'Lagarto',
    },
  },
  hr: {
    ui: {
      pickGroup: 'Odaberi grupu!',
      mascotMessage: 'Bok, ja sam Zoey! Dodirni životinju da je čuješ! 🐾',
      says: 'kaže',
      settings: 'Postavke',
      language: 'Jezik',
      shareApp: 'Podijeli ovu aplikaciju',
      rateApp: 'Ocijeni ovu aplikaciju',
      version: 'Verzija',
      build: 'Build',
      shareMessage: 'Otkrij Zoey – zabavnu aplikaciju za djecu za učenje životinja i njihovih zvukova! 🐶',
      openSettings: 'Otvori postavke',
      back: 'Natrag',
    },
    categories: {
      pets: 'Ljubimci',
      farm: 'Farma',
      wild: 'Divlje',
      birds: 'Ptice',
      bugs: 'Kukci',
      ocean: 'Ocean',
      reptiles: 'Gmazovi',
    },
    animals: {
      cat: 'Mačka', dog: 'Pas', rabbit: 'Zec', guineapig: 'Zamorac', parrot: 'Papiga', mouse: 'Miš',
      cow: 'Krava', pig: 'Svinja', horse: 'Konj', sheep: 'Ovca', goat: 'Koza', chicken: 'Kokoš',
      rooster: 'Pijetao', duck: 'Patka', turkey: 'Puran', donkey: 'Magarac',
      lion: 'Lav', tiger: 'Tigar', elephant: 'Slon', monkey: 'Majmun', bear: 'Medvjed', wolf: 'Vuk', fox: 'Lisica',
      owl: 'Sova', crow: 'Vrana', eagle: 'Orao', penguin: 'Pingvin', chick: 'Pile', dove: 'Golub',
      bee: 'Pčela', cricket: 'Cvrčak', mosquito: 'Komarac', fly: 'Muha',
      dolphin: 'Dupin', whale: 'Kit', seal: 'Tuljan',
      frog: 'Žaba', snake: 'Zmija', crocodile: 'Krokodil', lizard: 'Gušter',
    },
  },
};
