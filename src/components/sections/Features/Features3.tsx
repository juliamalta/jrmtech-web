import { Features3Props } from '@/components/sections/Features/Features.types'
import { MdVerifiedUser } from 'react-icons/md'

function Features3({ cards }: Features3Props) {
    return (
        <section id="features" className="container py-24">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center rounded-2xl">
                    <div className="text-2xl text-color-purble">Serviços Especializados JRM TECH</div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {cards?.map((card, index) => (
                        <div key={index} className="group h-[280px] [perspective:1000px]">
                            <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Frente */}
                                <div className="absolute inset-0 flex flex-col justify-center gap-4 rounded-2xl bg-[#300048] p-10 [backface-visibility:hidden]">
                                    <MdVerifiedUser size={32} color="white" />

                                    <h2 className="text-xl font-bold text-white">{card.title}</h2>

                                    <p className="text-sm text-white/80">Saiba mais</p>
                                </div>

                                {/* Verso */}
                                <div className="absolute inset-0 flex flex-col justify-center rounded-2xl bg-[#4b0870] p-10 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <h2 className="mb-4 text-xl font-bold text-white">{card.title}</h2>

                                    <p className="text-sm leading-relaxed text-white">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features3
