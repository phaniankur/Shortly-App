import React from 'react'
import Box from './library/Box'
import Button from './library/Button'
import Boostimg from '.././public/Images/bg-boost-desktop.svg'
import Image from './library/Image'

function Boost() {
    return (
        <Box
        //p= '1rem'
        width='100%'
        display= 'flex'
        justifyContent= 'center'
        alignItems = 'center'
        flexDirection = 'column'
        //bg='purple'
        //height= '20vh'
        >
            <Image src= '/Images/bg-boost-desktop.svg' 
            display={['none', 'block']}
            width='100%'
            bg='#3B3054'
            position='relative'
            />
            <Image src='/Images/bg-boost-mobile.svg'
                display={['block', 'none']}
                width='100%'
                alt="Bddg"
                bg='#3B3054'
                position='relative'
                />
            
            <Box
            display= 'flex'
            justifyContent= 'center'
            alignItems = 'center'
            position ='absolute'
            fontSize= '2rem'
            fontWeight ='bold'
            color='#fff'
            flexDirection = 'column'
            pb='0.5rem'
            >
            Boost your link today
            <Box
            pt='1.5rem'>
                <Button 
                    variant= 'primary'
                    fontWeight='bold'
            >Get Started</Button>
            </Box>
            
        </Box>
        
        </Box>
        
    )
}

export default Boost
