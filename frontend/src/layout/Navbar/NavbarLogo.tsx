import { Link } from "react-router-dom";

const NavbarLogo = () => {
    return (
        <Link to="/">
            <p className="text-charcoal font-primary cursor-pointer text-lg tracking-tight uppercase">
                ClothingShop
            </p>
        </Link>
    );
};

export default NavbarLogo;
