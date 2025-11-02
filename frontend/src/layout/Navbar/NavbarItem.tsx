import { DarkText } from "@/components/Text/DarkText";
import { Link } from "react-router-dom";

interface NavbarItemProps {
    label: string;
    toLocation: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, toLocation }) => {
    return (
        <Link to={toLocation}>
            <DarkText className="font-bold">{label}</DarkText>
        </Link>
    );
};

export default NavbarItem;
