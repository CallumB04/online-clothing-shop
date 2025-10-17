interface SidebarProps {
    children: React.ReactNode;
    visibleMobile?: boolean;
    visibleDesktop?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
    children,
    visibleMobile,
    visibleDesktop,
}) => {
    return (
        <aside
            className={`w-sidebar-width bg-background pt-navbar-height fixed top-0 left-0 z-10 ${visibleMobile ? "flex" : "hidden"} h-screen border-r-1 border-r-[#eaeaea] ${visibleDesktop ? "lg:flex" : "lg:hidden"}`}
        >
            <div className="flex w-full flex-col gap-6 p-4">{children}</div>
        </aside>
    );
};

export default Sidebar;
