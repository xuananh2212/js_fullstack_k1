'use client'
import clsx from "clsx";
import styles from './Header.module.scss';
import Link from "next/link";
import React, { useState } from "react";
import Img from "next/image";
import { Image } from "@nextui-org/react";
import imgLogo from '../../../public/assets/imgs/logo.png';
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import keyWord from '../../../public/assets/keyword/keyword.json'
import { GrLanguage } from "react-icons/gr";
import { MdNightlight, MdLightMode } from "react-icons/md";

export default function Header() {
     const [theme, settheme] = useState(localStorage.getItem('theme') || 'light');
     const { t } = useTranslation();
     console.log()
     const handleTranslate = () => {
          if (i18n.language === 'en') {
               i18n.changeLanguage('vi');
               localStorage.setItem('lang', 'vi');
          } else if (i18n.language === 'vi') {
               i18n.changeLanguage('en');
               localStorage.setItem('lang', 'en');
          }

     }
     const handleChangeTheme = () => {
          if (theme === 'light') {
               settheme('dark');
               document.documentElement.styles = {
                    backgroundColor: '#333',
                    color: 'white'
               }
               localStorage.setItem('theme', 'dark');

          } else if (theme === 'dark') {
               settheme('light');
               localStorage.setItem('theme', 'light');
               document.documentElement.styles = {
                    backgroundColor: '#fff',
                    color: 'black'
               }
          }
     }
     return (
          <header className={clsx(styles.header)}>
               <div className="container">
                    <div className={styles.headerWrap}>
                         <div className={clsx(styles.headerLeft)}>
                              <Link
                                   href='/'
                                   className={clsx(styles.headerLogo)}
                              >
                                   <Img
                                        width={50}
                                        src={imgLogo}
                                        alt="logo"
                                   />
                                   <span>
                                        {t(keyWord.fullName)}
                                   </span>

                              </Link>
                         </div>
                         <ul className={clsx(styles.headerRight)}>
                              <li>
                                   <Link
                                        href='https://fullstack.edu.vn/@anh-xuan-2'
                                        target="_blank"
                                   >
                                        <Image
                                             style={{ borderRadius: '50%' }}
                                             width={30}
                                             height={30}
                                             src='https://fullstack-nodejs.fullstack.edu.vn/assets/f8_icon.png'
                                             alt="logo"
                                        />
                                   </Link>
                              </li>

                              <li>
                                   <Link
                                        href='https://www.facebook.com/profile.php?id=100021167121930'
                                        target="_blank"
                                   >
                                        <Image
                                             width={30}
                                             src='https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png'
                                             alt="logo"
                                        />
                                   </Link>

                              </li>

                              <li>
                                   <Link
                                        href='https://github.com/xuananh2212'
                                        target="_blank"
                                   >
                                        <Image
                                             width={30}
                                             src='https://tse3.mm.bing.net/th?id=OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg&pid=Api&P=0&h=220'
                                             alt="logo"
                                        />
                                   </Link>

                              </li>
                              <li>
                                   <button
                                        className={clsx(styles.theme)}
                                        onClick={handleChangeTheme}
                                   >
                                        {
                                             theme === 'light'
                                                  ?
                                                  <MdLightMode className={clsx(styles.icon)} />
                                                  :
                                                  <MdNightlight className={clsx(styles.icon)} />
                                        }
                                   </button>


                              </li>

                              <li>
                                   <button
                                        className={clsx(styles.btnTranslate)}
                                        onClick={handleTranslate}
                                   >
                                        <GrLanguage className={clsx(styles.icon)} />
                                        <span>{i18n.language}</span>
                                   </button>

                              </li>

                         </ul>


                    </div>
               </div>

          </header>
     )
}
