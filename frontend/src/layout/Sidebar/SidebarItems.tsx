interface SidebarItemsProps {
    children: React.ReactNode;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ children }) => {
    return <div className="flex w-full flex-col gap-2">{children}</div>;
};

export default SidebarItems;
