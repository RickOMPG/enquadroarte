import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import img1 from '../img/ZkaKWyQ.jpeg'
import img2 from '../img/pLbJV2P.jpeg'
import img3 from '../img/OOnL6T0.png'
import img4 from '../img/ryTALh4.png'
import img5 from '../img/GBRFNVN.png'
import img6 from '../img/ObbegtS.jpeg'

const images = [
  { src: img1, alt: 'Sala de estar com quadro abstrato' },
  { src: img2, alt: 'Moldura clássica dourada' },
  { src: img3, alt: 'Galeria moderna com obras' },
  { src: img4, alt: 'Arte contemporânea' },
  { src: img5, alt: 'Composição de paredes com quadros' },
  { src: img6, alt: 'Ambiente com moldura elegante' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function Gallery() {
  return (
    <section className="bg-brand-50 px-6 py-24 sm:px-8 lg:px-16" id="galeria">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl lg:text-5xl">
            Inspirações
          </h2>
          <p className="mt-4 text-base text-brand-500 sm:text-lg">
            Navegue por estilos que transformam ambientes
          </p>
        </motion.div>

        <motion.div
          className="columns-2 gap-4 md:columns-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {images.map((image) => (
            <motion.div
              key={image.src}
              variants={itemVariants}
              className="group relative mb-4 overflow-hidden break-inside-avoid lg:mb-6"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <motion.div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
                <motion.a
                  href="#contato"
                  className="flex items-center gap-2 border border-white px-8 py-3 text-sm tracking-widest text-white opacity-0 uppercase backdrop-blur-sm transition-all group-hover:opacity-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quero este estilo
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
