// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeChanger() {
   const { theme, setTheme } = useTheme()

   return (
      <div>
         <div>The current theme is: {theme}</div>
         <button onClick={() => setTheme('light')}>Light</button>
         <button style={{ marginLeft: 10 }} onClick={() => setTheme('dark')}>Dark</button>
      </div>
   )
};