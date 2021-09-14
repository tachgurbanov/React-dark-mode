import React, { useState, useEffect, useContext, createContext } from 'react';

const ThemeContext = createContext({
    isDark: false,
    toggleTheme: () => { }
});

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('context must be used inside a functional component');
    }
    return context;
};

const useDarkThemeEffect = () => {
    const [themeState, setThemeState] = useState({
        isDark: false,
        hasThemeLoaded: false
    });

    useEffect(() => {
        const lsDark = localStorage.getItem('isDark') === 'true';
        if (lsDark) {
            document.querySelector('body').classList.add('dark');
        }
        setThemeState({ ...themeState, isDark: lsDark, hasThemeLoaded: true });
    }, []);

    return { themeState, setThemeState };
};

const ThemeProvider = ({ children }) => {
    const { themeState, setThemeState } = useDarkThemeEffect();

    if (!themeState.hasThemeLoaded) return <div />;

    const toggleTheme = () => {
        const isDark = !themeState.isDark;
        localStorage.setItem('isDark', JSON.stringify(isDark));
        const bodyEl = document.querySelector('body');
        if (isDark) {
            bodyEl.classList.add('dark');
        } else {
            bodyEl.classList.remove('dark');
        }
        setThemeState({ ...themeState, isDark });
    };

    return (
        <ThemeContext.Provider
            value={{
                isDark: themeState.isDark,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, useTheme };
