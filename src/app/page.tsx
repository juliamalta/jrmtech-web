import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineColorize } from 'react-icons/md'
import { MdCode } from 'react-icons/md'
import { MdOutlineGroups } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { TbCurrentLocation } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import AboutUs1 from '@/components/sections/AboutUs/AboutUs1'
import Cards3 from '@/components/sections/Cards/Cards3'
import Faq1 from '@/components/sections/Faqs/Faq1'
import { HeroSection } from '@/components/sections/hero-section'
import Chat from '@/components/sections/Chat/Chat'
import { Forms1 } from '@/components/sections/Form/Forms1'
import Cards1 from '@/components/sections/Cards/Cards1'
import Cards2 from '@/components/sections/Cards/Cards2'
import Features2 from '@/components/sections/Features/Features2'
import { TbSparkles } from 'react-icons/tb'
import { MdVerifiedUser } from 'react-icons/md'
import Features3 from '@/components/sections/Features/Features3'
import Contact from '@/components/sections/Contact/Contact'

export default function Home() {
    return (
        <>
            <HeroSection
                titlePrimary="Realizamos instalação e configuração de softwares"
                title={
                    <>
                        Tudo o que você precisa em tecnologia,
                        <span className="font-bold text-white">em um só lugar.</span>
                    </>
                }
                desc="Computadores, acessórios, periféricos, suporte técnico especializado, manutenção, formatação e montagem de PCs Gamer com atendimento rápido e confiável."
                button1text="Conheca mais"
                button2text="Ver nossos trabalhos"
            />
            <Cards3
                title="Ofertas Tech!"
                desc="Da primeira conversa ao produto final, transformamos visões em experiências digitais que conectam marcas aos seus públicos."
                buttonText="Conheça mais"
                link="teste"
                cards={[
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-product.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                        freeShipping: true,
                    },
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                ]}
            />
            <Cards3
                title="Mais procurado"
                desc="Da primeira conversa ao produto final, transformamos visões em experiências digitais que conectam marcas aos seus públicos."
                buttonText="Conheça mais"
                link="teste"
                cards={[
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                    {
                        title: 'Fones de Ouvido com Microfone Gamer HyperX Cloud Earbuds II...',
                        img: '/images/earbuds-test.png',
                        oldPrice: 'R$211,75',
                        price: 'R$167,65',
                    },
                ]}
            />
            <Features2
                tags={[
                    {
                        label: 'Modelos variados',
                        icon: <TbSparkles className="size-4" />,
                        position: 'top-right',
                    },
                    {
                        label: 'Películas de proteção',
                        icon: <MdVerifiedUser className="size-4" />,
                        position: 'middle-left',
                    },
                    {
                        label: 'Capinhas resistentes',
                        icon: <CiMobile1 className="size-5" />,
                        position: 'bottom-center',
                    },
                ]}
            />
            <Features3
                cards={[
                    {
                        title: 'Formatação Completa',
                        desc: 'Formatação completa com instalação do sistema, drivers e configurações essenciais para deixar seu computador rápido, limpo e pronto para uso.',
                    },
                    {
                        title: 'Instalação de Softwares',
                        desc: 'Programas essenciais instalados e configurados corretamente.',
                    },

                    {
                        title: 'Manutenção de Computadores',
                        desc: 'Correção de falhas, limpeza e otimização de desempenho.',
                    },
                    {
                        title: 'Montagem de PC Gamer',
                        desc: 'Configurações personalizadas para máximo desempenho nos jogos.',
                    },
                ]}
            />
            <Contact />

            <Chat />
        </>
    )
}
