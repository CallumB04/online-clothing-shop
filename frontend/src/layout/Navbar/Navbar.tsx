import { useEffect } from "react";
import Icon from "../../components/Icon/Icon";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useBasket } from "../../context/BasketContext";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import Clickable from "../../components/Clickable/Clickable";

const Navbar = () => {
    const { basket, addBasketItem } = useBasket();

    useEffect(() => {
        addBasketItem({
            itemID: "0",
            variationID: "0",
            size: "M",
            quantity: 1,
        });
    }, []);

    return (
        <nav className="h-navbar-height bg-background fixed top-0 left-0 flex w-screen items-center justify-between border-b-1 border-b-[#eaeaea] px-4 xl:px-16">
            {/* Left side (Big screen): Logo and Navigation */}
            <span className="hidden items-center gap-12 lg:flex">
                <NavbarLogo />
                <NavbarItem label="Men's" toLocation="/shop" />
                <NavbarItem label="Women's" toLocation="/shop" />
                <NavbarItem label="New Arrivals" toLocation="/shop" />
                <NavbarItem label="Offers" toLocation="/shop" />
            </span>

            {/* Left Side (Small screen) */}
            <Clickable
                onClick={() => alert("Opening Phone Menu...")}
                className="lg:hidden"
            >
                <Icon icon="menu" />
            </Clickable>

            {/* Center (Small screen) */}
            <span className="ml-2 lg:hidden">
                <NavbarLogo />
            </span>

            {/* Right side: Search Bar and Basket */}
            <span className="flex items-center gap-6">
                {/* Search bar hidden on Small screen */}
                <SearchBar
                    onSearch={() => alert("Searching...")}
                    className="hidden lg:flex"
                />
                <Clickable
                    onClick={() => alert("Opening basket...")}
                    className="px-2"
                >
                    <Icon icon="shopping_bag" />
                    <p className="text-charcoal font-primary">
                        {basket.length}
                    </p>
                </Clickable>
            </span>
        </nav>
    );
};

export default Navbar;
