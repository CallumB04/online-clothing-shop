import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <aside className="w-sidebar-width bg-background pt-navbar-height fixed top-0 left-0 z-10 hidden h-screen border-r-1 border-r-[#eaeaea] lg:flex">
            <div className="flex w-full flex-col gap-2 p-4">
                <SidebarItem label="New" category="new" />
                <SidebarItem label="Tops" category="tops" />
                <SidebarItem label="Bottoms" category="bottoms" />
                <SidebarItem label="Hoodies" category="hoodies" />
            </div>
        </aside>
    );
};

export default Sidebar;
