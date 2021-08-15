import React, {useState} from 'react'
import axios from 'axios'
import Box from './library/Box'
import Input from './library/Input'
import Button from './library/Button'
import Image from './library/Image'
import Bg from '../public/Images/bg-shorten-desktop.svg'
function Shorten() {

    const [shortLink, setshortLink] = useState('')
    const [searchData, setsearchData] = useState('')
    const url = 'https://api.shrtco.de/v2/shorten'


    function handleChange(e) {
        setsearchData(e.target.value)
    }
    
    
    const handleClick= (e)=>{
        console.log('search:' , searchData)
        //alert('clicked')
        e.preventDefault()
        axios.get(url,
            {
                params:{
                    url:{searchData},
                }
            })
            .then(res=> {
                //console.log(res)
                setshortLink(res.data.result.full_short_link)
            })
            .catch(err=> console.log(err))
        
    }
    return (
        <Box 
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection= 'column'
        p='0.5rem'
        width= '100%'
        //m = {['1rem', '0rem']}
        >
            <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            width = '100%'
            pb='1rem'
            >
                <Image src='/Images/bg-shorten-desktop.svg'
                display={['none', 'block']}
                alt="Bddg"
                bg='#3B3054'
                borderRadius= '10px'
                position='relative'
                />
                <Image src='/Images/bg-shorten-mobile.svg'
                display={['block', 'none']}
                width = '90%'
                alt="Bddg" 
                bg='#3B3054'
                borderRadius= '10px'
                position='relative'
                />
                
                <Box
                width= {['100%' ,'60rem' ]} 
                display='flex'
                justifyContent='center'
                alignItems='center'
                position='absolute'
                flexDirection = {['column', 'column','row']}
                >
                    <Box
                    width={['80%' ,'100%']}
                    pr={['0rem' ,'1rem']}
                    pb={['1rem' ,'0rem']}
                    >
                        <Input
                        
                        variant="primary"
                        placeholder='Shorten a link here...'
                        onChange= {handleChange}
                        />
                    </Box>
            
                    
                    <Button 
                    display = 'none'
                    variant= 'secondary'
                    fontWeight='bold'
                    onClick = {handleClick}
                    >Shorten It!</Button>
                    
                </Box>
            </Box>
                
                <Box
                    borderRadius= '10px'
                    bg='white'
                    display={shortLink? 'flex' : 'none'}
                    justifyContent={['center' ,'space-between']}
                    alignItems='center'
                    flexDirection= {['column', 'row']}
                    p='0.5rem'
                    m = {['1rem', '0rem']}
                    width= {['90%', '74%']}
                    >
                        <Box
                        p= '0.5rem'
                        display = 'flex'
                        width= '100%'
                        overflow= 'hidden'
                        >
                            {searchData}
                        </Box>
                        <Box

                        width = '100%'
                        p= '0.5rem'
                        color = '#2acfcf'
                        >
                            {shortLink}
                        </Box>
                    <Button
                    variant = 'secondary'
                    onClick={() => {navigator.clipboard.writeText(shortLink)}}
                    >
                        Copy</Button>
                </Box>
            </Box>
    )
}

export default Shorten
