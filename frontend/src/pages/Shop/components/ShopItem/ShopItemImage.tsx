interface ShopItemImageProps {
    imageURL: string;
}

const ShopItemImage: React.FC<ShopItemImageProps> = ({ imageURL }) => {
    return (
        <img
            src={imageURL}
            className="aspect-[3/4] w-full cursor-pointer rounded-md group-hover:rounded-b-none"
        />
    );
};

export default ShopItemImage;
