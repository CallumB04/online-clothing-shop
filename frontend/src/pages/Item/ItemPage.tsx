import { fetchItemById, type Item } from "@/api";
import DefaultSidebar from "@/layout/DefaultSidebar/DefaultSidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ItemPageProps {
    isMobileSidebarOpen?: boolean;
}

const ItemPage: React.FC<ItemPageProps> = ({ isMobileSidebarOpen }) => {
    const [item, setItem] = useState<Item | undefined>(undefined);

    const { id } = useParams(); // get item id from url

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const resp = await fetchItemById(id);

                if (resp) {
                    setItem(resp);
                }
            }
        };

        fetchData();
    }, [id]);

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
