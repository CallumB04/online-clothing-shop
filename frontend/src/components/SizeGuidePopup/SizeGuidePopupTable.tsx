import SizeGuidePopupTableRow from "./SizeGuidePopupTableRow";

interface SizeGuidePopupTableProps {
    values: string[][] | undefined;
}

const SizeGuidePopupTable: React.FC<SizeGuidePopupTableProps> = ({
    values,
}) => {
    return (
        <div className="flex flex-col">
            {values?.map((col, index) => (
                <SizeGuidePopupTableRow
                    values={col}
                    index={index}
                ></SizeGuidePopupTableRow>
            ))}
        </div>
    );
};

export default SizeGuidePopupTable;
