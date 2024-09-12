import css from './styles.module.scss';
import clsx from 'clsx';

type Size = 'sm' | 'md' | 'lg';

interface TitleProps {
    title: string;
    size?: Size;
}

export const Title = ({ title, size = 'md' }: TitleProps) => {
    return (
        <div className={clsx([css.container, css[`container--${size}`]])}>
            <h2>{title}</h2>
        </div>
    );
};
