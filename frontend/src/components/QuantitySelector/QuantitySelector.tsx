import Clickable from "../Clickable/Clickable";
import Icon from "../Icon/Icon";
import { DarkText } from "../Text/DarkText";

interface QuantitySelectorProps {
    onIncrement: () => void;
    onDecrement: () => void;
    quantity: number;
    className?: string;
    iconClassName?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    onIncrement,
    onDecrement,
    quantity,
    className,
    iconClassName,
}) => {
    return (
        <span
            className={`flex items-center gap-3 rounded-full bg-white p-1 shadow ${className}`}
        >
            <Clickable onClick={onDecrement} className="rounded-full!">
                <Icon icon="remove" className={iconClassName} />
            </Clickable>
            <span className="flex items-center gap-1">
                <DarkText className="font-semibold">{quantity}</DarkText>
            </span>
            <Clickable onClick={onIncrement} className="rounded-full!">
                <Icon icon="add" className={iconClassName} />
            </Clickable>
        </span>
    );
};

export default QuantitySelector;
