import Icon from "@/components/Icon/Icon";
import ItemImage from "@/components/ItemImage/ItemImage";
import { Link } from "react-router-dom";

interface ShopItemImageProps {
    imageURL: string;
    itemID: string;
    variationID: string;
    openItemInPreview: (e: any) => void;
}

const ShopItemImage: React.FC<ShopItemImageProps> = ({
    imageURL,
    itemID,
    variationID,
    openItemInPreview,
}) => {
    return (
        <Link
            className="relative"
            to={`/item/${itemID}${variationID !== "0" ? "?variation=" + variationID : ""}`}
        >
            <ItemImage
                src={imageURL}
                className="w-full cursor-pointer rounded-md group-hover:rounded-b-none"
            />
            {/* Preview button */}
            <div
                className="bg-background/75 hover:bg-background absolute bottom-6 left-1/2 hidden w-11/12 -translate-x-1/2 items-center justify-center gap-2 rounded-full py-2 shadow transition-colors duration-300 group-hover:flex"
                onClick={(e) => openItemInPreview(e)}
            >
                <p className="font-primary text-charcoal text-sm font-semibold">
                    Preview
                </p>
                <Icon icon="open_in_full" className="text-xs" />
            </div>
        </Link>
    );
};

export default ShopItemImage;
