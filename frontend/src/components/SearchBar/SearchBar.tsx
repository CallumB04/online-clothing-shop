import { useState } from "react";

interface SearchBarProps {
    fullWidth?: boolean;
    placeholder?: string;
    onSearch?: (query: string) => void;
    onQueryChange?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    fullWidth = false,
    placeholder = "Search",
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

    return (
        <span
            className={`border-input-border text-charcoal flex h-10 items-center gap-2 rounded-full border-1 px-4 ${fullWidth && "w-full"}`}
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
            />
        </span>
    );
};

export default SearchBar;
