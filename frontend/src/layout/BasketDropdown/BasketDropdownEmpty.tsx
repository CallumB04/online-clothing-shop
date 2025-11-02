import { LightText } from "@/components/Text/LightText";

const BasketDropdownEmpty = () => {
    return (
        <LightText className="border-b-layout-border mt-4 border-b-1 pb-4 text-center text-sm">
            There are no items in your basket.
        </LightText>
    );
};

export default BasketDropdownEmpty;
