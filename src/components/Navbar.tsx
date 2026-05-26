import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../img/black-label.png'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Como Chegar', href: '#como-chegar' },
  { label: 'Contato', href: '#contato' },
]

function Navbar() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed inset-x-0 top-0 z-50 border-b border-brand-200/80 bg-white/90 backdrop-blur-md"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-16">
            <a href="#" onClick={handleClick}>
              <img src={logo} alt="Enquadro Arte" className="h-8 w-auto" />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium tracking-[0.15em] text-brand-600 uppercase transition-colors hover:text-brand-900"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="rounded-sm border border-brand-900 px-5 py-2 text-xs font-medium tracking-[0.15em] text-brand-900 uppercase transition-colors hover:bg-brand-900 hover:text-white"
              >
                Orçamento
              </a>
            </div>

            <button
              className="flex md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5 text-brand-800" /> : <Menu className="h-5 w-5 text-brand-800" />}
            </button>
          </div>

          {open && (
            <motion.div
              className="border-t border-brand-200 bg-white md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleClick}
                    className="text-sm font-medium tracking-[0.15em] text-brand-600 uppercase transition-colors hover:text-brand-900"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={handleClick}
                  className="mt-2 inline-block border border-brand-900 px-5 py-2 text-center text-sm font-medium tracking-[0.15em] text-brand-900 uppercase"
                >
                  Orçamento
                </a>
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navbar
