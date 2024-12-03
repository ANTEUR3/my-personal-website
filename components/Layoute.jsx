import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layoute = ({children}) => {
  return (
    <div className={`content --font-sofia`}>
        <NavBar/>
        {children}
        <Footer />
    </div>
  )
}

export default Layoute