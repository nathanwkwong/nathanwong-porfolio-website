import { BlogPost } from '../../components/BlogPost';
import { config } from '../../data/config';
import css from './styles.module.scss';

export const PageBlog = () => {
    return (
        <div className={css.container}>
            <h1>Blog</h1>
            {config.blogs.map((blog, index) => {
                return <BlogPost key={index} {...blog} />;
            })}
        </div>
    );
};
