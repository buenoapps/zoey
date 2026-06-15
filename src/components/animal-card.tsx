import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { useI18n } from '@/context/language-provider';
import { useSound } from '@/context/sound-provider';
import { type Animal } from '@/data/animals';
import { Fonts, Radius, Spacing } from '@/constants/theme';

type AnimalCardProps = {
  animal: Animal;
  /** Card background color, usually the animal's category color. */
  color: string;
};

/** A big, tappable tile that plays an animal's sound and bounces. */
export function AnimalCard({ animal, color }: AnimalCardProps) {
  const { playSound } = useSound();
  const { t, tAnimal } = useI18n();
  const name = tAnimal(animal.id);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  const onPress = () => {
    playSound(animal.id);
    // A soft, springy pop that grows then eases back to its original size.
    scale.value = withSequence(
      withTiming(1.12, { duration: 140, easing: Easing.out(Easing.quad) }),
      withTiming(1, { duration: 300, easing: Easing.out(Easing.cubic) }),
    );
    rotate.value = withSequence(
      withTiming(-6, { duration: 90 }),
      withTiming(6, { duration: 140 }),
      withTiming(0, { duration: 110 }),
    );
  };

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${t('says')} ${animal.sound}`}
      style={styles.pressable}>
      <Animated.View style={[styles.card, { backgroundColor: color }, animatedStyle]}>
        <ThemedText style={styles.emoji}>{animal.emoji}</ThemedText>
        <ThemedText style={styles.name}>{name}</ThemedText>
        <ThemedText style={styles.sound}>{animal.sound}</ThemedText>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  card: {
    flex: 1,
    minHeight: 140,
    borderRadius: Radius.large,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
    // Soft drop shadow for a tactile, toy-like feel.
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 56,
    lineHeight: 66,
  },
  name: {
    fontFamily: Fonts.rounded,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  sound: {
    fontFamily: Fonts.rounded,
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.9)',
  },
});
