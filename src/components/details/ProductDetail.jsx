import React from 'react'
import { Box, styled,Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText=styled(Box)`
    font-size:14px;
    & > p{
        font-size:14px;
        margin-top:10px;
    }
`
const StyledBatch=styled(LocalOfferIcon)`
    margin-right:10px;
    vertical-align:baseline;
    color:#00cc00;
    font-size:15px
`
const ColumnText=styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    & > td {
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`
const ProductDetail = ({ product }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Review
                <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C',fontWeight:600 }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBatch/>Buy this product and get upto ₹250 off on Flipkart Furniture T&C</Typography>
                <Typography><StyledBatch/>Purchase now & get a surprise cashback coupon for January / February 2023 T&C</Typography>
                <Typography><StyledBatch/>10% off on Kotak Bank Credit Cards and Credit EMI Trxns, up to ₹1,500. On orders of ₹5,000 and above T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText >
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box style={{color:'#2874f0'}} component="span">SuperComNet</Box>
                            <Typography>GST Invoice Available</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt="supercoin" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
