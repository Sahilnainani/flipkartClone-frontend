import { Box, Typography,styled, Button } from '@mui/material'
import React from 'react'
import { addEllipsis  } from '../../utils/common-utils'
import GroupedButton from './GroupedButton'
import { removefromcart } from '../../redux/actions/cartActions'
import { useDispatch } from 'react-redux'


const Component=styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`
const LeftComponent=styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
    
`
const Smalltext=styled(Typography)`
    color:#878787;
    size:14px;
    margin-top:10px;
`
const Remove=styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600;
`
const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const dispatch=useDispatch()
    
    const RemoveItemFromCart=(id)=>{
        dispatch(removefromcart(id))
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} style={{height:120}} alt="product" />
                <GroupedButton/>
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Smalltext>Seller:RetailNet
                    <Box component='span'><img src={fassured} alt=""  style={{width:60,marginLeft:10}}/></Box>
                </Smalltext>
                <Typography style={{margin:'20px 0'}}>
                    <Box component='span' style={{ fontSize: 20,fontWeight:600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#388E3C',fontWeight:600 }}>{item.price.discount} off</Box>
                </Typography>
                <Remove onClick={()=>RemoveItemFromCart(item.id)}>Remove</Remove>     
            </Box>
        </Component>
    )
}

export default CartItem
