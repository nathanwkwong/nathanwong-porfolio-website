import { ProjectPost } from '../../components/ProjectPost';
import { config } from '../../data/config';
import css from './styles.module.scss';

export const PageProject = () => {
    return (
        <div className={css.container}>
            <h1>Side Projects</h1>
            {config.projects.map((project, index) => {
                return <ProjectPost key={index} {...project} />;
            })}
        </div>
    );
};
