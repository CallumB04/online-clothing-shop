import Sidebar from "../Sidebar/Sidebar";

interface HomeSidebarProps {
    open?: boolean;
}

const HomeSidebar: React.FC<HomeSidebarProps> = ({ open }) => {
    return <Sidebar visibleMobile={open}>This is home sidebar</Sidebar>;
};

export default HomeSidebar;
