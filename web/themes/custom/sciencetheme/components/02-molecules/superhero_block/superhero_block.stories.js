import superheroBlock from './superhero_block.twig';
import superheroBlockData from './superhero_block.yml';
import './_superhero_block.scss';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Superhero Block' };
export const SuperheroBlock = () => superheroBlock(superheroBlockData);
