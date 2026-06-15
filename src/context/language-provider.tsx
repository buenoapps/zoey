import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { type CategoryId } from '@/data/animals';
import { DEFAULT_LANGUAGE, isLanguageCode, type LanguageCode } from '@/i18n/languages';
import { translations, type UiKey } from '@/i18n/translations';

const STORAGE_KEY = 'zoey.language';

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  /** Translate a UI string. */
  t: (key: UiKey) => string;
  /** Translated display name for a category. */
  tCategory: (id: CategoryId) => string;
  /** Translated display name for an animal. */
  tAnimal: (id: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** The device's preferred language if we support it, otherwise English. */
function deviceLanguage(): LanguageCode {
  const code = getLocales()[0]?.languageCode ?? '';
  return isLanguageCode(code) ? code : DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(deviceLanguage);

  // Load a previously saved choice (overrides the device default).
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((saved) => {
        if (saved && isLanguageCode(saved)) {
          setLanguageState(saved);
        }
      })
      .catch(() => {
        // Ignore storage errors — we just keep the device default.
      });
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const strings = translations[language];
    const fallback = translations[DEFAULT_LANGUAGE];
    return {
      language,
      setLanguage: (code: LanguageCode) => {
        setLanguageState(code);
        AsyncStorage.setItem(STORAGE_KEY, code).catch(() => {
          // Best-effort persistence.
        });
      },
      t: (key: UiKey) => strings.ui[key] ?? fallback.ui[key],
      tCategory: (id: CategoryId) => strings.categories[id] ?? fallback.categories[id],
      tAnimal: (id: string) => strings.animals[id] ?? fallback.animals[id] ?? id,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }
  return context;
}
