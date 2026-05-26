import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

function Contact() {
  return (
    <section className="bg-brand-900 px-6 py-24 sm:px-8 lg:px-16" id="contato">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Cada projeto é único,
          <br />
          <span className="italic">e o seu orçamento também.</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-brand-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Vamos conversar sobre o seu espaço?
        </motion.p>

        <motion.a
          href="https://wa.me/554891857023?text=Olá! Gostaria de solicitar um orçamento personalizado."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 border border-white bg-white px-10 py-4 text-sm font-medium tracking-widest text-brand-900 uppercase transition-all hover:bg-brand-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="h-5 w-5" />
          Fale com um Especialista
        </motion.a>
      </div>
    </section>
  )
}

export default Contact
