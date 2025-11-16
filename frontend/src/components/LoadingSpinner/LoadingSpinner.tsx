interface LoadingSpinnerProps {
    className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
    return (
        <div
            className={`border-light-text border-t-charcoal size-8 animate-spin rounded-full border-2 ${className}`}
        ></div>
    );
};

export default LoadingSpinner;
