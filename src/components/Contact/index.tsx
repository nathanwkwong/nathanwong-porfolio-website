import { Link } from '../Link/Link';
import { Title } from '../Title';
import css from './styles.module.scss';

const links = [
    {
        type: 'GitHub',
        name: '@nathanwkwong',
        url: 'https://github.com/nathanwkwong'
    },
    {
        type: 'LinkedIn',
        name: '@nathanwkwong',
        url: 'https://www.linkedin.com/in/nathanwkwong/'
    },
    {
        type: 'Email',
        name: 'wkwong.nathan@gmail.com',
        url: 'wkwong.nathan@gmail.com'
    }
];

export const Contact = () => {
    return (
        <div>
            <Title title="Links" />
            {links.map(({ type, name, url }) => {
                return (
                    <div className={css.container}>
                        <div className={css.type}>
                            <p>{type}</p>
                        </div>
                        <Link href={url}>{name}</Link>
                    </div>
                );
            })}
        </div>
    );
};
