import React from 'react'
import aboutImg from './img/undraw_about_me_wa29.svg'
import Common from './Common'

export default function About() {
    return (
        <>
            <Common
                name="Hi! I'm"
                brandName="Shahin Sarkar"
                titleName="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed."
                navLink="Contact Me"
                imgLink={ aboutImg }
                path="/contact"
            />
        </>
    )
}
