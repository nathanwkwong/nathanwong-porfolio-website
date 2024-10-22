import { OuterLink } from '../Link';
import css from './styles.module.scss';

interface BlogPostProps {
    title: string;
    date: string;
    url: string;
    type: string;
    description: string;
}

export const BlogPost = ({
    title,
    date,
    url,
    type,
    description
}: BlogPostProps) => {
    return (
        <div className={css.container}>
            <div className={css.title}>
                ．
                <OuterLink href={url} target="_blank">
                    {title}
                </OuterLink>
            </div>
            <p className={css.description}>{description}</p>
            <p className={css.date}>
                <span>{date}</span> • <span>{type}</span>
            </p>
        </div>
    );
};
