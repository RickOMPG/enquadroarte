import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/554891857023',
    icon: MessageCircle,
    placeholder: '+55 48 9185-7023',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/enquadroarte.bn',
    icon: InstagramIcon,
    placeholder: '@enquadroarte.bn',
  },
  {
    name: 'E-mail',
    href: 'mailto:enquadroarte@gmail.com',
    icon: Mail,
    placeholder: 'enquadroarte@gmail.com',
  },
]

function Footer() {
  return (
    <footer className="bg-brand-900 px-6 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl text-white">Enquadro Arte</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-400">
              Curadoria de arte e emolduramento artesanal sob medida.
              Transforme seus ambientes com peças exclusivas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-brand-400 uppercase">
              Redes Sociais
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-brand-300 transition-colors hover:text-white"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                    <span className="ml-1 text-[10px] text-brand-500 transition-opacity group-hover:opacity-100">
                      {link.placeholder}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-brand-400 uppercase">
              Endereço
            </h4>
            <a
              href="https://www.google.com/maps/dir//Enquadro+Arte,+Av.+Felipe+Schmidt,+3070+-+São+Basílio,+Braço+do+Norte+-+SC,+88750-000/@-28.4826156,-49.0110314,3825m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x9521105e3630d9f3:0x3cba8ca1658736aa!2m2!1d-49.1589554!2d-28.2832462?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              className="group inline-flex items-start gap-3 text-sm text-brand-300 transition-colors hover:text-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Av. Felipe Schmidt, 3070
                <br />
                <span className="text-[10px] text-brand-500">
                  São Basílio, Braço do Norte - SC
                </span>
              </span>
            </a>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-brand-800 pt-8 text-center">
          <p className="text-xs text-brand-500">
            &copy; {currentYear} Enquadro Arte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
