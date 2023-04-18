import Link from 'next/link'
import { SunIcon } from '../client/ThemeSwitcher/SunIcon'

export function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between">
        <nav className="flex items-center h-16 gap-8">
          <Link href="/" className="text-2xl font-bold">
            The <span className="text-rose-500">Blog.</span>
          </Link>
          <Link href="/" className="text-lg text-gray-200">
            Home
          </Link>
          <Link href="/" className="text-lg text-gray-200">
            Home
          </Link>
          <Link href="/" className="text-lg text-gray-200">
            Home
          </Link>
        </nav>
        <button className="flex items-center justify-center rounded-full bg-gray-950 w-7 h-7">
          <SunIcon weight="fill" height={16} width={16} />
        </button>
      </div>
    </header>
  )
}
