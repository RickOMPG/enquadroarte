import { motion } from 'framer-motion'
import { Frame, Sparkles, Heart } from 'lucide-react'
import aboutImg from '../img/OOnL6T0.png'

const values = [
  {
    icon: Frame,
    title: 'Artesanato de Excelência',
    description:
      'Cada moldura é feita sob medida, com materiais selecionados e acabamento impecável.',
  },
  {
    icon: Sparkles,
    title: 'Curadoria Exclusiva',
    description:
      'Selecionamos obras e estilos que dialogam com a sua personalidade e o seu espaço.',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description:
      'Do primeiro contato à entrega, você é acompanhado por nossos especialistas.',
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

function About() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-16" id="sobre">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium tracking-[0.2em] text-brand-400 uppercase">
              Nossa História
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
              Enquadro Arte
            </h2>
            <p className="mt-6 leading-relaxed text-brand-500">
              A <strong className="text-brand-700">Enquadro Arte</strong> nasceu
              da paixão por transformar espaços através da arte e do
              emolduramento artesanal. Acreditamos que cada obra merece uma
              moldura que conte a sua própria história — feita sob medida, com
              materiais nobres e o cuidado de quem entende que os detalhes fazem
              toda a diferença.
            </p>
            <p className="mt-4 leading-relaxed text-brand-500">
              Mais do que uma galeria, somos um estúdio de curadoria e
              personalização. Trabalhamos lado a lado com arquitetos, designers
              de interiores e colecionadores para criar composições únicas que
              elevam a atmosfera de qualquer ambiente.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImg}
              alt="Enquadro Arte - Estúdio de emolduramento"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="border-t border-brand-200 pt-6 text-center md:text-left"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
                <value.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="font-serif text-xl text-brand-800">
                {value.title}
              </h3>
              <p className="mt-2 leading-relaxed text-brand-500">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
