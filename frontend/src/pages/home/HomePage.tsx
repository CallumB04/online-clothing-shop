import { Link } from "react-router-dom";
import UIButton from "../../components/button/UIButton";
import PrimaryButton from "../../components/button/PrimaryButton";

const HomePage = () => {
    return (
        <main>
            <h1 className="text-red-500">Home Page</h1>
            <Link to="/shop">
                <PrimaryButton>Go to Shop</PrimaryButton>
            </Link>
            <UIButton onClick={() => alert("Hello")}>Buy Now</UIButton>
        </main>
    );
};

export default HomePage;
