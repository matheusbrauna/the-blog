import { useState } from 'react'
import { motion } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import Link from 'next/link'

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'string',
        stiffness: 160,
        damping: 60,
      },
    },
  }

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }

  return (
    <nav className="relative flex items-center justify-between w-full h-16">
      <Link href="/" className="text-2xl font-bold">
        The <span className="text-rose-500">Blog.</span>
      </Link>
      <div
        onClick={() => setIsOpen(true)}
        className="text-white cursor-pointer"
      >
        <List className="w-8 h-8" />
      </div>
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className="fixed top-0 right-0 z-10 w-4 h-4 rounded-full bg-accent"
      ></motion.div>
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 z-20 bottom-0 w-full bg-gray-900 flex flex-col gap-10 justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="container absolute top-0 flex items-center justify-end w-full h-24 cursor-pointer"
        >
          <X className="w-8 h-8" />
        </div>
        <Link
          onClick={() => setIsOpen(false)}
          href="/"
          className="text-2xl font-bold"
        >
          The <span className="text-rose-500">Blog.</span>
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href="/tag/back-end"
          className="text-lg text-gray-200"
        >
          Back-End
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href="/tag/front-end"
          className="text-lg text-gray-200"
        >
          Front-End
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href="/tag/mobile"
          className="text-lg text-gray-200"
        >
          Mobile
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href="/tag/carreira"
          className="text-lg text-gray-200"
        >
          Carreira
        </Link>
      </motion.ul>
    </nav>
  )
}
