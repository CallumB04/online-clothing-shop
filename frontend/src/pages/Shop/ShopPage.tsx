import { useEffect, useState } from "react";
import { fetchItems, type Item } from "../../api";
import Sidebar from "../../layout/Sidebar/Sidebar";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

const eligibleGenders: string[] = ["mens", "womens"];
const eligibleCategories: string[] = ["new", "tops", "bottoms", "hoodies"];

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
            <Sidebar gender={gender} category={category} />
            <main className="lg:ml-sidebar-width">
                <h1 className="text-blue-500">Shop Page</h1>
                <div className="flex gap-4">
                    {items.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.priceGBP}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default ShopPage;
