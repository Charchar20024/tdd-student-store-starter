import * as React from "react"
import "./Hero.css"
const appInfo = {
    
    tagline: `Welcome!
    Find Your Merch!`,
    description: `We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.
  
    `,
  }

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-elements">
             <div className="info">
                <h1>{appInfo.tagline}</h1>
                <p>{appInfo.description}</p> 
            </div>
            <div className="store-icon">
                <img src="/images/student_store_icon.18e5d61a.svg" alt="" />
           </div>
           </div>
           
        </div>

    )
}