import React, { useContext } from 'react';

import ImgLink from '../../assets/images/create-link.svg?react';
import css from './styles.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import clsx from 'clsx';
import { Link as ReactRouterLink } from 'react-router-dom';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const OuterLink = (linkProps: LinkProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={css.container}>
            <ReactRouterLink {...linkProps} to={linkProps.href!} />
            <ImgLink
                className={clsx([
                    css.imgLink,
                    theme === 'theme-dark' ? css.dark : css.light
                ])}
            />
        </div>
    );
};
