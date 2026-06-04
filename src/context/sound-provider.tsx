import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from 'expo-audio';
import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';

import { SoundFiles } from '@/data/sounds';

type SoundContextValue = {
  /** Play the sound for a given animal id (restarts if already playing). */
  playSound: (animalId: string) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

/**
 * Holds a single shared audio player for the whole app. Tapping any animal
 * swaps the source on this one player and plays it, which is much lighter than
 * creating a player per animal card.
 */
export function SoundProvider({ children }: { children: ReactNode }) {
  const player: AudioPlayer = useMemo(() => createAudioPlayer(), []);

  useEffect(() => {
    // Let short animal sounds play even when the iOS mute switch is on, and
    // mix politely with other audio. Important for a kids app.
    setAudioModeAsync({ playsInSilentMode: true, interruptionMode: 'mixWithOthers' }).catch(() => {
      // Audio mode is best-effort; ignore failures (e.g. on web).
    });
    return () => player.release();
  }, [player]);

  const value = useMemo<SoundContextValue>(
    () => ({
      playSound: (animalId: string) => {
        const source = SoundFiles[animalId];
        if (!source) {
          return;
        }
        try {
          // Replacing the source rewinds to the start, so repeated taps replay.
          player.replace(source);
          player.play();
        } catch {
          // Ignore transient playback errors so a tap never crashes the app.
        }
      },
    }),
    [player],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextValue {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
