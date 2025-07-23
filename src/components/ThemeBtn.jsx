import { useTheme } from "../context/ThemeContext"
import MoonIcon from "../assets/images/icon-moon.svg"
import SunIcon from "../assets/images/icon-sun.svg";

const ThemeBtn = () => {
    const { handleToggle, theme } = useTheme();
    return (
        <div>
            <button onClick={handleToggle} className={`p-2 rounded-lg ${theme === 'light' ? "bg-[#F8F9FA]" : "bg-gray-600"}`}>
                <img src={theme === "light" ? MoonIcon : SunIcon} alt="theme icon" className="w-full h-6 " />
            </button>
        </div>
    )
}

export default ThemeBtn