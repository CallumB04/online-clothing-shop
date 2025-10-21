interface ItemImageProps {
    src: string | undefined;
    alt?: string;
    className?: string;
}

const ItemImage: React.FC<ItemImageProps> = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            className={"aspect-[3/4]" + " " + className}
            alt={alt && alt}
        />
    );
};

export default ItemImage;
