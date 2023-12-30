"use client"

import { setCookie, getCookie, hasCookie } from 'cookies-next';
import React, { useState, createContext, useEffect } from "react";
// import { addCookie, getCookie } from '@/app/cookies';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [theme, setTheme] = useState("Claro");

   useEffect(() => {
      setTheme(() => hasCookie('theme') ? getCookie('theme') : "Claro")
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