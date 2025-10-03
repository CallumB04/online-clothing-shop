import type { Item } from "../../../../api";
import ShopItemImage from "./ShopItemImage";
import ShopItemName from "./ShopItemName";
import ShopItemPrice from "./ShopItemPrice";

interface ShopItemProps {
    item: Item;
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    return (
        <div
            key={item.id}
            className="group flex cursor-pointer flex-col gap-2 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
            <ShopItemImage imageURL={item.variations[0].imageURL} />
            <div className="flex flex-col gap-1 px-3 py-4 pt-0">
                <ShopItemName name={item.name} />
                <ShopItemPrice price={item.priceGBP} />
            </div>
        </div>
    );
};

export default ShopItem;
