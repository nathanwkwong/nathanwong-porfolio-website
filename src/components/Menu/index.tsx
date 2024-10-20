import { ThemeContext } from '../../context/ThemeContext';
import css from './styles.module.scss';
import { useContext } from 'react';
import DarkModeSvg from '../../assets/images/dark-mode.svg';
import LightModeSvg from '../../assets/images/light-mode.svg';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const Menu = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <div className={clsx([css.container, css[`container--${theme}`]])}>
            <Link to="/">Nathan W.</Link>
            <ul className={css.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <img
                    src={theme === 'theme-dark' ? LightModeSvg : DarkModeSvg}
                    className={clsx([css.imgDarkMode, theme])}
                    onClick={() =>
                        switchTheme(
                            theme === 'theme-dark'
                                ? 'theme-light'
                                : 'theme-dark'
                        )
                    }
                />
            </ul>
        </div>
    );
};
