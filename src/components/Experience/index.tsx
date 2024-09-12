import { Title } from '../Title';

import { config } from '../../data/config';
import css from './styles.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from '../Link/Link';

interface ExperienceProps {
    title: string;
}

export const Experience = ({ title }: ExperienceProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <Title title={title} />
            {config.workExperience.map(
                ({ date, title, url, descriptions, technologies, company }) => {
                    return (
                        <div key={title} className={css.container}>
                            <div className={css.date}>
                                <p>{date}</p>
                            </div>
                            <div className={css.details}>
                                <Link href={url} className={css.title}>
                                    {title} - {company}
                                </Link>
                                <div className={css.descList}>
                                    {descriptions.map((desc) => {
                                        return <p>{desc}</p>;
                                    })}
                                </div>
                                <p className={css.technologies} id={theme}>
                                    {technologies.map((tech, index) => (
                                        <span>
                                            {tech}
                                            {index !== technologies.length - 1
                                                ? ` •`
                                                : ''}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};
