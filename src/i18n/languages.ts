/** Supported app languages. */
export type LanguageCode = 'en' | 'de' | 'it' | 'es' | 'hr';

export type Language = {
  code: LanguageCode;
  /** Name of the language in that language (endonym). */
  label: string;
  flag: string;
};

export const Languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export function isLanguageCode(value: string): value is LanguageCode {
  return Languages.some((language) => language.code === value);
}
