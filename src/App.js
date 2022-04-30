import React from 'react';
import { Route, Routes, Redirect } from "react-router-dom";
import Product from './pages/Product';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Brand from './pages/Brand';
import Search from './pages/Search';
import Category from './pages/Category';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import NavBar from './components/Navbar';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route exact path='/product/:id' element={<Product term={'abeeee1'} />} />
                <Route exact path='/products' element={<Products term={'abeeee1'} />} />
                <Route exact path='/cart' element={<Cart term={'abeeee2'} />} />
                <Route exact path='/category' element={<Category term={'abeeee3'} />} />
                <Route exact path='/search' element={<Search term={'abeeee4'} />} />
                <Route exact path='/brand' element={<Brand term={'abeeee5'} />} />
                <Route exact path='/welcome' element={<Welcome term={'welcome'} />} />
                <Route path='/home' exact element={<Home term={'abeeee6'} />} />
                <Route path='/' exact element={<Home term={'abeeee6'} />} />
            </Routes>
        </React.Fragment>
    );
}

export default App;