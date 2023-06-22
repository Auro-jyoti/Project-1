import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
};

export default Header;