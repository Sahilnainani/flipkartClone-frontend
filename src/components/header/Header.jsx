import {List, ListItem ,Drawer ,AppBar ,IconButton, Toolbar, styled, Box, Typography } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Styledheader = styled(AppBar)`
  background:#2874f0;
  height:55px
`

const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    color:inherit
`
const SubHeading = styled(Typography)`
    font-size:13px;
    font-style:italic;
`
const Plusimage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
})
const CustomButtonwrapper = styled(Box)(({ theme }) => ({
    margin: '0 2% 0 2%',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))
const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const sublogo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
    const [open,setopen] = useState(false)
    const handleOpen=()=>{
        setopen(true)
    }
    const handleClose=()=>{
        setopen(false)
    }
    const list=()=>(
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <Styledheader>
            <Toolbar style={{ minHeight: 54 }}>
                <MenuButton color="inherit" onClick={handleOpen}>
                    <MenuIcon/>
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to='/' style={{ textDecoration: 'none' }}>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: 'flex', width: 93 }}>
                        <SubHeading>Explore&nbsp;
                            <Box component='span' style={{ color: '#FFE500' }}> Plus</Box>
                        </SubHeading>
                        <Plusimage src={sublogo} alt="" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonwrapper>
                    <CustomButtons />
                </CustomButtonwrapper>
            </Toolbar>
        </Styledheader>

    )
}

export default Header
