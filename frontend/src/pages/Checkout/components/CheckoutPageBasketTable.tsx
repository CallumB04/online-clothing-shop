import { DarkText } from "@/components/Text/DarkText";
import { useBasket } from "@/context/BasketContext";
import CheckoutPageBasketTableRow from "./CheckoutPageBasketTableRow";
import Divider from "@/components/Divider/Divider";

const CheckoutPageBasketTable = () => {
    const { basket } = useBasket();

    return (
        <div className="flex flex-col gap-2">
            {/* Table Header */}
            <span className="flex gap-4 pl-2 text-sm font-semibold">
                <DarkText className="w-full">Item</DarkText>
                <DarkText className="w-80">Size</DarkText>
                <DarkText className="w-80">Quantity</DarkText>
                <DarkText className="w-52 text-center">Total</DarkText>
                {/* Empty span, column for item removal, but no header */}
                <span className="w-24"></span>
            </span>
            <Divider />
            {/* Table Rows */}
            {basket.map((bi) => (
                <CheckoutPageBasketTableRow
                    key={bi.itemID + bi.variationID + bi.size}
                    basketItem={bi}
                />
            ))}
        </div>
    );
};

export default CheckoutPageBasketTable;
