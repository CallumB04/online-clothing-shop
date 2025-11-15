import DefaultSidebar from "@/layout/DefaultSidebar/DefaultSidebar";

interface CheckoutPageProps {
    isMobileSidebarOpen?: boolean;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ isMobileSidebarOpen }) => {
    return (
        <>
            <DefaultSidebar open={isMobileSidebarOpen} />
            <main className="flex flex-col gap-8 px-2 py-4 sm:px-4 sm:py-6"></main>
        </>
    );
};

export default CheckoutPage;
