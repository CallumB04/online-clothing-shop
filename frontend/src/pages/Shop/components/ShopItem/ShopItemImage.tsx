import Icon from "@/components/Icon/Icon";
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
            <img
                src={imageURL}
                className="aspect-[3/4] w-full cursor-pointer rounded-md group-hover:rounded-b-none"
            />
            {/* Preview button */}
            <div
                className="bg-background/75 hover:bg-background absolute bottom-6 left-1/2 hidden w-11/12 -translate-x-1/2 items-center justify-center gap-1 rounded-full py-2 shadow transition-colors duration-300 group-hover:flex"
                onClick={(e) => openItemInPreview(e)}
            >
                <p className="font-primary text-charcoal text-sm font-semibold">
                    Preview
                </p>
                <Icon icon="open_in_full" className="scale-75" />
            </div>
        </Link>
    );
};

export default ShopItemImage;
