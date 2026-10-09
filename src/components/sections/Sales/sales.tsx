'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { CiCreditCard1 } from 'react-icons/ci'
import { CiStar } from 'react-icons/ci'
import { CiDeliveryTruck } from 'react-icons/ci'
import { Maximize2, X } from 'lucide-react'
import { SalesProps } from '@/components/sections/Sales/sales.types'
import { Button } from '@/components/ui/button'

export function SalesPage({ tag, title, desc, price, de, qntOff, card, delivery = [], link }: SalesProps) {
    const gallery = [
        { src: '/images/keyboard-gamer-generated.png', alt: 'Teclado gamer RGB em perspectiva' },
        { src: '/images/keyboard-gamer.png', alt: 'Teclado gamer RGB visto de cima' },
        { src: '/images/keyboard-purple.png', alt: 'Teclado gamer com iluminação roxa' },
        { src: '/images/keyboard-orange.png', alt: 'Teclado gamer com iluminação laranja' },
        { src: '/images/keyboard-white.png', alt: 'Teclado gamer branco' },
    ]
    const [selectedImage, setSelectedImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    return (
        <>
            <section id="inicio" className="container mx-auto bg-center px-4 py-12 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:items-start lg:gap-14">
                    <div className="grid min-w-0 gap-4 sm:grid-cols-[84px_minmax(0,1fr)]">
                        <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
                            {gallery.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    aria-label={`Ver imagem ${index + 1}: ${image.alt}`}
                                    aria-pressed={selectedImage === index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative h-20 min-w-20 overflow-hidden rounded-xl border-2 bg-[#f7f7fa] transition sm:h-[72px] sm:min-w-0 ${
                                        selectedImage === index
                                            ? 'border-[#7620d0]'
                                            : 'border-transparent hover:border-[#d8bfff]'
                                    }`}>
                                    <Image src={image.src} alt="" fill sizes="80px" className="object-contain p-1" />
                                </button>
                            ))}
                        </div>

                        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl bg-[#f7f7fa] sm:order-2">
                            <Image
                                src={gallery[selectedImage].src}
                                alt={gallery[selectedImage].alt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-contain p-5 sm:p-8"
                            />
                            <button
                                type="button"
                                aria-label="Ampliar imagem do produto"
                                onClick={() => setIsViewerOpen(true)}
                                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition hover:bg-white">
                                <Maximize2 size={16} />
                            </button>
                        </div>
                    </div>

                    {isViewerOpen && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Imagem ampliada do produto">
                            <button
                                type="button"
                                aria-label="Fechar imagem ampliada"
                                onClick={() => setIsViewerOpen(false)}
                                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg">
                                <X size={20} />
                            </button>
                            <div className="relative h-[min(80vh,720px)] w-[min(92vw,1000px)]">
                                <Image
                                    src={gallery[selectedImage].src}
                                    alt={gallery[selectedImage].alt}
                                    fill
                                    sizes="92vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <div className="flex w-fit gap-3 rounded-2xl bg-[#E9DEFA] p-2 text-white">
                                <FaFire size={16} color="#7620d0" />

                                <p className="text-sm font-bold text-color-purble">{tag}</p>
                            </div>

                            <h1 className="text-3xl font-bold">{title}</h1>

                            <div className="flex items-center gap-3">
                                <CiStar />

                                <p>4.8 128 avalicaoes</p>
                            </div>

                            <p className="2xl:w-2/4">{desc}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <h1 className="text-3xl font-bold text-color-purble">{price}</h1>

                                    <p className="text-sm line-through">{de}</p>
                                </div>

                                <div className="rounded-2xl bg-[#E9DEFA] p-2 text-white">
                                    <p className="text-sm font-bold text-color-purble">{qntOff}</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <CiCreditCard1 color="black" size={23} />

                                <p>{card}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>

                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                </div>

                                <div>
                                    <p className="font-green text-green-800">Em estoque</p>
                                </div>
                            </div>

                            <div className="flex items-end gap-6">
                                <div>
                                    <h2 className="mb-3 text-lg font-semibold text-gray-900">Quantidade</h2>

                                    <div className="flex h-16 w-52 items-center justify-between rounded-2xl border border-gray-200 px-6 text-3xl">
                                        <button className="text-gray-700">−</button>
                                        <span>1</span>
                                        <button className="text-gray-700">+</button>
                                    </div>
                                </div>

                                <div className="flex w-2/5 flex-col gap-3">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="herobuttonsecondary" size="service" className="rounded-2xl">
                                            Adicionar ao carrinho
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <Button variant="herobutton" size="service" className="rounded-2xl">
                                            Comprar Agora
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                {delivery.map((item, index) => (
                                    <div key={`${item.text}-${index}`} className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9DEFA]">
                                            {item.icon ?? <CiDeliveryTruck color="black" size={20} />}
                                        </div>

                                        <div>
                                            <p className="w-2/3 text-sm">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
