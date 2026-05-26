import { motion } from 'framer-motion'
import logo from '../img/white-label.png'

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.img
          src={logo}
          alt="Enquadro Arte"
          className="mb-8 h-16 w-auto sm:h-20 md:h-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.h1
          className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          A moldura perfeita
          <br />
          <span className="italic">para a sua história.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Curadoria de arte e emolduramento artesanal, pensado exclusivamente
          para o seu espaço.
        </motion.p>

        <motion.a
          href="#contato"
          className="mt-10 inline-block border border-white bg-white/10 px-10 py-4 text-sm font-medium tracking-widest text-white uppercase backdrop-blur-sm transition-all hover:bg-white hover:text-brand-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Solicitar Orçamento
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
