interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <aside className="w-sidebar-width bg-background pt-navbar-height fixed top-0 left-0 z-10 hidden h-screen border-r-1 border-r-[#eaeaea] lg:flex">
            <div className="flex w-full flex-col gap-6 p-4">{children}</div>
        </aside>
    );
};

export default Sidebar;
