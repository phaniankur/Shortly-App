import React from 'react'
import Link from 'next/link';
import Box from './library/Box'
import Image from 'next/image'
import Logo from '../public/Images/logo.svg'
import Button from './library/Button'

function Navbar() {
    return (
        
        <Box
        //bg='red'
        width='100%'
        display={['none','flex']}
        justifyContent= 'space-between'
        alignItems= 'center'
        flexDirection = 'row'
        //ml='1rem'
        mb='5rem'
        pl='5rem'
        pr='5rem'
        pt='1.5rem'
        >
            <Box
            position= 'relative'
            display='flex'
            justifyContent= 'center'
            alignItems= 'center'
            >
                <Image 
                src={Logo}
                alt='Logo'
                />
                
                <Box
                    display='flex'
                    justifyContent= 'center'
                    alignItems= 'center' 
                    ml='2rem'
                >
                    <Box
                    ml='1rem'
                    mr='1rem'
                    >
                        <Link href='/' passHref>
                        Features
                        </Link>
                    </Box>
                    <Box
                    ml='1rem'
                    mr='1rem'
                    >
                        <Link href='/' passHref>
                        Pricing
                        </Link>
                    </Box>
                    <Box
                    ml='1rem'
                    mr='1rem'
                    >
                        <Link href='/' passHref>
                        Resources
                        </Link>
                    </Box>
                    
                    
                    
                </Box>
            </Box>

            <Box
                //bg='green'
                display='flex'
            justifyContent= 'center'
            alignItems= 'center'
            >
                <Box
                    ml='1rem'
                    mr='1rem'
                >
                        <Button
                        variant = 'transparent'
                        >Login</Button>
                </Box>
                <Box
                    ml='1rem'
                    mr='1rem'
                >
                        <Button
                        variant= 'primary'>Sign Up</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar
