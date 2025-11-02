import { DarkText } from "@/components/Text/DarkText";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
    return (
        <Link to="/">
            <DarkText className="cursor-pointer text-lg tracking-tight uppercase">
                ClothingShop
            </DarkText>
        </Link>
    );
};

export default NavbarLogo;
