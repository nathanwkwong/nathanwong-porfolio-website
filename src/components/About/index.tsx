import { Title } from '../Title';
import css from './styles.module.scss';

export const About = () => {
    return (
        <div className={css.container}>
            <Title title="About" size="sm" />
            <p>
                Four years of front-end focused professional experience in
                software development. Passionate, active in learning, and
                embracing teamwork, with strong analytical and critical thinking
                skills continuously developed from my Physics education
                background and IT working experiences.
            </p>
        </div>
    );
};
