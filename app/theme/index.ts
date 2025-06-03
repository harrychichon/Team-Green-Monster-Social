import { COLORS } from './colors';
import { OPACITY } from './opacity';
import { RADIUS } from './radius';
import { SHADOW } from './shadows';
import { SIZES } from './sizes';
import { SPACING } from './spacing';
import { FONT_SIZE } from './typography';

export * from './colors';
export * from './opacity';
export * from './radius';
export * from './shadows';
export * from './sizes';
export * from './spacing';
export * from './typography';

export const theme = {
	color: COLORS,
	space: SPACING,
	font: FONT_SIZE,
	radius: RADIUS,
	shadow: SHADOW,
	size: SIZES,
	opacity: OPACITY,
};
