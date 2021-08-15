import React, {useEffect, useState} from 'react'
import Box from './library/Box'
import Header from './Header'
import Navbar from './Navbar'
import Stats from './Stats'
import Shorten from './Shorten'
import Boost from './Boost'
import Footer from './Footer'

function Main() {
    
    return (
        <>
        <Navbar/>
            <Header/>
            <Box
            bg='#bfbfbf'
            
            >
                <Shorten/>
                <Stats/>
                <Boost/>
                </Box>
            
            <Footer/>
        </>
            
        
        
    )
}

export default Main
