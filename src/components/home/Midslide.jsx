import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const Image = styled("img")({
    width: 232,
});
const Component = styled(Box)`
    display:flex;
`
const LeftComp=styled(Box)(({theme})=>({
    width:'80%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))
const RightComp=styled(Box)(({theme})=>({
    background:'#ffffff',
    padding:5,
    marginTop:10,
    marginLeft:10,
    width:'18%',
    textAlign:"center",
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))
const Midslide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComp>
                <Slide products={products} title={title} timer={timer} />
            </LeftComp>
            <RightComp>
                <Image src={adURL} alt="" />
            </RightComp>
        </Component>
    )
}

export default Midslide
