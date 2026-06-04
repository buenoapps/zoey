import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimalCard } from '@/components/animal-card';
import { ThemedText } from '@/components/themed-text';
import { Categories, getAnimalsByCategory, type Animal } from '@/data/animals';
import { BottomTabInset, Brand, Fonts, MaxContentWidth, Spacing } from '@/constants/theme';

/** Split a list into rows of two for an even 2-column grid. */
function toRows(items: Animal[]): [Animal, Animal?][] {
  const rows: [Animal, Animal?][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push([items[i], items[i + 1]]);
  }
  return rows;
}

export default function AnimalsScreen() {
  return (
    <View style={styles.background}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <ThemedText style={styles.title}>All Animals 🐾</ThemedText>

          {Categories.map((category) => (
            <View key={category.id} style={styles.section}>
              <View style={[styles.sectionHeader, { backgroundColor: category.color }]}>
                <ThemedText style={styles.sectionHeaderText}>
                  {category.emoji} {category.name}
                </ThemedText>
              </View>

              <View style={styles.grid}>
                {toRows(getAnimalsByCategory(category.id)).map((row, index) => (
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
            </View>
          ))}
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
    gap: Spacing.four,
  },
  title: {
    fontFamily: Fonts.rounded,
    fontSize: 30,
    fontWeight: '800',
    color: '#3A3A4A',
    textAlign: 'center',
  },
  section: {
    gap: Spacing.two,
  },
  sectionHeader: {
    alignSelf: 'flex-start',
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: 999,
  },
  sectionHeaderText: {
    fontFamily: Fonts.rounded,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
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
