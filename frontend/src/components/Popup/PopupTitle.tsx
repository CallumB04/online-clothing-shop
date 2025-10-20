interface PopupTitleProps {
    title: string;
}

const PopupTitle: React.FC<PopupTitleProps> = ({ title }) => {
    return (
        <h2 className="font-primary text-charcoal text-left text-xl font-bold">
            {title}
        </h2>
    );
};

export default PopupTitle;
