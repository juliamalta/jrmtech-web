export interface FeaturesProps {
    titlePrimary?: string
    title: string | React.ReactNode
    text1: string
    text2?: string
    features: featuresData[]
    features1: featuresData2[]
    buttonText: string
}

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

export interface featuresData {
    title: string
    desc: string
    icon?: React.ReactNode
}
export interface featuresData2 {
    title: string
    desc: string
    isLast?: boolean
}

export interface FeatureTag {
    label: string
    icon?: React.ReactNode
    position: 'top-right' | 'middle-left' | 'bottom-center'
}
