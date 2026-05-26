import { motion } from 'framer-motion'
import { Search, Palette, Truck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Inspire-se',
    description:
      'Navegue por nossa curadoria e descubra estilos que combinam com você.',
  },
  {
    icon: Palette,
    title: 'Personalize',
    description:
      'Converse com nossos especialistas para definir medidas, molduras e acabamentos.',
  },
  {
    icon: Truck,
    title: 'Receba em Casa',
    description:
      'Sua arte pronta, montada com excelência e pronta para transformar seu ambiente.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-16" id="como-funciona">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl lg:text-5xl">
            Como funciona
          </h2>
          <p className="mt-4 text-base text-brand-500 sm:text-lg">
            Três passos simples para transformar seu espaço
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 transition-colors duration-300 group-hover:bg-brand-100">
                <step.icon className="h-7 w-7 text-brand-600" />
              </div>
              <h3 className="font-serif text-xl text-brand-800 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-brand-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
