'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Main from "@/components/Main";
import ScrollIndicator from '@/components/ScrollIndicator';
import { ThemeContext } from '@/contexts/themeContext';
import { useContext } from 'react';


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
