import { FeatureTag } from '@/components/sections/Features/Features.types'
import Link from 'next/link'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import img from '../../../../public/images/cel.png'
import Image from 'next/image'

interface Features2Props {
    tags?: FeatureTag[]
}

const tagPositionClasses = {
    'top-right': 'right-[4%] top-[8%]',
    'middle-left': 'left-0 top-[46%]',
    'bottom-center': 'bottom-[7%] left-[18%]',
}

function Features2({ tags = [] }: Features2Props) {
    return (
        <section id="features" className="container py-24">
            <div className="relative h-[560px] overflow-hidden rounded-2xl bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_2px,transparent_2px,transparent_10px),linear-gradient(180deg,#3a075d_0%,#642183_35%,#a84ac4_68%,#d88cf0_100%)] sm:h-[580px] md:h-[330px] lg:h-[clamp(360px,27vw,394px)] xl:h-[430px]">
                <div className="relative z-10 flex h-auto w-full flex-col items-center justify-center gap-6 p-6 sm:p-8 md:h-full md:w-[46%] md:items-start md:justify-start md:justify-center md:gap-8 md:p-10 lg:w-[48%] lg:p-16">
                    <div>
                        <h1 className="mx-auto w-full max-w-[92%] text-center text-5xl font-bold leading-[0.98] text-white md:max-w-full md:text-left md:text-4xl lg:text-5xl lg:leading-tight 2xl:text-6xl">
                            Proteja seu celular ainda hoje
                        </h1>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <InteractiveHoverButton className="border-color-studio bg-white text-center text-sm text-color-purble hover:bg-white hover:text-color-studio">
                            <Link href="https://wa.me/5531996398460"> Garanta a sua</Link>
                        </InteractiveHoverButton>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 z-[1] aspect-[738/433] w-full md:w-[58%] lg:w-[50%]">
                    <Image
                        src={img}
                        alt="teste"
                        fill
                        sizes="(max-width: 767px) 100vw, 58vw"
                        className="object-contain object-bottom"
                    />
                    {tags.map((tag) => (
                        <div
                            key={tag.label}
                            className={`absolute hidden max-w-[92%] items-center gap-2 rounded-full border border-white/50 bg-purple-950/55 px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.35rem,0.5vw,0.5rem)] text-[clamp(0.55rem,1vw,0.875rem)] text-white shadow-lg backdrop-blur-sm md:flex ${tagPositionClasses[tag.position]}`}>
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
