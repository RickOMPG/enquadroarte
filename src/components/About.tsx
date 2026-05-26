import { motion } from 'framer-motion'
import aboutImg from '../img/OOnL6T0.png'

function About() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-16" id="sobre">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            className="overflow-hidden rounded-sm lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -30 }}
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium tracking-[0.2em] text-brand-400 uppercase">
              Sobre Nós
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-brand-900 sm:text-4xl lg:text-5xl">
              Nossa História
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-brand-600">
              <p>
                A <strong className="text-brand-800">Enquadro Arte</strong> é
                muito mais do que uma marca ou uma empresa; ela é a
                materialização de um sonho e o reflexo vivo dos valores da nossa
                família. Acreditamos que, por trás de toda obra, existe uma
                história, e a nossa começa com as mãos que nos ensinaram o
                verdadeiro significado de dedicação.
              </p>

              <p>
                Nossa essência foi inteiramente forjada no trabalho incansável,
                na união e na resiliência. Tudo o que somos e a qualidade que
                entregamos hoje são profundamente inspirados no exemplo de
                força, no suor e na perseverança dos meus pais. Foram eles que,
                dedicando horas a fio e superando inúmeros desafios, nos
                mostraram na prática que o amor e a vontade de servir são
                capazes de realizar o que muitas vezes parecia impossível. O
                sacrifício e o caráter deles são o verdadeiro alicerce sobre o
                qual o nosso trabalho se sustenta.
              </p>

              <p>
                É esse legado familiar de esforço e carinho que transborda em
                cada detalhe do nosso dia a dia. Quando você escolhe a Enquadro
                Arte, você está sendo recebido por essa mesma dedicação. Hoje,
                nossa maior alegria é traduzir toda essa bagagem em forma de
                excelência no atendimento. Estamos aqui de braços abertos para
                atender você, ouvir suas necessidades com atenção e proporcionar
                a melhor e mais acolhedora experiência do nosso ramo.
              </p>

              <p>
                Para nós, cada cliente passa a fazer parte dessa grande jornada.
                Afinal, mais do que entregar arte ou fazer molduras, nosso
                propósito é abraçar e honrar histórias — e temos um orgulho
                imenso de compartilhar a nossa com você.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
