interface ShopItemImageProps {
    imageURL: string;
}

const ShopItemImage: React.FC<ShopItemImageProps> = ({ imageURL }) => {
    return <img src={imageURL} className="aspect-[3/4] w-full rounded" />;
};

export default ShopItemImage;
