import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import css from './styles.module.scss';

interface ListTechnologyProps {
    technologies: string[];
}

export const ListTechnology = ({ technologies }: ListTechnologyProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <p className={css.technologies} id={theme}>
            {technologies.map((tech, index) => (
                <span>
                    {tech}
                    {index !== technologies.length - 1 ? ` •` : ''}
                </span>
            ))}
        </p>
    );
};
