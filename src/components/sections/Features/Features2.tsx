import { FeatureTag } from '@/components/sections/Features/Features.types'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import img from '../../../../public/images/cel.png'
import Image from 'next/image'

interface Features2Props {
    tags?: FeatureTag[]
}

const tagPositionClasses = {
    'top-right': 'right-2 top-4 sm:right-6 sm:top-8 lg:right-8 lg:top-10',

    'middle-left': 'left-0 top-1/2 -translate-y-1/2 sm:left-4 lg:left-8',

    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8 lg:bottom-12',
}

function Features2({ tags = [] }: Features2Props) {
    return (
        <section id="features" className="container py-24">
            <div className="flex flex-col items-center overflow-hidden rounded-2xl bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_2px,transparent_2px,transparent_10px),linear-gradient(180deg,#3a075d_0%,#642183_35%,#a84ac4_68%,#d88cf0_100%)] lg:flex-row">
                <div className="flex w-full flex-col gap-8 p-8 sm:p-12 lg:w-1/2 lg:p-16">
                    <div>
                        <h1 className="w-full text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Proteja seu celular ainda hoje
                        </h1>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <InteractiveHoverButton className="border-color-studio bg-white text-center text-sm text-color-purble hover:bg-white hover:text-color-studio">
                            <Link href="https://wa.me/5531996398460"> Garanta a sua</Link>
                        </InteractiveHoverButton>
                    </div>
                </div>
                <div className="relative h-[360px] w-full sm:h-[480px] lg:h-[590px] lg:w-1/2">
                    <Image
                        src={img}
                        alt="teste"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                    />
                    {tags.map((tag) => (
                        <div
                            key={tag.label}
                            className={`absolute flex items-center gap-2 rounded-full border border-white/50 bg-purple-950/55 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm ${tagPositionClasses[tag.position]}`}>
                            {tag.icon}
                            <span>{tag.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features2
