import { Link } from "react-router-dom";

interface NavbarItemProps {
    label: string;
    toLocation: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, toLocation }) => {
    return (
        <Link to={toLocation}>
            <p className="text-charcoal font-primary font-bold">{label}</p>
        </Link>
    );
};

export default NavbarItem;
