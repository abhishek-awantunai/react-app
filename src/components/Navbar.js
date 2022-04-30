import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
        <div className="content">
            <h1>Navbar Section</h1>
            <ul>
                <li>
                    <NavLink to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink to="/product/11">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/category">Category</NavLink>
                </li>
                <li>
                    <NavLink to="/brand">Brand</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;