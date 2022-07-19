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
  //const sidebarcollaped = localStorage.getItem('sidebar-collaped')

  const [isOpen, setIsOpen] = React.useState(true);

  const handleOnToggle = () => setIsOpen(!isOpen);
  if (isOpen){
  return (  <div className={isOpen ? 'sidebar' : 'sidebar-expand'}>
      <section className="sidebar-elements">
    <ArrowIcon 
     handleOnToggle ={handleOnToggle}
    />
    <Icons /> 
  </section></div>
  
      )
} return(
  <div className={isOpen ? 'sidebar' : 'sidebar-expand'}>
      
    <section className="sidebarElementsExpanded">
      
      <div className="hm">
        <ArrowIcon 
       handleOnToggle ={handleOnToggle}
      />
     <strong><p>Shopping Cart <FontAwesomeIcon icon={faCartPlus} size="" /></p></strong> 
      <p>No items in cart yet! start Shopping now</p>
      <strong><p>Payment info <FontAwesomeIcon icon={faDollarSign} size="" /></p></strong>
      <form >
        <label><div>Name</div>
          <input type="text"/>
        </label>
        
      </form>
      <form >
        <label><div>Email</div>
          <input type="email"/>
        </label>
        
      </form>
      <div>
      <p><input type="checkbox" /> I agree to the terms and conditions</p>
    </div>
    <button className="cheackoutButton">Checkout</button>
      </div>
    </section></div>
)
  } 

export function ArrowIcon({handleOnToggle}) {
  
 
  
  return (
    <button className="arrow" onClick={handleOnToggle}>
    <FontAwesomeIcon icon={faArrowRightLong} size="2x"/>
   </button> )

  
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