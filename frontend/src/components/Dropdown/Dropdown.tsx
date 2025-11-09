import { DarkText } from "../Text/DarkText";

type DropdownEntry = {
    value: string;
    display: string;
};

interface DropdownProps {
    label?: string;
    options: DropdownEntry[];
    defaultValue?: string;
    className?: string;
    fullWidth?: boolean;
    mobileFullWidth?: boolean;
    onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
    label,
    options,
    defaultValue,
    className,
    fullWidth,
    mobileFullWidth,
    onChange,
}) => {
    return (
        <div
            className={`flex flex-col gap-1 ${fullWidth && "w-full"} ${mobileFullWidth && "w-full sm:w-max"}`}
        >
            {label && (
                <DarkText className="pl-1 text-xs font-semibold">
                    {label}
                </DarkText>
            )}
            <select
                className={`border-input-border text-charcoal font-primary flex h-10 rounded-md border-1 pr-8 pl-4 text-sm outline-none ${className} ${fullWidth && "w-full"} ${mobileFullWidth && "w-full sm:w-max"}`}
                onChange={(e) => onChange && onChange(e.target.value)}
                defaultValue={defaultValue}
            >
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.display}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
