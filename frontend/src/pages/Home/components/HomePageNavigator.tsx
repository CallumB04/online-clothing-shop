import ItemImage from "@/components/ItemImage/ItemImage";
import { LightText } from "@/components/Text/LightText";
import { Link } from "react-router-dom";

interface HomePageNavigatorProps {
    to: string;
    src: string; // image source
    text: string; // SHOP <text>
}

const HomePageNavigator: React.FC<HomePageNavigatorProps> = ({
    to,
    src,
    text,
}) => {
    return (
        <Link
            to={to}
            className="group relative w-full overflow-hidden rounded md:w-1/2"
        >
            <ItemImage
                src={src}
                className="w-full object-cover transition-transform duration-400 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-0 flex w-full flex-col text-center">
                <LightText className="tracking-wide text-white! uppercase">
                    Shop
                </LightText>
                <LightText className="text-6xl tracking-wide text-white! uppercase">
                    {text}
                </LightText>
            </div>
        </Link>
    );
};

export default HomePageNavigator;
