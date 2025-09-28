import { useEffect, useState } from "react";
import { fetchItems, type Item } from "../../api";

const ShopPage = () => {
    const [items, setItems] = useState<Item[]>([]);

    // Fetch all items from API
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            let data = await fetchItems();
            setItems(data);
        };

        fetchData();
    }, []);

    return (
        <main>
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
    );
};

export default ShopPage;
