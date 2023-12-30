'use client';

import Image from 'next/image'
import logoUrl from '../assets/icons/logo.svg'

export default function Loading() {

   return (
      <div className='loadingContainer'>
            {/* <Image
            src={logoUrl}
               alt='logoA'
               width={70}
               height={70}
               className='img'
            /> */}
         <logoUrl />
         <div className='loading'></div>
      </div>
   )
}