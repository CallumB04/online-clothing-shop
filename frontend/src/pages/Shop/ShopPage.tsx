import { useEffect, useState } from "react";
import { fetchItems, type Item } from "@/api";
import ShopSidebar from "@/layout/ShopSidebar/ShopSidebar";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import ShopItem from "./components/ShopItem/ShopItem";
import PageHeader from "@/components/PageHeader/PageHeader";
import { addApostropheToGender } from "@/util/gender";
import { capitalize } from "@/util/capitalize";

const eligibleGenders: string[] = ["mens", "womens"];
const eligibleCategories: string[] = [
    "new",
    "offers",
    "tops",
    "bottoms",
    "hoodies",
];

const ShopPage = () => {
    const [items, setItems] = useState<Item[]>([]);

    // Get gender from URL: /shop/<"mens"/"womens">
    const { gender } = useParams();

    // Get category from URL params: ?category=<category>
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || ""; // default to empty string if no category

    // Fetch all items from API
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            let data = await fetchItems();
            setItems(data);
        };

        fetchData();
    }, []);

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
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 2xl:grid-cols-3">
                    {items.map((item) => (
                        <ShopItem item={item} key={item.id} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default ShopPage;
