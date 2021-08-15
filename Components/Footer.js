import React from 'react'
import Link from 'next/link';
import Box from './library/Box'
import Image from 'next/image'
import Logo from '../public/Images/logo.svg'
import Fa from '../public/Images/icon-facebook.svg'
import Ig from '../public/Images/icon-instagram.svg'
import Pin from '../public/Images/icon-pinterest.svg'
import Tweet from '../public/Images/icon-twitter.svg'

function Footer() {
    return (
        <Box
        bg='#232127'
        color='#fff'
        position= 'static'
        width='100%'
        minHeight='30vh'
        display= 'flex'
        justifyContent= {['center','space-between']}
        alignItems = 'center'
        flexDirection = {['column', 'row']}
        p='1rem'
        pr= {[ '0.5rem','5rem']}
        pl= {[ '0.5rem','5rem']}
        >
            <Box
            fontSize = '2rem'
            fontWeight= 'bold'
            >
                Shortly
            </Box>

            <Box
            display='flex'
            flexDirection= {['column', 'row']}
            //bg='red'
            textAlign = {['center', 'left']}
            >
                <Box
                p='1rem'
                
                >
                    <Box>
                        Features
                    </Box>
                    
                    <Box
                    display= 'flex'
                    flexDirection = 'column'
                    
                    >
                        <Link href='/' passHref>
                        Link Shortening
                        </Link>
                        <Link href='/' passHref>
                        Branded Links
                        </Link>
                        <Link href='/' passHref>
                        Analytics
                        </Link>
                        
                    </Box>
                </Box>
                <Box
                p='1rem'
                >
                    <Box>
                        Resources
                    </Box>
                    
                    <Box
                    display= 'flex'
                    flexDirection = 'column'
                    >
                        <Link href='/' passHref>
                        Blog
                        </Link>
                        <Link href='/' passHref>
                        Developers
                        </Link>
                        <Link href='/' passHref>
                        Support
                        </Link>
                        
                    </Box>
                </Box>
                <Box
                p='1rem'
                >
                    <Box>
                        Company
                    </Box>
                    
                    <Box
                    display= 'flex'
                    flexDirection = 'column'
                    >
                        <Link href='/' passHref>
                        About
                        </Link>
                        <Link href='/' passHref>
                        Our Team
                        </Link>
                        <Link href='/' passHref>
                        Careers
                        </Link>
                        <Link href='/' passHref>
                        Contact
                        </Link>
                        
                    </Box>
                </Box>
                

            <Box
            display='flex'
            p={['0rem','1rem']}
            pl={['0rem','3rem']}
            >
                <Box
                p= '0.5rem'
                >
                    <Image src={Fa} alt='Fa'/>
                </Box>
                <Box
                p= '0.5rem'>
                    <Image src={Tweet} alt='Tweet'/>
                </Box>
                <Box
                p= '0.5rem'>
                    <Image src={Pin} alt='Pin'/>
                </Box>
                <Box
                p= '0.5rem'>
                    <Image src={Ig} alt='Ig'/>
                </Box>
            </Box>
            </Box>
            
        </Box>
    )
}

export default Footer
