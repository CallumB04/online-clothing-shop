import {
    type BasketItem,
    eligibleSizes,
    fetchItemById,
    type Item,
} from "@/api";
import DefaultSidebar from "@/layout/DefaultSidebar/DefaultSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFound/NotFoundPage";
import ItemImage from "@/components/ItemImage/ItemImage";
import { DarkText } from "@/components/Text/DarkText";
import { LightText } from "@/components/Text/LightText";
import ItemPageVariation from "./components/ItemPageVariation";
import ItemPageSize from "./components/ItemPageSize";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { useBasket } from "@/context/BasketContext";
import SecondaryButton from "@/components/Button/SecondaryButton";
import Clickable from "@/components/Clickable/Clickable";
import Icon from "@/components/Icon/Icon";

interface ItemPageProps {
    isMobileSidebarOpen?: boolean;
}

const ItemPage: React.FC<ItemPageProps> = ({ isMobileSidebarOpen }) => {
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [selectedVariation, setSelectedVariation] = useState<string>(""); // selected variation id
    const [selectedSize, setSelectedSize] = useState<string>("XS");

    // basket item corresponding to current item, variation and size, if exists
    const [basketItem, setBasketItem] = useState<BasketItem | undefined>(
        undefined
    );

    const { basket, addBasketItem, removeBasketItem } = useBasket();

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

    // search for item in basket whenever item, variation or size changes
    // if not found, set state to undefined
    useEffect(() => {
        const bi = basket.find(
            (i) =>
                i.itemID === item?.id &&
                i.variationID === selectedVariation &&
                i.size === selectedSize
        );

        setBasketItem(bi);
    });

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
                        <DarkText className="text-center text-xl font-semibold sm:text-2xl">
                            {item?.name}
                        </DarkText>
                        <LightText className="text-center text-sm sm:text-base">
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
                    <div className="flex w-full flex-col gap-10 lg:w-1/2 2xl:w-1/3">
                        {/* Item name and price - Large screens */}
                        <div className="hidden flex-col gap-1 lg:flex">
                            <DarkText className="text-2xl font-semibold">
                                {item?.name}
                            </DarkText>
                            <span className="flex gap-2">
                                <LightText
                                    className={
                                        item?.discountPriceGBP
                                            ? "line-through"
                                            : ""
                                    }
                                >
                                    £{item?.priceGBP}
                                </LightText>
                                {item?.discountPriceGBP && (
                                    <LightText className="text-discount-text!">
                                        £{item.discountPriceGBP}
                                    </LightText>
                                )}
                            </span>
                        </div>
                        {/* Variations label and selections */}
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
                        {/* Item Sizes */}
                        <div className="flex flex-col gap-4">
                            <DarkText className="font-semibold">Size:</DarkText>

                            <div className="flex max-w-96 flex-wrap justify-between gap-2">
                                {eligibleSizes.map((s) => (
                                    <ItemPageSize
                                        size={s}
                                        selected={s === selectedSize}
                                        setSelected={() => setSelectedSize(s)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-end gap-2">
                            {basketItem ? (
                                <SecondaryButton
                                    onClick={() =>
                                        removeBasketItem({
                                            itemID: item!.id,
                                            variationID: selectedVariation,
                                            size: selectedSize,
                                            quantity: basketItem?.quantity || 1,
                                        })
                                    }
                                    className="w-full"
                                >
                                    Remove from Basket
                                </SecondaryButton>
                            ) : (
                                <PrimaryButton
                                    onClick={() =>
                                        addBasketItem({
                                            itemID: item!.id,
                                            variationID: selectedVariation,
                                            size: selectedSize,
                                            quantity: 1,
                                        })
                                    }
                                    className="w-full"
                                >
                                    Add to Basket
                                </PrimaryButton>
                            )}
                            {/* Quanity text, when item in basket */}
                            {basketItem && (
                                <span className="flex items-center gap-3 rounded-full bg-white p-1 shadow">
                                    <Clickable
                                        onClick={() =>
                                            removeBasketItem({
                                                itemID: item!.id,
                                                variationID: selectedVariation,
                                                size: selectedSize,
                                                quantity: 1,
                                            })
                                        }
                                        className="rounded-full!"
                                    >
                                        <Icon
                                            icon="remove"
                                            className="text-sm"
                                        />
                                    </Clickable>
                                    <span className="flex items-center gap-1">
                                        <DarkText className="font-semibold">
                                            {basketItem.quantity}
                                        </DarkText>
                                    </span>
                                    <Clickable
                                        onClick={() =>
                                            addBasketItem({
                                                itemID: item!.id,
                                                variationID: selectedVariation,
                                                size: selectedSize,
                                                quantity: 1,
                                            })
                                        }
                                        className="rounded-full!"
                                    >
                                        <Icon icon="add" className="text-sm" />
                                    </Clickable>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ItemPage;
