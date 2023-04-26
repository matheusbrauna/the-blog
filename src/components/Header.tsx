import Link from 'next/link'
import { SunIcon } from './ThemeSwitcher/SunIcon'

export function Header() {
  return (
    <header className="shadow-xl">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center h-16 gap-8">
          <Link href="/" className="text-2xl font-bold">
            The <span className="text-rose-500">Blog.</span>
          </Link>
          <Link href="/tag/back-end" className="text-lg text-gray-200">
            Back-End
          </Link>
          <Link href="/tag/front-end" className="text-lg text-gray-200">
            Front-End
          </Link>
          <Link href="/tag/mobile" className="text-lg text-gray-200">
            Mobile
          </Link>
          <Link href="/tag/carreira" className="text-lg text-gray-200">
            Carreira
          </Link>
        </nav>
        <button className="flex items-center justify-center rounded-full bg-gray-950 w-7 h-7">
          <SunIcon weight="fill" height={16} width={16} />
        </button>
      </div>
    </header>
  )
}
