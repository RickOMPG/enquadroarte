import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
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

function MobileCarousel() {
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const cardWidth = el.querySelector('div')?.clientWidth ?? el.clientWidth
      const idx = Math.round(el.scrollLeft / cardWidth)
      if (idx !== current) setCurrent(idx)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [current])

  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = (el.querySelector('div')?.clientWidth ?? el.clientWidth)
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory -mx-4 gap-3 overflow-x-auto px-4 scrollbar-hide"
      >
        {images.map((image, i) => (
          <div
            key={image.src}
            ref={(el) => { imagesRef.current[i] = el }}
            className="w-[82%] shrink-0 snap-center overflow-hidden rounded-sm first:ml-0 last:mr-0"
          >
            <div className="relative aspect-[4/5]">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex cursor-pointer items-end justify-center bg-gradient-to-t from-black/40 to-transparent p-6 transition-colors hover:bg-black/30">
                <a
                  href="#contato"
                  className="flex items-center gap-2 border border-white px-6 py-2 text-xs tracking-widest text-white uppercase backdrop-blur-sm"
                >
                  Quero este estilo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollTo(current - 1)}
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-brand-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => scrollTo(current + 1)}
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-brand-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        aria-label="Próximo"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? 'w-6 bg-brand-800' : 'w-1.5 bg-brand-300'
            }`}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
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

        <div className="block sm:hidden">
          <MobileCarousel />
        </div>

        <motion.div
          className="hidden sm:block sm:columns-2 md:columns-3 lg:gap-6"
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
