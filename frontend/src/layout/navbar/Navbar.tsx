import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
    return (
        <nav className="fixed h-navbar-height bg-background w-screen top-0 left-0 flex items-center px-16 gap-12 border-b-1 border-b-[#eaeaea]">
            <NavbarLogo />
            <NavbarItem label="Men's" toLocation="/shop" />
            <NavbarItem label="Women's" toLocation="/shop" />
            <NavbarItem label="New Arrivals" toLocation="/shop" />
            <NavbarItem label="Offers" toLocation="/shop" />
        </nav>
    );
};

export default Navbar;
