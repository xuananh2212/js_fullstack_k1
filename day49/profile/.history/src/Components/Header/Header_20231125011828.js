'use client'
import clsx from "clsx";
import styles from './Header.module.scss';
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imgLogo from '../../../public/assets/imgs/logo.png';
import i18n from "i18next";
import { useTranslation } from 'react-i18next'
import keyWord from '../../../public/assets/keyword/keyword.json'
export default function Header() {
     const { t } = useTranslation();
     return (
          <header className={clsx(styles.header)}>
               <div className="container">
                    <div className={clsx(styles.headerLeft)}>
                         <Link
                              href='/'
                              className={clsx(styles.headerLogo)}
                         >
                              <Image
                                   width={30}
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

                         </li>
                         <li>

                         </li>
                         <li>

                         </li>
                         <li>

                         </li>
                         <li>

                         </li>

                    </ul>


               </div>

          </header>
     )
}
