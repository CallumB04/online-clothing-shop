import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
    return (
        <nav className="h-navbar-height bg-background fixed top-0 left-0 flex w-screen items-center gap-12 border-b-1 border-b-[#eaeaea] px-16">
            <NavbarLogo />
            <NavbarItem label="Men's" toLocation="/shop" />
            <NavbarItem label="Women's" toLocation="/shop" />
            <NavbarItem label="New Arrivals" toLocation="/shop" />
            <NavbarItem label="Offers" toLocation="/shop" />
        </nav>
    );
};

export default Navbar;
