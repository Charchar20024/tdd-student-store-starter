import * as React from "react"
import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  
  faFacebookSquare,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  {
    id: 1,
    label: 'Home'
  },
  {
    id: 2,
    label: 'About Us'
  },
  {
    id: 3,
    label: 'Contact Us'
  },
  {
    id: 4,
    label:'Buy Now'
  },
];

export default function Navbar() {
  return (
    <div className="nav-container">
    <nav className="navbar">
      <img src="/images/codepath.f1b3e41a.svg" alt="" />
      <div className="socials">
        <span>
        <FontAwesomeIcon icon={faFacebookSquare} />
       </span>
       <span>
        <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span>
       <FontAwesomeIcon icon={faInstagram}/>
      </span>
      </div>
      <NavLinks navLinks={navLinks} />
    </nav>
  </div>
  )

}
export function NavLinks({ navLinks }) {
  const labelItems = navLinks.map((navlinks) => (
    <li key={navlinks.id}>
      {navlinks.label}
    </li>
  ));
  
  return (
  
    <ul>{labelItems}</ul>)

  
}

