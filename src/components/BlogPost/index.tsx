import { Link } from '../Link/Link';
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
            <Link href={url}>{title}</Link>
            <p>
                <span>{date}</span> • <span>{type}</span>
            </p>
        </div>
    );
};
