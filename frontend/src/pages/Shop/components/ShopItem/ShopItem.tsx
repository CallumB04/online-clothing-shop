import type { Item } from "../../../../api";
import ShopItemImage from "./ShopItemImage";
import ShopItemName from "./ShopItemName";
import ShopItemPrice from "./ShopItemPrice";

interface ShopItemProps {
    item: Item;
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    return (
        <div key={item.id} className="flex flex-col gap-2">
            <ShopItemImage imageURL={item.variations[0].imageURL} />
            <ShopItemName name={item.name} />
            <ShopItemPrice price={item.priceGBP} />
        </div>
    );
};

export default ShopItem;
