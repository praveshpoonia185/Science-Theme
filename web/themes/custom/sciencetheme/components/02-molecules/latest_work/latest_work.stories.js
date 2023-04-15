import latestWork from './latest_work.twig';
import latestWorkData from './latest_work.yml';
import './_latest_work.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Latest Work' };
export const LatestWork = () => latestWork(latestWorkData);
