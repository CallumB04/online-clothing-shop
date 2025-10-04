interface ShopSidebarItemsProps {
    children: React.ReactNode;
}

const ShopSidebarItems: React.FC<ShopSidebarItemsProps> = ({ children }) => {
    return <div className="flex w-full flex-col gap-2">{children}</div>;
};

export default ShopSidebarItems;
