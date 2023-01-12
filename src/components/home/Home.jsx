import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner'
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productAction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import Midslide from './Midslide';
import MidSection from './MidSection';
const Component = styled(Box)`
    padding:10px 10px;
    background:#F2F2F2;
`

const Home = () => {
  const { products } = useSelector(state => state.getProducts)
  console.log(products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <Midslide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
      </Component>
    </>
  )
}

export default Home
