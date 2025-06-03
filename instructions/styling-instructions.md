# 🎨 Stylinginstruktioner för React Native + Expo

Detta projekt använder ett centralt `theme`-system för att hålla styling konsekvent och skalbart. Alla designvärden (färger, avstånd, storlekar m.m.) definieras i `/theme/`.

---

## 🗂️ Struktur

theme/
colors.ts // Färgpalett
spacing.ts // Marginaler och padding
typography.ts // Textstorlekar
radius.ts // Hörnavrundningar
shadows.ts // Skuggor
sizes.ts // Ikonstorlekar, höjder, m.m.
opacity.ts // Opacitetsnivåer
index.ts // Barrel-fil som samlar och exporterar allt

---

## 🧱 Exempel: Använda temat i en komponent

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/theme';

export default function Card() {
	return (
		<View style={[styles.card, theme.shadow.medium]}>
			<Text style={styles.text}>Glory, Glory Man United 🔴⚪⚫</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: theme.color.neutralLight,
		padding: theme.space.md,
		borderRadius: theme.radius.md,
	},
	text: {
		fontSize: theme.font.md,
		color: theme.color.text,
	},
});
```

## 🧭 Översikt över tillgängliga tokens

### 🎨 Färger (theme.color)

    primary: Limegrön (#05FF32)

    secondary: Neon gul (#D2FF05)

    text, textSecondary, background

    success, danger, neutralLight, neutralDark

### 📏 Spacing (theme.space)

    xs, sm, md, lg, xl, xxl (t.ex. theme.space.md = 16)

### 📝 Textstorlekar (theme.font)

    xs → 12

    sm → 14

    md → 16

    lg → 20

    xl → 24

    xxl → 32

### 🟦 Hörnavrundning (theme.radius)

    sm → 4

    md → 8

    lg → 16

    full → 9999 (t.ex. för cirklar)

### 🌫️ Skuggor (theme.shadow)

    light, medium, heavy – färdiga skuggobjekt

### 🔘 Ikoner och storlekar (theme.size)

    iconSm, iconMd, iconLg, buttonHeight, borderWidth

### 💧 Opacitet (theme.opacity)

    disabled, active
