import { Box, Button, styled, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Cart from '../cart/Cart';
import { useNavigate } from 'react-router-dom';
import { addtoCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { payWithPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Image = styled('img')({
  padding: '15px 20px',
  width: '90%',
  border: '1px solid #f0f0f0'
})
const LeftContainer = styled(Box)(({ theme }) => ({
  minWdth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px'
  }
}))

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: '50px',
  borderRadius: '2px',
  [theme.breakpoints.down('lg')]: {
    width: '36%',
  }
}))

const ActionItem = ({ product }) => {

  const [quantity, setquantity] = useState(1);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {id}=product;

  const additemtocart=()=>{
    dispatch(addtoCart(id,quantity))
    navigate('/cart')
  }
  const buyNow=()=>{
    let response=payWithPaytm({amount:500,email:'abc@gmail.com'});
    let info={
      action:'https://securegw-stage.paytm.in/order/process',
      params:response,
    }
    post(info)
  }
  return (
    <LeftContainer>
      <Image src={product.detailUrl} alt="product" />
      <StyledButton variant="contained" onClick={()=>additemtocart()} style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
      <StyledButton variant="contained" onClick={()=>buyNow()} style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem
