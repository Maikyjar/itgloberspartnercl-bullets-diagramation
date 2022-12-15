import React from 'react'
import { BulletsSchema } from '../BulletType'
import Bullet from '../Bullet'

/* type Bullet = {
    image: string
    titleBullet?: string
    link?: LinkProps
} */

export const getBulletsAsTSXList = (
    bullets: BulletsSchema
) => (
    bullets.map((bullet:any, index) => {
        return <Bullet
            key={index}
            src={bullet.image}
            titleBullet={bullet.titleBullet}
            link={
                bullet.link
                ?
                bullet.link
                :
                {
                    url: "",
                    attributeNofollow: false,
                    attributeTitle: "",
                    openNewTab: false,
                    newTab: false
                }
            }

        />
    })
)
