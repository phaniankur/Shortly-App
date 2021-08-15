import React from 'react'
import Box from './library/Box'
import Button from './library/Button'
import Image from 'next/image'
import Illustration from '../public/Images/illustration-working.svg'

function Header() {
    
    return (
        <Box
        //bg= {['red', 'blue']}
            width='100%'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flexDirection = {['column-reverse' ,'row']}
            p='3rem'
            >
            <Box
            width= {['100%','35%']}
            display = {['flex', 'block']}
            flexDirection= 'column'
            alignItems = 'center'
            
            //bg='red'
            >
                <Box 
                fontSize= '2rem'
                fontWeight ='bold'
                >More Than just shorter links</Box>
                <Box
                color='grey'
                >Build your brand's recognition and get detailed insights on how your links are performing.</Box>
                <Box
                    pt='1.5rem'
                >
                    <Button 
                    variant= 'primary'
                    fontWeight='bold'
                >Get Started</Button>
                </Box>
                
            </Box>
            <Box
            
            >
                <Image src={Illustration} alt="Illustration"/>
            </Box>
        </Box>
    )
}

export default Header
