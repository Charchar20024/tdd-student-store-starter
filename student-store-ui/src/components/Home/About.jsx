import * as React from "react"
import "./About.css"

export default function Sidebar() {
    

    return(
        <div className="about">
            <h2><strong>About</strong></h2>
            <div className="about-elements">
                <div>
                    <p>The codepath student store offers great products at great prices from a great team and for a great cause. <br/>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
                        <br/>All proceeds go towards bringing high quality CS education to college students around the country.</p>
                </div>
                <div>
                <img className= "image" src="/images/giant_codepath.6952ef57 (1).svg" alt="" />
                </div>

            </div>
        </div>

    )
}

