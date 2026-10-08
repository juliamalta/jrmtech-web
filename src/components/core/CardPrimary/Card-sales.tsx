'use client'

import { CardSalesProps } from '@/components/core/CardPrimary/Card.types'
import Image from 'next/image'
import { Heart, ShoppingBag, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

function CardSales({ title, img, oldPrice = 'R$211,75', price = 'R$167,65', freeShipping }: CardSalesProps) {
    return (
        <motion.div
            className="group flex h-full min-w-0 flex-col gap-8 rounded-2xl"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            {img && (
                <div className="relative h-96 w-full shrink-0 overflow-hidden rounded-2xl">
                    <Image
                        src={img}
                        alt={title}
                        width={508}
                        height={590}
                        className="size-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    {freeShipping && (
                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-color-purble px-4 py-2 text-sm font-semibold text-white">
                            <Truck size={18} strokeWidth={2.2} />
                            <span>FRETE GRÁTIS</span>
                        </div>
                    )}
                    <div className="absolute right-4 top-4 flex flex-col gap-3">
                        <button
                            type="button"
                            aria-label="Adicionar aos favoritos"
                            className="flex size-12 items-center justify-center rounded-full bg-gray-400 text-white transition hover:rotate-12 hover:bg-gray-500">
                            <Heart size={27} strokeWidth={1.8} />
                        </button>
                        <button
                            type="button"
                            aria-label="Adicionar ao carrinho"
                            className="flex size-12 items-center justify-center rounded-full bg-gray-400 text-white transition hover:-rotate-12 hover:bg-gray-500">
                            <ShoppingBag size={25} strokeWidth={1.8} />
                        </button>
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-2">
                <div className="min-h-10">
                    <p className="text-color-charcoal">{title}</p>
                </div>
                <p className="text-color-charcoal line-through">De:{oldPrice}</p>
                <p className="text-3xl text-color-purble">{price}&nbsp;</p>
            </div>
        </motion.div>
    )
}

export default CardSales
