import React, {useState} from 'react'
import Box from './library/Box'
import Input from './library/Input'
import Button from './library/Button'
import Image from './library/Image'
import Bg from '../public/Images/bg-shorten-desktop.svg'
function Shorten() {

    const [shortLink, setshortLink] = useState([])
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
        //width= '50rem' 
        display='flex'
        justifyContent='center'
        alignItems='center'
        p='0.5rem'
        //bg='#bfbfbf'
        
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
                alt="Bddg"
                bg='#3B3054'
                borderRadius= '10px'
                position='relative'
                />
                <Box
                width= {['100%' ,'50rem' ]} 
                display='flex'
                justifyContent='center'
                alignItems='center'
                position='absolute'
                >
                    <Box
                    width='100%'
                    pr='1rem'
                    >
                        <Input
                        variant="primary"
                        placeholder='Searching'
                        />
                    </Box>
            
                    
                    <Button 
                    variant= 'secondary'
                    fontWeight='bold'
                >Get Started</Button>
                </Box>
            </Box>
    )
}

export default Shorten
