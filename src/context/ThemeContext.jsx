import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const handleToggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, handleToggle }}>
            <div className={`min-h-screen transition-all duration-300 ${theme === "light" ?
                "bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] text-black"
                : "bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)] text-white"
                }`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}