import { Title } from '../Title';

import { config } from '../../data/config';
import css from './styles.module.scss';
import { OuterLink } from '../Link';
import { ListTechnology } from '../ListTechnology';

interface ExperienceProps {
    title: string;
}

export const Experience = ({ title }: ExperienceProps) => {
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
                                {url ? (
                                    <OuterLink href={url} className={css.title}>
                                        {title} - {company}
                                    </OuterLink>
                                ) : (
                                    <span className={css.title}>
                                        {' '}
                                        {title} - {company}
                                    </span>
                                )}

                                <div className={css.descList}>
                                    {descriptions.map((desc) => {
                                        return <p>{desc}</p>;
                                    })}
                                </div>
                                <ListTechnology technologies={technologies} />
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};
