import sectionUsers from './section_users.twig';
import sectionUsersData from './section_users.yml';
import './_section_users.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Section Users' };
export const SectionUsers = () => sectionUsers({ ...sectionUsersData });
