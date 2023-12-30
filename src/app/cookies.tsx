import { cookies } from 'next/headers'

export function addCookie(theme: string) {
   const cookie = cookies()
   return cookie.set('theme', theme)
}

export function getCookie() {
   const cookie = cookies()
   return cookie.get('theme')
}