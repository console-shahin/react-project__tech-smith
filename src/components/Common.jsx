import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Common(props) {
    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="hero_header">
                                        { props.name } <strong className="brand-name">{ props.brandName }</strong>
                                    </h1>
                                    <h2 className="my-3 intro">
                                        {props.titleName}
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.path} className="get-started">{ props.navLink }</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img pl-3">
                                    <img src={props.imgLink} alt="home img" className="img-fluid animated"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
