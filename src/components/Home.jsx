import React from 'react'
import webImg from './img/undraw_online_resume_re_ru7s.svg'
import Common from './Common'

export default function Home() {
    return (
        <>
            <Common
                name="Grow Your Business with"
                brandName="TechSmith"
                titleName="We are the team of talented developer making web apps"
                navLink="Get Started"
                imgLink={ webImg }
                path="/service"
            />
        </>
    )
}
