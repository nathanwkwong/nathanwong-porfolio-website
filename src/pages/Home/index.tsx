import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { Hero } from '../../components/Hero';
import { Contact } from '../../components/Contact';
import { Experience } from '../../components/Experience';
import { About } from '../../components/About';
import css from './styles.module.scss';

export const PageHome = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={css.container} id={theme}>
            <Hero />
            <About />
            <Experience title="Work Experience" />
            <Contact />
        </div>
    );
};
