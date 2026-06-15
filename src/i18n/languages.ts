/** Supported app languages — the 24 official languages of the European Union. */
export type LanguageCode =
  | 'en'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'es'
  | 'et'
  | 'fi'
  | 'fr'
  | 'ga'
  | 'hr'
  | 'hu'
  | 'it'
  | 'lt'
  | 'lv'
  | 'mt'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'sk'
  | 'sl'
  | 'sv';

export type Language = {
  code: LanguageCode;
  /** Name of the language in that language (endonym). */
  label: string;
  flag: string;
};

/** Ordered for the picker: English first, then alphabetical by endonym. */
export const Languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' },
  { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
  { code: 'da', label: 'Dansk', flag: '🇩🇰' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'et', label: 'Eesti', flag: '🇪🇪' },
  { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ga', label: 'Gaeilge', flag: '🇮🇪' },
  { code: 'hr', label: 'Hrvatski', flag: '🇭🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'lv', label: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { code: 'hu', label: 'Magyar', flag: '🇭🇺' },
  { code: 'mt', label: 'Malti', flag: '🇲🇹' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'sk', label: 'Slovenčina', flag: '🇸🇰' },
  { code: 'sl', label: 'Slovenščina', flag: '🇸🇮' },
  { code: 'fi', label: 'Suomi', flag: '🇫🇮' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export function isLanguageCode(value: string): value is LanguageCode {
  return Languages.some((language) => language.code === value);
}
