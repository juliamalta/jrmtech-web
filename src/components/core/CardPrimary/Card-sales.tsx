import { CardSalesProps } from '@/components/core/CardPrimary/Card.types'
import Image from 'next/image'
import { Heart, ShoppingBag, Truck } from 'lucide-react'

function CardSales({ title, img, oldPrice = 'R$211,75', price = 'R$167,65', freeShipping }: CardSalesProps) {
    return (
        <div className="flex h-full min-w-0 flex-col gap-8 rounded-2xl">
            {img && (
                <div className="relative h-96 w-full shrink-0 overflow-hidden">
                    <Image src={img} alt={title} width={508} height={590} className="size-full object-contain" />
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
                            className="flex size-12 items-center justify-center rounded-full bg-gray-400 text-white transition hover:bg-gray-500">
                            <Heart size={27} strokeWidth={1.8} />
                        </button>
                        <button
                            type="button"
                            aria-label="Adicionar ao carrinho"
                            className="flex size-12 items-center justify-center rounded-full bg-gray-400 text-white transition hover:bg-gray-500">
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
        </div>
    )
}

export default CardSales
