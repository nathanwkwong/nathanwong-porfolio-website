import { OuterLink } from '../Link';
import { ListTechnology } from '../ListTechnology';
import css from './styles.module.scss';

interface ProjectPostProps {
    title: string;
    description: string;
    url: string;
    technologies: string[];
}

export const ProjectPost = ({
    title,
    description,
    url,
    technologies
}: ProjectPostProps) => {
    return (
        <div className={css.container}>
            <OuterLink href={url} target="_blank">
                {title}
            </OuterLink>
            <p>
                <span>{description}</span>
            </p>
            <ListTechnology technologies={technologies} />
        </div>
    );
};
