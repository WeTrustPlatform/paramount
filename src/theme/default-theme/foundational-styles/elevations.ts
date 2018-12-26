import { Elevations } from '../../ThemeInterface';
import palette from './palette';

const elevations: Elevations = [
  {
    elevation: 0,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  {
    elevation: 1,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  {
    elevation: 2,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  {
    elevation: 3,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  {
    elevation: 4,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  {
    elevation: 5,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
];

export default elevations;
