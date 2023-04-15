import heroColumn from './hero_column.twig';
import heroColumnData from './hero_column.yml';
import heroCardData from '../../02-molecules/hero_card/hero_card.yml';
import './_hero_column.scss';
import './hero_column';

import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Hero Card' };
export const HeroCard = () =>
  heroColumn({ ...heroColumnData, ...heroCardData });
