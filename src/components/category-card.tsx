import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useI18n } from '@/context/language-provider';
import { type Category } from '@/data/animals';
import { Fonts, Radius, Spacing } from '@/constants/theme';

type CategoryCardProps = {
  category: Category;
  selected: boolean;
  onPress: () => void;
};

/** A rounded, colorful chip used to pick a category on the Home screen. */
export function CategoryCard({ category, selected, onPress }: CategoryCardProps) {
  const { tCategory } = useI18n();
  const label = tCategory(category.id);
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
      <View
        style={[
          styles.chip,
          { backgroundColor: category.color },
          selected && styles.chipSelected,
        ]}>
        <ThemedText style={styles.emoji}>{category.emoji}</ThemedText>
        <ThemedText style={styles.label}>{label}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: Radius.pill,
  },
  pressed: {
    opacity: 0.8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.pill,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  chipSelected: {
    borderColor: '#FFFFFF',
    // Lift the selected chip with a stronger shadow.
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  emoji: {
    fontSize: 22,
    lineHeight: 28,
  },
  label: {
    fontFamily: Fonts.rounded,
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
