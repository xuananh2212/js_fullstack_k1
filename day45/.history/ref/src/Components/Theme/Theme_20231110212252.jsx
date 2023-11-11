import { useState } from 'react'
import { CiLight, MdDarkMode } from "react-icons/ci";
export default function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleTheme = () => {
          if (theme === 'dark') {
               setTheme('light');
          } else {
               setTheme('dark')
          }
     }
     return (
          <button
               className='theme'
               onClick={handleTheme}
          >
               {
                    theme === 'dark' ? <MdDarkMode /> : <CiLight />
               }

          </button>
     )
}
