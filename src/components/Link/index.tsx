import React, { useContext } from 'react';

import ImgLink from '../../assets/images/create-link.svg?react';
import css from './styles.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import clsx from 'clsx';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = (linkProps: LinkProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={css.container}>
            <a {...linkProps} />
            <ImgLink
                className={clsx([
                    css.imgLink,
                    theme === 'theme-dark' ? css.dark : css.light
                ])}
            />
        </div>
    );
};
