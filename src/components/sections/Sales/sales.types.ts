export type DeliveryProps = {
    text: string
    icon?: React.ReactNode
}

export type SalesProps = {
    tag: string
    title: string
    desc: string
    price: string
    de: string
    link?: string
    qntOff: string
    card: string
    delivery?: DeliveryProps[]
}
