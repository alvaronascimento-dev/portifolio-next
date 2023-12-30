"use client"

import { setCookie, getCookie, hasCookie, CookieValueTypes } from 'cookies-next';
import React, { useState, createContext, useEffect } from "react";
// import { addCookie, getCookie } from '@/app/cookies';

export type ThemeProps = {
   theme: CookieValueTypes;
   toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [theme, setTheme] = useState(() => hasCookie('theme') ? getCookie('theme') : "Claro");

   useEffect(() => {
      return setTheme(hasCookie('theme') ? getCookie('theme') : "Claro")
   }, [])

   const toggleTheme = () => {
      if (theme === "Claro") {
         setTheme('Escuro')
         setCookie('theme', 'Escuro')
      }

      if (theme === "Escuro") {
         setTheme("Claro")
         setCookie('theme', 'Claro')
      }

   }

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeContextProvider;