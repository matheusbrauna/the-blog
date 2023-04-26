import Link from 'next/link'
import { NavMobile } from './NavMobile'

export function Header() {
  return (
    <header className="shadow-xl">
      <div className="container flex items-center justify-between">
        <nav className="items-center hidden h-16 gap-8 lg:flex">
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
        <div className="w-full lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}
