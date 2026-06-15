import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimalCard } from '@/components/animal-card';
import { CategoryCard } from '@/components/category-card';
import { ThemedText } from '@/components/themed-text';
import { ZoeyMascot } from '@/components/zoey-mascot';
import {
  HomeGroups,
  getAnimalColor,
  getAnimalsByGroup,
  getGroup,
  type Animal,
  type CategoryId,
} from '@/data/animals';
import { Fonts, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Split a list into rows of two for an even 2-column grid. */
function toRows(items: Animal[]): [Animal, Animal?][] {
  const rows: [Animal, Animal?][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([items[i], items[i + 1]]);
  }
  return rows;
}

export default function HomeScreen() {
  const [selected, setSelected] = useState<CategoryId | 'all'>('all');
  const theme = useTheme();
  const group = getGroup(selected);
  const rows = toRows(getAnimalsByGroup(selected));

  return (
    <View style={[styles.background, { backgroundColor: theme.screenBg }]}>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <ZoeyMascot />

          <ThemedText style={[styles.prompt, { color: theme.heading }]}>Pick a group!</ThemedText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryRow}>
            {HomeGroups.map((item) => (
              <CategoryCard
                key={item.id}
                category={item}
                selected={item.id === selected}
                onPress={() => setSelected(item.id)}
              />
            ))}
          </ScrollView>

          <ThemedText style={[styles.sectionTitle, { color: theme.heading }]}>
            {group.emoji} {group.name}
          </ThemedText>

          <View style={styles.grid}>
            {rows.map((row, index) => (
              <View key={index} style={styles.gridRow}>
                <AnimalCard
                  animal={row[0]}
                  color={selected === 'all' ? getAnimalColor(row[0]) : group.color}
                />
                {row[1] ? (
                  <AnimalCard
                    animal={row[1]}
                    color={selected === 'all' ? getAnimalColor(row[1]) : group.color}
                  />
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
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    // Center the content column on wide screens without letting the
    // horizontal chip row stretch the page (which caused a horizontal scrollbar).
    marginHorizontal: 'auto',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.five,
    gap: Spacing.three,
  },
  prompt: {
    fontFamily: Fonts.rounded,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  categoryScroll: {
    width: '100%',
    flexGrow: 0,
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
