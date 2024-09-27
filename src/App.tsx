import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageHome } from './pages/Home';
import { Menu } from './components/Menu';
import { PageBlog } from './pages/PageBlog';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import css from './styles.module.scss';
import { Footer } from './components/Footer';
import { PageProject } from './pages/PageProject';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageHome />
    },
    {
        path: '/blog',
        element: <PageBlog />
    },
    {
        path: '/projects',
        element: <PageProject />
    },
    {
        path: '*',
        element: <div>404</div>
    }
]);

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={css.container} id={theme}>
            <Menu />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
