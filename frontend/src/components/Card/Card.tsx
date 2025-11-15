interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`rounded-md bg-white p-4 shadow ${className}`}>
            {children}
        </div>
    );
};

export default Card;
