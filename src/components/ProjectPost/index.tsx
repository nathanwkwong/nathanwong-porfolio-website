import { Link } from '../Link';
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
            <Link href={url} target="_blank">
                {title}
            </Link>
            <p>
                <span>{description}</span>
            </p>
            <ListTechnology technologies={technologies} />
        </div>
    );
};
