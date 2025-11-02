import { fetchItemById, type Item } from "@/api";
import DefaultSidebar from "@/layout/DefaultSidebar/DefaultSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFound/NotFoundPage";
import ItemImage from "@/components/ItemImage/ItemImage";
import { DarkText } from "@/components/Text/DarkText";
import { LightText } from "@/components/Text/LightText";
import ShopItemVariation from "../Shop/components/ShopItem/ShopItemVariation";
import ItemPageVariation from "./components/ItemPageVariation";

interface ItemPageProps {
    isMobileSidebarOpen?: boolean;
}

const ItemPage: React.FC<ItemPageProps> = ({ isMobileSidebarOpen }) => {
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [selectedVariation, setSelectedVariation] = useState<string>(""); // selected variation id
    const [selectedSize, setSelectedSize] = useState<string>("XS");

    const { id } = useParams(); // get item id from url

    // fetching item using id in url
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (id) {
                const resp = await fetchItemById(id);

                if (resp) {
                    setItem(resp);
                }
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // reset selected variation and size when item changes
    useEffect(() => {
        if (item) {
            setSelectedVariation(item.variations[0].id);
            setSelectedSize("XS");
        }
    }, [item]);

    // if tried to fetch item and doesnt exist, show not found page
    if (!isLoading && !item) {
        return <NotFoundPage isMobileSidebarOpen={isMobileSidebarOpen} />;
    }

    return (
        <>
            <DefaultSidebar open={isMobileSidebarOpen} />
            <main className="px-4 py-8 sm:px-6 lg:py-16">
                <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 lg:flex-row lg:items-start">
                    {/* Item name and price - Small screens - Above item image */}
                    <div className="flex flex-col gap-1 lg:hidden">
                        <DarkText className="text-center text-xl font-semibold">
                            {item?.name}
                        </DarkText>
                        <LightText className="text-center text-sm">
                            £{item?.priceGBP}
                        </LightText>
                    </div>
                    <ItemImage
                        src={
                            item?.variations.find(
                                (v) => v.id === selectedVariation
                            )?.imageURL
                        }
                        className="w-full rounded-md lg:w-1/2 2xl:w-2/3"
                    />
                    <div className="flex w-full flex-col gap-8 lg:w-1/2 2xl:w-1/3">
                        {/* Item name and price - Large screens */}
                        <div className="hidden flex-col gap-1 lg:flex">
                            <DarkText className="text-2xl font-semibold">
                                {item?.name}
                            </DarkText>
                            <LightText>£{item?.priceGBP}</LightText>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Selected variation label */}
                            <span className="flex gap-1">
                                <DarkText className="font-semibold">
                                    Variation:
                                </DarkText>
                                <DarkText className="font-light">
                                    {
                                        item?.variations.find(
                                            (v) => v.id === selectedVariation
                                        )?.name
                                    }
                                </DarkText>
                            </span>
                            {/* Item Variations */}
                            <div className="flex flex-wrap gap-2">
                                {item?.variations.map((v) => (
                                    <ItemPageVariation
                                        variation={v}
                                        selected={v.id === selectedVariation}
                                        setSelected={() =>
                                            setSelectedVariation(v.id)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ItemPage;
