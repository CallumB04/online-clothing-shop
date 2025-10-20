import Sidebar from "../Sidebar/Sidebar";
import SidebarItems from "../Sidebar/SidebarItems";
import SidebarItem from "./SidebarItem";

interface HomeSidebarProps {
    open?: boolean;
}

const HomeSidebar: React.FC<HomeSidebarProps> = ({ open }) => {
    return (
        <Sidebar visibleMobile={open}>
            <SidebarItems>
                <SidebarItem label="Home" to="/" icon="home" />
                <SidebarItem label="Browse" to="/shop" icon="apparel" />
                <SidebarItem
                    label="Offers"
                    to="/shop?category=offers"
                    icon="shoppingmode"
                />
                <SidebarItem
                    label="New Arrivals"
                    to="/shop?category=new"
                    icon="acute"
                />
            </SidebarItems>
            <SidebarItems>
                <SidebarItem label="Men's" to="/shop/mens" icon="male" />
                <SidebarItem label="Women's" to="/shop/womens" icon="female" />
            </SidebarItems>
        </Sidebar>
    );
};

export default HomeSidebar;
