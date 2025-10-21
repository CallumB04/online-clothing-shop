import { useState } from "react";
import Icon from "../Icon/Icon";

interface SearchBarProps {
    fullWidth?: boolean;
    placeholder?: string;
    className?: string;
    onSearch?: (query: string) => void;
    onQueryChange?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    fullWidth = false,
    placeholder = "Search",
    className,
    onSearch,
    onQueryChange,
}) => {
    const [query, setQuery] = useState("");

    const handleQueryChange = (newQuery: string) => {
        setQuery(newQuery); // update local state
        if (onQueryChange) {
            onQueryChange(newQuery); // call prop function to allow for searching as you type
        }
    };

    // allow for enter key to also trigger search
    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onSearch && e.key === "Enter") {
            onSearch(query);
        }
    };

    return (
        <span
            className={`border-input-border text-charcoal flex h-10 items-center gap-2 rounded-full border-1 px-4 ${fullWidth && "w-full"} ${className}`}
        >
            <Icon
                icon="search"
                className="text-sm"
                onClick={() => onSearch && onSearch(query)}
            />
            <input
                type="search"
                placeholder={placeholder}
                className={`font-primary text-sm outline-none ${fullWidth ? "w-full" : "w-56"}`}
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleEnterPress}
            />
        </span>
    );
};

export default SearchBar;
