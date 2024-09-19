import { ThemeContext } from '../../context/ThemeContext';
import css from './styles.module.scss';
import { useContext } from 'react';
import DarkModeSvg from '../../assets/images/dark-mode.svg';
import LightModeSvg from '../../assets/images/light-mode.svg';
import clsx from 'clsx';

export const Menu = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <div className={clsx([css.container, css[`container--${theme}`]])}>
            <a href="/">Nathan W.</a>
            <ul className={css.list}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                {/* <li>
                    <a href="/projects">Projects</a>
                </li> */}
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
