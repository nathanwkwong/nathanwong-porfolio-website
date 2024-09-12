import { createContext, useState } from 'react';

type Theme = 'theme-light' | 'theme-dark';

interface ThemeContextType {
    theme: Theme;
    switchTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'theme-dark',
    switchTheme: () => {}
});

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('theme-dark');

    const switchTheme = (theme: Theme) => {
        document.body.setAttribute('data-theme', theme);

        setTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
