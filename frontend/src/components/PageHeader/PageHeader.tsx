interface PageHeaderProps {
    text: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
    return (
        <h1 className="font-primary text-charcoal text-lg font-semibold">
            {text}
        </h1>
    );
};

export default PageHeader;
