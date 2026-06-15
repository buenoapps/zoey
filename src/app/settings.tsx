import * as Application from 'expo-application';
import Constants from 'expo-constants';
import { useRouter } from 'expo-router';
import * as StoreReview from 'expo-store-review';
import { Linking, Pressable, ScrollView, Share, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { useI18n } from '@/context/language-provider';
import { Languages } from '@/i18n/languages';
import { Fonts, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

// Placeholder links until the app is published to the stores.
const APP_URL = 'https://zoey.buenoapps.com';

function versionLabel(): string {
  const version = Application.nativeApplicationVersion ?? Constants.expoConfig?.version ?? '1.0.0';
  const build = Application.nativeBuildVersion;
  return build ? `${version} (${build})` : version;
}

export default function SettingsScreen() {
  const theme = useTheme();
  const { t, language, setLanguage } = useI18n();
  const router = useRouter();

  const onShare = async () => {
    try {
      await Share.share({ message: `${t('shareMessage')} ${APP_URL}` });
    } catch {
      // The user dismissed the share sheet, or it isn't available.
    }
  };

  const onRate = async () => {
    try {
      if (await StoreReview.isAvailableAsync()) {
        await StoreReview.requestReview();
      } else {
        await Linking.openURL(APP_URL);
      }
    } catch {
      // Ignore — rating is best-effort.
    }
  };

  return (
    <View style={[styles.background, { backgroundColor: theme.screenBg }]}>
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel={t('back')}
            style={[styles.backButton, { backgroundColor: theme.bubbleBg }]}>
            <ThemedText style={[styles.backIcon, { color: theme.heading }]}>‹</ThemedText>
          </Pressable>
          <ThemedText style={[styles.title, { color: theme.heading }]}>{t('settings')}</ThemedText>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          {/* Language */}
          <ThemedText style={[styles.sectionLabel, { color: theme.heading }]}>
            {t('language')}
          </ThemedText>
          <View style={[styles.card, { backgroundColor: theme.bubbleBg }]}>
            {Languages.map((item, index) => {
              const isSelected = item.code === language;
              return (
                <Pressable
                  key={item.code}
                  onPress={() => setLanguage(item.code)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  style={[styles.row, index > 0 && { borderTopColor: theme.screenBg, borderTopWidth: 1 }]}>
                  <ThemedText style={styles.rowIcon}>{item.flag}</ThemedText>
                  <ThemedText style={[styles.rowLabel, { color: theme.heading }]}>{item.label}</ThemedText>
                  {isSelected ? <ThemedText style={styles.check}>✓</ThemedText> : null}
                </Pressable>
              );
            })}
          </View>

          {/* Actions */}
          <View style={[styles.card, { backgroundColor: theme.bubbleBg }]}>
            <Pressable onPress={onShare} accessibilityRole="button" style={styles.row}>
              <ThemedText style={styles.rowIcon}>📤</ThemedText>
              <ThemedText style={[styles.rowLabel, { color: theme.heading }]}>{t('shareApp')}</ThemedText>
              <ThemedText style={[styles.chevron, { color: theme.heading }]}>›</ThemedText>
            </Pressable>
            <Pressable
              onPress={onRate}
              accessibilityRole="button"
              style={[styles.row, { borderTopColor: theme.screenBg, borderTopWidth: 1 }]}>
              <ThemedText style={styles.rowIcon}>⭐</ThemedText>
              <ThemedText style={[styles.rowLabel, { color: theme.heading }]}>{t('rateApp')}</ThemedText>
              <ThemedText style={[styles.chevron, { color: theme.heading }]}>›</ThemedText>
            </Pressable>
          </View>

          <ThemedText style={styles.version}>
            {t('version')} {versionLabel()}
          </ThemedText>
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
  header: {
    width: '100%',
    maxWidth: MaxContentWidth,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    fontSize: 30,
    lineHeight: 34,
    marginTop: -2,
  },
  title: {
    fontFamily: Fonts.rounded,
    fontSize: 28,
    fontWeight: '800',
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    marginHorizontal: 'auto',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.five,
    gap: Spacing.two,
  },
  sectionLabel: {
    fontFamily: Fonts.rounded,
    fontSize: 16,
    fontWeight: '800',
    marginTop: Spacing.two,
    marginLeft: Spacing.one,
  },
  card: {
    borderRadius: Radius.large,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.three,
  },
  rowIcon: {
    fontSize: 24,
    lineHeight: 30,
  },
  rowLabel: {
    flex: 1,
    fontFamily: Fonts.rounded,
    fontSize: 18,
    fontWeight: '700',
  },
  check: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '800',
    color: '#2A9D8F',
  },
  chevron: {
    fontSize: 24,
    lineHeight: 28,
    opacity: 0.5,
  },
  version: {
    textAlign: 'center',
    marginTop: Spacing.four,
    fontFamily: Fonts.rounded,
    fontSize: 14,
    fontWeight: '600',
    color: '#9AA0A6',
  },
});
