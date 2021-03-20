import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                <img className="card-img-top" src={props.imgSrc} alt="CardImage"/>
                    <div className="card-body">
                        <h5 className="card-title">Demo Card title</h5>
                        <p className="card-text"># Demo -- Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/contact" className="btn btn-primary">Add to Cart</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
