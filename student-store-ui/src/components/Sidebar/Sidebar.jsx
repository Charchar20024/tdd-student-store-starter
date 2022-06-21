import * as React from "react"
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightLong,
  faCartPlus,
  faBagShopping,
  faDollarSign
 
} from "@fortawesome/free-solid-svg-icons";
export default function Sidebar() {
  return (
    <div className = "idk">
    <section className="sidebar">
      <ArrowIcon />
      <Icons />
    </section> 
    
    </div>
  )
}
export function ArrowIcon() {
 
  
  return (
    <span className="arrow">
    <FontAwesomeIcon icon={faArrowRightLong} size="2x"/>
   </span> )

  
}
export function Icons() {
 
  
  return (
   <div className="icons-container">
      <><span>
      <FontAwesomeIcon icon={faCartPlus} size="2x" />
    </span><span>
        <FontAwesomeIcon icon={faDollarSign} size="2x" />
      </span><span> <FontAwesomeIcon icon={faBagShopping} size="2x" /></span></>
    </div>
    )

  
}