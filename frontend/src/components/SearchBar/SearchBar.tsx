import { useState } from "react";

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
            <i
                className={`material-symbols-outlined ${onSearch && "cursor-pointer"}`}
                onClick={() => onSearch && onSearch(query)}
            >
                search
            </i>
            <input
                type="search"
                placeholder={placeholder}
                className="font-primary text-sm outline-none"
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleEnterPress}
            />
        </span>
    );
};

export default SearchBar;
