import latestworkGrid from './latestwork_grid.twig';
import latestworkGridData from './latestwork_grid.yml';
import latestWorkData from '../../02-molecules/latest_work/latest_work.yml';
import './_latestwork_grid.scss';
import './latestwork_grid';

import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Latest Work Grid' };
export const LatestWorkGrid = () =>
  latestworkGrid({ ...latestworkGridData, ...latestWorkData });
