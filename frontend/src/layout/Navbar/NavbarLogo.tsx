import { Link } from "react-router-dom";

const NavbarLogo = () => {
    return (
        <Link to="/">
            <p className="text-charcoal cursor-pointer text-lg font-semibold tracking-tight uppercase">
                ClothingShop
            </p>
        </Link>
    );
};

export default NavbarLogo;
