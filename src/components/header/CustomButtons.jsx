import { useState, useContext } from 'react'
import { Button, Typography, styled, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile.jsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 11% 0 4%',
  '& > *': {
    marginRight: 25,
    fontSize: 16,
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}))

const Loginbutton = styled(Button)`
    color:#2874f0;
    background:#ffffff;
    text-transform:none;
    padding:5px 30px ;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
    margin-right:25px;
`
const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    color: '#2874f0',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10
  }
}))

const CustomButtons = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const [open, setopen] = useState(false);
  const { acc, setacc } = useContext(DataContext)
  const openDialogue = () => {
    setopen(true)
  }
  return (
    <Wrapper>
      {
        acc ? <Profile acc={acc} setacc={setacc} />
          :
          <Loginbutton variant='contained' onClick={() => openDialogue()}> Login </Loginbutton>
      }
      <Typography style={{ marginTop: 4, width: 166, marginRight: 10, textAlign: "center" }}>Become a seller</Typography>
      <Typography style={{ marginTop: 4, width: 105, textAlign: "center" }}>More</Typography>

      <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:5}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setopen={setopen} />
    </Wrapper>
  )
}

export default CustomButtons
