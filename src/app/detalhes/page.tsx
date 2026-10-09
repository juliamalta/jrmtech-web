import { SalesPage } from '@/components/sections/Sales/sales'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdOutlineSecurity } from 'react-icons/md'

export default function Sales() {
    return (
        <>
            <SalesPage
                tag="Oferta Tech!"
                title="Teclado Mecânico Gamer RGB"
                desc="Eleve sua experiência gamer com um teclado desenvolvido para quem busca desempenho, precisão e estilo. Com iluminação RGB e design ergonômico, ele combina conforto e personalidade para transformar seu setup."
                price="R$ 167,65"
                de="R$ 199,99"
                qntOff="16% OFF"
                card="Em até 12x de R$ 16,75 sem juros"
                delivery={[
                    {
                        text: 'Entrega para todo o Brasil',
                        icon: <CiDeliveryTruck size={20} />,
                    },
                    {
                        text: 'Garantia do produto',
                        icon: <MdOutlineSecurity size={20} />,
                    },
                ]}
            />
        </>
    )
}
