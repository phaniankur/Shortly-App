import React from 'react'
import Box from './library/Box'

function stats() {
    return (
        <Box
        p= '1rem'
        display= 'flex'
        justifyContent= 'center'
        alignItems = 'center'
    flexDirection = 'column'
        >
            <Box
            fontSize= '2rem'
            fontWeight ='bold'
            mb='1rem'
            >
                Advanced Statistics</Box>
            <Box
            textAlign='center'
            color='grey'
            //width='400px'
            >Track how you links are performing across the web with our advanced statistics dashboard.</Box>
            

            <Box
            display= 'flex'
            justifyContent= 'center'
            alignItems = 'center'
            flexDirection = {['column', 'row']}
            >
                <Box
                bg='#fff'
                width='350px'
                height='250px'
                borderRadius = '10px'
                p='2rem'
                //m= '1.5rem'
                >
                    <Box
                    fontWeight='bold'
                    fontSize= '1.5rem'
                    >
                        Brand Recognition
                    </Box>
                    <Box
                    fontSize='18px'
                    color='grey'
                    >
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                    </Box>
                </Box>
                <Box
                bg='#fff'
                width='350px'
                height='250px'
                borderRadius = '10px'
                p='2rem'
                //m= '1.5rem'
                >
                    <Box
                    fontWeight='bold'
                    fontSize= '1.5rem'
                    >
                        Brand Recognition
                    </Box>
                    <Box
                    fontSize='18px'
                    color='grey'
                    >
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                    </Box>
                </Box>
                <Box
                bg='#fff'
                width='350px'
                height='250px'
                borderRadius = '10px'
                p='2rem'
                //m= '1.5rem'
                >
                    <Box
                    fontWeight='bold'
                    fontSize= '1.5rem'
                    >
                        Brand Recognition
                    </Box>
                    <Box
                    fontSize='18px'
                    color='grey'
                    >
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

export default stats
