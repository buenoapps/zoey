import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimalCard } from '@/components/animal-card';
import { CategoryCard } from '@/components/category-card';
import { ThemedText } from '@/components/themed-text';
import { ZoeyMascot } from '@/components/zoey-mascot';
import {
  Categories,
  getAnimalsByCategory,
  getCategory,
  type CategoryId,
} from '@/data/animals';
import { BottomTabInset, Brand, Fonts, MaxContentWidth, Spacing } from '@/constants/theme';

/** Split a list into rows of two for an even 2-column grid. */
function toRows<T>(items: T[]): [T, T?][] {
  const rows: [T, T?][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([items[i], items[i + 1]]);
  }
  return rows;
}

export default function HomeScreen() {
  const [selected, setSelected] = useState<CategoryId>(Categories[0].id);
  const category = getCategory(selected);
  const rows = toRows(getAnimalsByCategory(selected));

  return (
    <View style={styles.background}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <ZoeyMascot />

          <ThemedText style={styles.prompt}>Pick a group!</ThemedText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}>
            {Categories.map((item) => (
              <CategoryCard
                key={item.id}
                category={item}
                selected={item.id === selected}
                onPress={() => setSelected(item.id)}
              />
            ))}
          </ScrollView>

          <ThemedText style={styles.sectionTitle}>
            {category.emoji} {category.name}
          </ThemedText>

          <View style={styles.grid}>
            {rows.map((row, index) => (
              <View key={index} style={styles.gridRow}>
                <AnimalCard animal={row[0]} color={category.color} />
                {row[1] ? (
                  <AnimalCard animal={row[1]} color={category.color} />
                ) : (
                  <View style={styles.gridSpacer} />
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Brand.sky,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.three,
  },
  prompt: {
    fontFamily: Fonts.rounded,
    fontSize: 18,
    fontWeight: '800',
    color: '#3A3A4A',
    textAlign: 'center',
  },
  categoryRow: {
    gap: Spacing.two,
    paddingHorizontal: Spacing.one,
    paddingVertical: Spacing.one,
  },
  sectionTitle: {
    fontFamily: Fonts.rounded,
    fontSize: 26,
    fontWeight: '800',
    color: '#3A3A4A',
  },
  grid: {
    gap: Spacing.two,
  },
  gridRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  gridSpacer: {
    flex: 1,
  },
});
