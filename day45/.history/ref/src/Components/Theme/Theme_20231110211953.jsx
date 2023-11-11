import { useState } from 'react'
import { CiLight, MdDarkMode } from "react-icons/ai";
export default function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleTheme = () => {
          if (theme === "dark") {
               setTheme("light")
          }
     }
     return (
          <button
               className='theme'
               onClick={handleTheme}
          >
               {
                    theme === "dark" ? <MdDarkMode /> : <CiLight />
               }

          </button>
     )
}
