'use client'

import { Features3Props } from '@/components/sections/Features/Features.types'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MdVerifiedUser } from 'react-icons/md'

function Features3({ cards }: Features3Props) {
    return (
        <section id="features" className="container py-24">
            <Carousel
                opts={{
                    align: 'start',
                    loop: false,
                    containScroll: 'trimSnaps',
                }}
                className="w-full">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
                    {/* Lado esquerdo */}
                    <div className="flex w-1/4 shrink-0 flex-col gap-8">
                        <h2 className="text-5xl font-bold text-black">Serviços Especializados</h2>
                        <div className="mt-8 flex gap-3">
                            <CarouselPrevious className="static size-10 translate-x-0 translate-y-0" />
                            <CarouselNext className="static size-10 translate-x-0 translate-y-0" />
                        </div>
                        <div>
                            <Button variant="herobuttonsecondary" className="p-6" asChild>
                                <Link href="https://wa.me/5531996398460">Conheça</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Lado direito - Carrossel */}
                    <div className="min-w-0 flex-1 overflow-visible lg:mr-[calc((100vw-100%)/-2)]">
                        <CarouselContent className="-ml-4">
                            {cards?.map((card, index) => (
                                <CarouselItem key={index} className="basis-[390px] pl-4">
                                    {/* Card com perspectiva 3D */}
                                    <div className="group h-[280px] w-full [perspective:1000px]">
                                        <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                            {/* Frente */}
                                            <div className="absolute inset-0 flex flex-col justify-center gap-4 rounded-2xl bg-color-cardWarm p-8 [backface-visibility:hidden]">
                                                <MdVerifiedUser size={32} color="black" />

                                                <h3 className="text-xl font-bold text-black">{card.title}</h3>

                                                <p className="text-sm text-color-purble">Saiba mais</p>
                                            </div>

                                            {/* Verso */}
                                            <div className="absolute inset-0 flex flex-col justify-center rounded-2xl bg-color-purble p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                                <h3 className="mb-4 text-xl font-bold text-white">{card.title}</h3>

                                                <p className="text-sm leading-relaxed text-white">{card.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Botões de navegação */}
                    </div>
                </div>
            </Carousel>
        </section>
    )
}

export default Features3
