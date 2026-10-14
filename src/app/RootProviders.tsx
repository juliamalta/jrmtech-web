'use client'

import NavigationHeader from '@/components/sections/Navigations'
import { configs } from '@/configs'
import LogoImage from '../../public/images/logo.png'

export function RootProviders({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavigationHeader
                logo={LogoImage.src}
                navs={configs.menu}
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSf7UDEd4o_ll21lRKERe2rf83vGASGW0e1vJukTut4rD1OuPg/viewform"
            />

            {children}
        </>
    )
}
