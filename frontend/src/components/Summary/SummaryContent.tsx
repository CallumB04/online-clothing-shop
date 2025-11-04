interface SummaryContentProps {
    children: React.ReactNode;
}

const SummaryContent: React.FC<SummaryContentProps> = ({ children }) => {
    return (
        <div className="border-input-border flex flex-col gap-6 rounded-b border-1 p-3 text-sm">
            {children}
        </div>
    );
};

export default SummaryContent;
