import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { useI18n } from '@/context/language-provider';
import { Brand, Fonts, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ZoeyMascotProps = {
  /** What Zoey says in her speech bubble. Defaults to the localized greeting. */
  message?: string;
};

/**
 * Zoey — a friendly dog with big floppy ears (she hears really well!).
 * The face is an emoji; the oversized ears are drawn with rounded views and
 * the whole head does a gentle idle wiggle.
 */
export function ZoeyMascot({ message }: ZoeyMascotProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const text = message ?? t('mascotMessage');
  const tilt = useSharedValue(0);

  useEffect(() => {
    tilt.value = withRepeat(
      withSequence(
        withTiming(-4, { duration: 900, easing: Easing.inOut(Easing.ease) }),
        withTiming(4, { duration: 900, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      true,
    );
  }, [tilt]);

  const headStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${tilt.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.head, headStyle]}>
        <View style={[styles.ear, styles.earLeft]} />
        <View style={[styles.ear, styles.earRight]} />
        <ThemedText style={styles.face}>🐶</ThemedText>
      </Animated.View>

      <View style={[styles.bubble, { backgroundColor: theme.bubbleBg }]}>
        <ThemedText style={[styles.bubbleText, { color: theme.bubbleText }]}>{text}</ThemedText>
      </View>
    </View>
  );
}

const EAR_WIDTH = 34;
const EAR_HEIGHT = 86;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  head: {
    width: 150,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  face: {
    fontSize: 96,
    lineHeight: 110,
  },
  ear: {
    position: 'absolute',
    top: 18,
    width: EAR_WIDTH,
    height: EAR_HEIGHT,
    backgroundColor: Brand.fur,
    borderRadius: EAR_WIDTH,
  },
  earLeft: {
    left: 2,
    transform: [{ rotate: '24deg' }],
  },
  earRight: {
    right: 2,
    transform: [{ rotate: '-24deg' }],
  },
  bubble: {
    borderRadius: Radius.large,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  bubbleText: {
    fontFamily: Fonts.rounded,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
