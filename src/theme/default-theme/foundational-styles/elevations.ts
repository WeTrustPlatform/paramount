const borderShadowColor = 'rgba(67, 90, 111, 0.3)'; // Used to be colors.neutral['80A'] in v3 and down.
const blurryShadowColor = 'rgba(67, 90, 111, 0.47)'; // Used to be colors.neutral['50A'] in v3 and down.

/**
 * Elevation styles are applied as box shadows.
 * Available levels: 0, 1, 2, 3, 4.
 */
export default [
  `0 0 1px ${borderShadowColor}`,
  `0 -1px 0 rgba(245,245,245,0.5), 0 8px 20px rgba(33,33,33,0.15)`,
  `0 0 1px ${borderShadowColor}, 0 5px 8px -4px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 8px 10px -4px ${blurryShadowColor}`,
  `0 0 1px ${borderShadowColor}, 0 16px 24px -8px ${blurryShadowColor}`,
];
