import type { Item } from "@/api";
import Popup from "../Popup/Popup";
import PopupHeader from "../Popup/PopupHeader";
import PopupButtons from "../Popup/PopupButtons";
import PrimaryButton from "../Button/PrimaryButton";
import { useEffect, useState } from "react";

// function for find size guide values based off item categories
const findSizeGuideValues = (categories: string[] | undefined) => {
    if (categories?.includes("tops")) {
        return [
            ["Size", "Chest (cm)", "Arm Length (cm)"],
            ["XS", "83", "79"],
            ["S", "91", "82"],
            ["M", "99", "84"],
            ["L", "107", "87"],
            ["XL", "115", "89"],
            ["2XL", "123", "92"],
        ];
    } else if (categories?.includes("bottoms")) {
        return [
            ["Size", "Waist (cm)", "Length (cm)"],
            ["XS", "68", "24"],
            ["S", "75", "27"],
            ["M", "80", "29"],
            ["L", "85", "31"],
            ["XL", "93", "33"],
            ["2XL", "100", "35"],
        ];
    } else if (categories?.includes("hoodies")) {
        return [
            ["Size", "Chest (cm)", "Arm Length (cm)"],
            ["XS", "83", "79"],
            ["S", "92", "82"],
            ["M", "100", "84"],
            ["L", "107", "87"],
            ["XL", "115", "89"],
            ["2XL", "122", "92"],
        ];
    } else if (categories?.includes("sweaters")) {
        return [
            ["Size", "Chest (cm)", "Arm Length (cm)"],
            ["XS", "83", "79"],
            ["S", "92", "82"],
            ["M", "100", "84"],
            ["L", "107", "87"],
            ["XL", "115", "89"],
            ["2XL", "122", "92"],
        ];
    } else return [];
};

interface SideGuidePopupProps {
    item: Item | undefined; // TODO: if undefined, show loading spinner
    closePopup: () => void;
}

const SizeGuidePopup: React.FC<SideGuidePopupProps> = ({
    item,
    closePopup,
}) => {
    // holds current items size guide values
    const [sizeGuide, setSizeGuide] = useState<string[][]>([]);

    useEffect(() => {
        const values = findSizeGuideValues(item?.categories);
        setSizeGuide(values);
    }, [item]);

    return (
        <Popup closePopup={closePopup}>
            <PopupHeader
                title="Size Guide"
                description="Please see the table below to find a size that fits you"
                closePopup={closePopup}
            />
            {/* Table of sizes */}
            <div>{sizeGuide.map((s) => s.map((g) => <p>{g}</p>))}</div>
            <PopupButtons>
                <PrimaryButton className="w-full" onClick={closePopup}>
                    Close
                </PrimaryButton>
            </PopupButtons>
        </Popup>
    );
};

export default SizeGuidePopup;
