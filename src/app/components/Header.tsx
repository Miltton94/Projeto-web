'use client'

import Theme from './Theme'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between">
      <div>
        <Image
          src="/logo-black.svg"
          alt="Logo"
          width={100}
          height={100}
          className="flex object-cover dark:hidden"
        />

        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="hidden object-cover dark:flex"
        />
      </div>

      <Theme />
    </header>
  )
}

export default Header
