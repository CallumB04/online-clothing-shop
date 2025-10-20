import { Link } from "react-router-dom";
import UIButton from "@/components/Button/UIButton";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Clickable from "@/components/Clickable/Clickable";
import HomeSidebar from "@/layout/HomeSidebar/HomeSidebar";

interface HomePageProps {
    isMobileSidebarOpen?: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isMobileSidebarOpen }) => {
    return (
        <>
            <HomeSidebar open={isMobileSidebarOpen} />
            <main className="flex flex-col gap-4 px-2 py-4 sm:px-4 sm:py-6">
                <h1 className="text-red-500">Home Page</h1>
                <Link to="/shop">
                    <PrimaryButton>Go to Shop</PrimaryButton>
                </Link>
                <UIButton onClick={() => alert("Hello")}>Buy Now</UIButton>
                <Clickable onClick={() => alert("Click")}>
                    This is a clickable
                </Clickable>
            </main>
        </>
    );
};

export default HomePage;
