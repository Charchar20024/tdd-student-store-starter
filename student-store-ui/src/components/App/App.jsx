import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
// import {SubNav} from "../SubNav/SubNav"

import "./App.css"


export const appInfo = {
    
  tagline: `Welcome!
  Find Your Merch!`,
  description: `We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.

  `,
}
export default function App() {
  return (
    <div className="app">
      {/* <BrowserRouter> */}
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          
          <Hero tagline={appInfo.tagline}
             description={appInfo.description}/>
          {/* <SubNav /> */}
          <Home />
          
          <Sidebar />
        </main>
      {/* </BrowserRouter> */}
    </div>
  )
}
