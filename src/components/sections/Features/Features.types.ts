export interface Features3Props {
    nocard?: boolean
    cards: cardData[]
}
// CardSection.types.ts

export interface cardData {
    title?: string
    desc?: string
    nocard?: boolean
}

export interface FeatureTag {
    label: string
    icon?: React.ReactNode
    position: 'top-right' | 'middle-left' | 'bottom-center'
}
