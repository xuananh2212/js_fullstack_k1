import { useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./Theme.scss"
export default function Theme() {
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
     const handleTheme = () => {
          if (theme === 'dark') {
               setTheme('light');
               document.body.style = {
                    backgroundColor: "#fff",
                    color: "black"
               }
          } else {
               setTheme('dark');
               document.body.style = {
                    backgroundColor: "#191d1e",
                    color: "#fff"
               }
          }
     }
     return (
          <button
               className='theme'
               onClick={handleTheme}
          >
               {
                    theme === 'dark' ?
                         <MdDarkMode className='dark' />
                         :
                         <CiLight className='light' />
               }

          </button>
     )
}
