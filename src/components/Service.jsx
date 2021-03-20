import React from 'react'
import Cart from './Card'
import cardImg1 from './img/cart1.jpg'
import cardImg2 from './img/cart2.jpg'
import cardImg3 from './img/cart3.jpg'

export default function About() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <Cart imgSrc={cardImg1} />
                            <Cart imgSrc={cardImg2} />
                            <Cart imgSrc={cardImg3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
