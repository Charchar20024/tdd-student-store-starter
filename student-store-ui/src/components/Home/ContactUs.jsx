import * as React from "react"



import "./ContactUs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  
  faFacebookSquare,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function ContactUs() {
  

    return (
        <div className="contact">
            <h2><strong>Contact Us</strong></h2>
        <div className="elements">
        
            <div className="info">
                <p>Email: code@path.org</p>
                <p>Phone: 1-800-CODEPATH</p>
                <p>Address: 123 Fake Street, San Francisco,CA</p>
            <div className="socials">
            <p>Socials:</p>
                <p><FontAwesomeIcon icon={faFacebookSquare} /></p>
                <p><FontAwesomeIcon icon={faTwitter} /></p>
                 <p><FontAwesomeIcon icon={faInstagram}/></p>
                
                </div>
            </div>
            
            <div><div> </div>
            <img className= "image" src="/images/happy_person.517b658d.svg" alt="" />
            </div>
        </div>
        </div>

    )
    
    }
