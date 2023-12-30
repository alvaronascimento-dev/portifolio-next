'use client';

import Script from 'next/script'
import styles from './ThemeSwitch.module.css'

import moon from '../../assets/icons/moon.svg?url';
import sun from '../../assets/icons/sun.svg?url';
import { useContext } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ThemeContext } from '@/contexts/themeContext';




export default function ThemeSwitch() {

   const { theme, toggleTheme } = useContext(ThemeContext)

   // const [theme, dispatch] = useReducer(changeTheme, {isDark: false})

   // const changeTheme = () => {
   //    document.body.classList.toggle('dark');
   //    if (theme === 'Escuro') {
   //       localStorage.setItem('theme', 'Claro');
   //       document.body.classList.remove('dark');
   //       setLegend('Claro')
   //    } else {
   //       localStorage.setItem('theme', 'Escuro');
   //       document.body.classList.add('dark')
   //       setLegend('Escuro')
   //    }
   // }


   return (
      <fieldset className={styles.themeSwitch}>
         <legend id='themeSwitchLegend' className={styles.legend}>{theme}</legend>
         <div className={`${styles.toggleButton} toggleButton`}>
            <div className={`${styles.slider} slider`} onClick={toggleTheme}></div>
            <div className={styles.icons}>
               <Image
                  src={moon} alt="moon" width={18} height={18}
               />
               <Image
                  src={sun} alt="sun" width={18} height={18}
               />
            </div>
         </div>
      </fieldset>
   )
}