import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const lat = -28.2832462
const lng = -49.1589554

function MapSection() {
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02},${lat - 0.02},${lng + 0.02},${lat + 0.02}&layer=mapnik&marker=${lat},${lng}`
  const directionsUrl = `https://www.google.com/maps/dir//${lat},${lng}`

  return (
    <section className="bg-brand-50 px-6 py-24 sm:px-8 lg:px-16" id="como-chegar">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl lg:text-5xl">
            Como Chegar
          </h2>
          <p className="mt-4 text-base text-brand-500 sm:text-lg">
            Estamos prontos para receber você
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <h3 className="font-serif text-xl text-brand-800">
                  Enquadro Arte
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-500">
                  Av. Felipe Schmidt, 3070
                  <br />
                  São Basílio, Braço do Norte - SC
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-brand-900 px-5 py-2 text-xs font-medium tracking-[0.15em] text-brand-900 uppercase transition-colors hover:bg-brand-900 hover:text-white"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-sm border border-brand-200 shadow-sm lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Mapa - Enquadro Arte"
              src={osmUrl}
              width="100%"
              height="320"
              className="block align-middle"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
