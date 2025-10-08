import { Link } from "react-router-dom";

interface ShopItemImageProps {
    imageURL: string;
    itemID: string;
    variationID: string;
}

const ShopItemImage: React.FC<ShopItemImageProps> = ({
    imageURL,
    itemID,
    variationID,
}) => {
    return (
        <Link
            to={`/item/${itemID}${variationID !== "0" ? "?variation=" + variationID : ""}`}
        >
            <img
                src={imageURL}
                className="aspect-[3/4] w-full cursor-pointer rounded-md group-hover:rounded-b-none"
            />
        </Link>
    );
};

export default ShopItemImage;
