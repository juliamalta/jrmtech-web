'use client'
import * as React from 'react'

import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'

import { BlurFade } from '@/components/magicui/blur-fade'
import { CardSectionProps } from '@/components/sections/Cards/Cards.types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaFire } from 'react-icons/fa'
import CardSales from '@/components/core/CardPrimary/Card-sales'

function Cards3({ cards, title, desc, titlePrimary, buttonText, link }: CardSectionProps) {
    return (
        <section id="trabalho" className="py-16 sm:py-24">
            <AnimatedTechBackground />
            <div className="container mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col justify-between gap-2 2xl:flex-row">
                        <div className="flex w-full items-center gap-4">
                            <FaFire color="#B868E1" size={28} />

                            <BlurFade delay={0.15} direction="down" inView>
                                <p className="text-3xl font-semibold">{title}</p>
                            </BlurFade>
                        </div>
                        <div className="2xl:w-2/6 2xl:text-right">
                            <Button variant="herobuttonsecondary" size="service" asChild className="rounded-2xl">
                                <Link href={link!}>{buttonText!}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {cards?.map((card, index) => (
                            <CardSales
                                key={index}
                                title={card.title}
                                img={card.img}
                                oldPrice={card.oldPrice}
                                price={card.price}
                                freeShipping={card.freeShipping}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards3
