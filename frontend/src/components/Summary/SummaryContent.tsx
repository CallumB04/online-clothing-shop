interface SummaryContentProps {
    children: React.ReactNode;
}

const SummaryContent: React.FC<SummaryContentProps> = ({ children }) => {
    return (
        <div className="border-input-border rounded-b border-1 p-3">
            {children}
        </div>
    );
};

export default SummaryContent;
