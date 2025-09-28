import { useEffect } from "react";
import Icon from "../../components/Icon/Icon";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useBasket } from "../../context/BasketContext";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";

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
        <nav className="h-navbar-height bg-background fixed top-0 left-0 flex w-screen items-center justify-between border-b-1 border-b-[#eaeaea] px-16">
            {/* Left side: Logo and Navigation */}
            <span className="flex items-center gap-12">
                <NavbarLogo />
                <NavbarItem label="Men's" toLocation="/shop" />
                <NavbarItem label="Women's" toLocation="/shop" />
                <NavbarItem label="New Arrivals" toLocation="/shop" />
                <NavbarItem label="Offers" toLocation="/shop" />
            </span>

            {/* Right side: Search Bar and Basket */}
            <span className="flex items-center gap-6">
                <SearchBar
                    onSearch={() => alert("Searching...")}
                    onQueryChange={(query) => console.log(query)}
                />
                <span className="clickable-icon-hovered flex items-center gap-1 px-2 py-1">
                    <Icon icon="shopping_bag" />
                    <p className="text-charcoal font-primary">
                        {basket.length}
                    </p>
                </span>
            </span>
        </nav>
    );
};

export default Navbar;
