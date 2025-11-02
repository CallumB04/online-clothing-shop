import { fetchItemById, type Item } from "@/api";
import DefaultSidebar from "@/layout/DefaultSidebar/DefaultSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFound/NotFoundPage";

interface ItemPageProps {
    isMobileSidebarOpen?: boolean;
}

const ItemPage: React.FC<ItemPageProps> = ({ isMobileSidebarOpen }) => {
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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

    // if tried to fetch item and doesnt exist, show not found page
    if (!isLoading && !item) {
        return <NotFoundPage isMobileSidebarOpen={isMobileSidebarOpen} />;
    }

    return (
        <>
            <DefaultSidebar open={isMobileSidebarOpen} />
            <main>
                <p>{item ? item.name : "no item found"}</p>
            </main>
        </>
    );
};

export default ItemPage;
