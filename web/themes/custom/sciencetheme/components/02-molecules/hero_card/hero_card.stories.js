import heroCard from './hero_card.twig';
import heroCardData from './hero_card.yml';
import './_hero_card.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero Card' };
export const HeroCard = () => heroCard(heroCardData);
