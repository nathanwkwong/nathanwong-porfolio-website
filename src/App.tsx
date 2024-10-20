import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageHome } from './pages/Home';
import { Menu } from './components/Menu';
import { PageBlog } from './pages/PageBlog';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import css from './styles.module.scss';
import { Footer } from './components/Footer';
import { PageProject } from './pages/PageProject';

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter>
            <div className={css.container} id={theme}>
                <Menu />
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/blog" element={<PageBlog />} />
                    <Route path="/projects" element={<PageProject />} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
