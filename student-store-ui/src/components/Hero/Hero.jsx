import * as React from "react"
import "./Hero.css"


export default function Hero({tagline, description}) {
    return (
        <div className="hero">
            <div className="hero-elements">
             <div className="info">
                <h1>{tagline}</h1>
                <p>{description}</p> 
            </div>
            <div className="store-icon">
                <img src="/images/student_store_icon.18e5d61a.svg" alt="" />
           </div>
           </div>
           
        </div>

    )
}