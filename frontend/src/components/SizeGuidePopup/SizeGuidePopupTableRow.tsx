import { DarkText } from "../Text/DarkText";

interface SizeGuidePopupTableRowProps {
    values: string[];
    index: number;
}

const SizeGuidePopupTableRow: React.FC<SizeGuidePopupTableRowProps> = ({
    values,
    index,
}) => {
    return (
        <span
            className={`border-input-border grid w-full grid-cols-[2fr_3fr_3fr] border-1 border-b-0 last:border-b-1 ${index % 2 == 0 ? "bg-layout-border" : "bg-background"} ${index === 0 && "font-semibold"}`}
        >
            {values.map((v) => (
                <DarkText className="border-input-border border-r-1 px-12 py-2 text-center text-sm last:border-r-0">
                    {v}
                </DarkText>
            ))}
        </span>
    );
};

export default SizeGuidePopupTableRow;
