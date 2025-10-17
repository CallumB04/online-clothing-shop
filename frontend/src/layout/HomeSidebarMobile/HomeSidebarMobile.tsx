import Sidebar from "../Sidebar/Sidebar";

interface HomeSidebarMobileProps {
    open?: boolean;
}

const HomeSidebarMobile: React.FC<HomeSidebarMobileProps> = ({ open }) => {
    return <Sidebar visibleMobile={open}>This is home sidebar</Sidebar>;
};

export default HomeSidebarMobile;
