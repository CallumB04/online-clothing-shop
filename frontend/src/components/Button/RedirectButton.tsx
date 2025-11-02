import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

interface RedirectButtonProps {
    children: React.ReactNode;
    to: string;
    disabled?: boolean;
    className?: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({
    children,
    to,
    disabled,
    className,
}) => {
    return (
        <Link to={to} className={className}>
            <PrimaryButton disabled={disabled} className={className}>
                {children}
            </PrimaryButton>
        </Link>
    );
};

export default RedirectButton;
