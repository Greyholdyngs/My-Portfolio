import { useState } from "react"
import halfMoon from './assets/images/darkmode.png';
import light from './assets/images/lightmode.png'
import Darkburger from "./assets/images/burgerDark.png";
import Lightburger from "./assets/images/burgerLight.png";
import darkClose from "./assets/images/closeDark.png";
import lightClose from "./assets/images/closeLight.png";

const Header = ({darkMode, setDarkMode}) => {
    const [dropdown, setDropdown] = useState(false);

    const handleScreenMode = () => {
        setDarkMode(!darkMode)
    }

    return(
        <div className={`flex justify-between items-center py-5 lg:px-20 md:px-15 px-5 font-semibold
                        shadow-xl sticky top-0 z-50
                        ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
            <nav>
                <h1 className={`font-bold md:text-3xl text-lg ${darkMode ? 'text-blue-300' : 'text-green-700'}`}>Emmanuel Odior</h1>
            </nav>
            <nav className={`laptop view md:flex gap-20 items-center hidden `}>
                <ul  className={`flex gap-7 items-center transform duration-500 hover:text-underline`}>
                    <li className={`cursor-pointer hover:border-b-2 hover:pb-1 ease-in-out duration-500
                                ${darkMode ? "hover:text-blue-300" : "hover:text-green-700"}`}>
                        Home
                    </li>
                    <li className={`cursor-pointer hover:border-b-2 hover:pb-1 ease-in-out duration-500
                                ${darkMode ? "hover:text-blue-300" : "hover:text-green-700"}`}>
                        Projects
                    </li>
                    <li className={`cursor-pointer hover:border-b-2 hover:pb-1 ease-in-out duration-500
                                ${darkMode ? "hover:text-blue-300" : "hover:text-green-700"}`}>
                        About
                    </li>
                </ul>
                <div>
                    <button onClick={handleScreenMode} className={`cursor-pointer rounded-full p-2
                                                                ${darkMode ? "bg-gray-700" : "bg-white "}`}>
                        <img src={darkMode ? light : halfMoon } alt="" className={`w-5`} />
                    </button>
                </div>
            </nav>
            <nav  className={`phone view flex gap-20 items-center md:hidden `}>
                <div>
                    <button onClick={() => setDropdown(!dropdown)} >
                        <img src={darkMode ? Darkburger : Lightburger } alt="" />
                    </button>
                </div>
                <div className="phone drop-down absolute right-0 top-0">
                    {
                    dropdown && (
                        <ul className={`absolute h-half w-70 top-0 right-0 z-50 py-10 px-7
                                        ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
                            <li className={`flex justify-end mb-5`}>
                                <button onClick={() => setDropdown(!dropdown)} >
                                    <img src={darkMode ? lightClose : darkClose } alt="" />
                                </button>
                            </li>
                            <li className={`my-1`}>Home</li>
                            <li className={`my-1`}>Projects</li>
                            <li className={`my-1`}>About</li>
                            <li className={`my-4`}>
                                <button onClick={handleScreenMode} className={`cursor-pointer rounded-full p-2
                                                                ${darkMode ? "bg-gray-700" : "bg-white "}`}>
                                <img src={darkMode ? light : halfMoon } alt="" className={`w-5`} />
                                </button>
                            </li>
                        </ul>
                    )
                }
                </div>
            </nav>
        </div>
    )

}
export default Header