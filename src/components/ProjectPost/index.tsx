import { OuterLink } from '../Link';
import { ListTechnology } from '../ListTechnology';
import css from './styles.module.scss';

interface ProjectPostProps {
    title: string;
    description: string;
    url: string;
    technologies: string[];
    isOnGoing?: boolean;
}

export const ProjectPost = ({
    title,
    description,
    url,
    technologies,
    isOnGoing
}: ProjectPostProps) => {
    return (
        <div className={css.container}>
            <div className={css.title}>
                ．
                <OuterLink href={url} target="_blank">
                    {isOnGoing && (
                        <span className={css.onGoing}>{`(Developing) `}</span>
                    )}
                    {title}
                </OuterLink>
            </div>
            <p className={css.description}>{description}</p>
            <ListTechnology technologies={technologies} />
        </div>
    );
};
