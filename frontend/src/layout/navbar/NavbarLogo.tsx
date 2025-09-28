import { Link } from "react-router-dom";

const NavbarLogo = () => {
    return (
        <Link to="/">
            <p className="text-charcoal font-semibold cursor-pointer text-lg uppercase tracking-tight">
                ClothingShop
            </p>
        </Link>
    );
};

export default NavbarLogo;
