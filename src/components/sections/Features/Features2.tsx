import { FeatureTag } from '@/components/sections/Features/Features.types'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import img from '../../../../public/images/cel.png'
import Image from 'next/image'

interface Features2Props {
    tags?: FeatureTag[]
}

const tagPositionClasses = {
    'top-right': 'right-2 top-8 sm:right-8 sm:top-10',
    'middle-left': 'left-2 top-1/2 -translate-y-1/2 sm:left-8',
    'bottom-center': 'bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12',
}

function Features2({ tags = [] }: Features2Props) {
    return (
        <section id="features" className="container py-24">
            <div className="flex items-center rounded-2xl bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_2px,transparent_2px,transparent_10px),linear-gradient(180deg,#3a075d_0%,#642183_35%,#a84ac4_68%,#d88cf0_100%)]">
                <div className="flex flex-col gap-8 p-16">
                    <div>
                        <h1 className="w-2/2 text-6xl font-bold text-white">Proteja seu celular ainda hoje</h1>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <InteractiveHoverButton className="border-color-studio bg-white text-center text-sm text-color-purble hover:bg-white hover:text-color-studio">
                            <Link href="https://wa.me/5531996398460"> Garanta a sua</Link>
                        </InteractiveHoverButton>
                    </div>
                </div>
                <div className="relative w-full lg:w-1/2">
                    <Image src={img} alt="teste" width={508} height={590} className="size-full object-contain" />
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
