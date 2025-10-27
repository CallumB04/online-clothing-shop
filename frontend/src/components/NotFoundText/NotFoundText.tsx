import type React from "react";

interface NotFoundTextProps {
    children: React.ReactNode;
    className?: string;
}

const NotFoundText: React.FC<NotFoundTextProps> = ({ children, className }) => {
    return (
        <h2
            className={`font-primary text-light-text text-center text-2xl ${className}`}
        >
            {children}
        </h2>
    );
};

export default NotFoundText;
