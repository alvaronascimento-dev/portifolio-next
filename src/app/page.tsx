'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Main from "@/components/Main";
import ScrollIndicator from '@/components/ScrollIndicator';
import { ThemeChanger } from '@/components/ThemeChanger';
import { ThemeContext } from '@/contexts/themeContext';
import Script from 'next/script';
import { useState, useEffect, useContext } from 'react';
import { getCookies, setCookie, deleteCookie, getCookie, hasCookie } from 'cookies-next';



export default function Portifolio() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === 'Escuro' ? 'dark' : ''}>
      <ScrollIndicator />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
