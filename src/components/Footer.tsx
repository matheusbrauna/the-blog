import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="container h-64 py-[4.6875rem] max-w-2xl flex flex-col justify-center items-center gap-5">
        <nav className="flex justify-center gap-4">
          <Link href="/">
            <FacebookLogo weight="fill" className="text-base" />
          </Link>
          <Link href="/">
            <LinkedinLogo weight="fill" className="text-base" />
          </Link>
          <Link href="/">
            <InstagramLogo weight="fill" className="text-base" />
          </Link>
        </nav>
        <p className="text-sm">
          <span>Blog da Rocketseat © 2023</span>
          <span className="px-2">•</span>
          <span>
            Feito por <Link href="/">Matheus Braúna</Link>
          </span>
        </p>
      </div>
    </footer>
  )
}
