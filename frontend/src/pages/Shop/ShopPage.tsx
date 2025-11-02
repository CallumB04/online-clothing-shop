import { useEffect, useState } from "react";
import {
    eligibleCategories,
    eligibleGenders,
    fetchItems,
    type Item,
} from "@/api";
import ShopSidebar from "@/layout/ShopSidebar/ShopSidebar";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import ShopItem from "./components/ShopItem/ShopItem";
import PageHeader from "@/components/PageHeader/PageHeader";
import { addApostropheToGender } from "@/util/gender";
import { capitalize } from "@/util/capitalize";
import PreviewPopup from "./components/PreviewPopup/PreviewPopup";
import NotFoundText from "@/components/NotFoundText/NotFoundText";
import RedirectButton from "@/components/Button/RedirectButton";

interface ShopPageProps {
    isMobileSidebarOpen: boolean;
}

const ShopPage: React.FC<ShopPageProps> = ({ isMobileSidebarOpen }) => {
    const [items, setItems] = useState<Item[]>([]);

    // Popup visibility states
    const [isPreviewPopupOpen, setIsPreviewPopupOpen] =
        useState<boolean>(false);
    const [currentPreviewItem, setCurrentPreviewItem] = useState<Item | null>(
        null
    );

    // Get gender from URL: /shop/<"mens"/"womens">
    const { gender } = useParams();

    // Get category from URL params: ?category=<category>
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || ""; // default to empty string if no category

    // Fetch all items from API
    // Filters based on gender, if selected
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            let data = await fetchItems(
                gender && gender[0].toUpperCase(),
                category && category
            );
            setItems(data);
        };

        fetchData();
    }, [gender, category]);

    // If user attempts to manually alter url, redirected back to root shop page
    if (gender && !eligibleGenders.includes(gender)) {
        return <Navigate to="/shop" replace />; // replace - removes from history in browser
    }

    // If user has incorrect category in url, remove param entirely
    if (category && !eligibleCategories.includes(category)) {
        return <Navigate to={`/shop${gender ? "/" + gender : ""}`} replace />;
    }

    return (
        <>
            <ShopSidebar
                isMobileSidebarOpen={isMobileSidebarOpen}
                gender={gender}
                category={category}
                eligibleCategories={eligibleCategories}
            />
            <main className="lg:ml-sidebar-width gap flex flex-col gap-8 px-4 py-6 sm:py-10 lg:px-8">
                <PageHeader
                    text={
                        (gender ? addApostropheToGender(gender) : "All") +
                        " " +
                        (category ? capitalize(category) : "Clothing")
                    }
                />
                {items && items.length > 0 ? (
                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 2xl:grid-cols-3">
                        {items.map((item) => (
                            <ShopItem
                                key={item.id}
                                item={item}
                                setCurrentPreviewItem={setCurrentPreviewItem}
                                setIsPreviewPopupOpen={setIsPreviewPopupOpen}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4">
                        <NotFoundText>
                            Sorry! We couldn't find any items.
                        </NotFoundText>
                        <RedirectButton to="/shop" className="text-sm">
                            Show all items
                        </RedirectButton>
                    </div>
                )}
            </main>

            {/* Popups */}
            {isPreviewPopupOpen && (
                <PreviewPopup
                    item={currentPreviewItem}
                    closePopup={() => setIsPreviewPopupOpen(false)}
                />
            )}
        </>
    );
};

export default ShopPage;
