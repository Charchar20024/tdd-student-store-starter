import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Home/Hero"

// import {SubNav} from "../SubNav/SubNav"

import "./App.css"



export default function App() {
  return (
    <div className="app">
      {/* <BrowserRouter> */}
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          
          
          {/* <SubNav /> */}
          <Home/>
          
          <Sidebar />
        </main>
      {/* </BrowserRouter> */}
    </div>
  )
}
