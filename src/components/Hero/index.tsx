import portrait from '../../assets/images/portrait.jpeg';
import { config } from '../../data/config';
import css from './styles.module.scss';

export const Hero = () => {
    return (
        <div className={css.container}>
            <img
                src={portrait}
                alt="Nathan Wong Picture"
                className={css.imgPortrait}
            />
            <div className={css.details}>
                <h1>{config.main.name}</h1>
                <p className={css.role}>{config.main.role}</p>
            </div>
        </div>
    );
};
