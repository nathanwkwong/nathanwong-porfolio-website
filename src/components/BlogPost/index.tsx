import { OuterLink } from '../Link';
import css from './styles.module.scss';

interface BlogPostProps {
    title: string;
    date: string;
    url: string;
    type: string;
}

export const BlogPost = ({ title, date, url, type }: BlogPostProps) => {
    return (
        <div className={css.container}>
            <OuterLink href={url} target="_blank">
                {title}
            </OuterLink>
            <p>
                <span>{date}</span> • <span>{type}</span>
            </p>
        </div>
    );
};
