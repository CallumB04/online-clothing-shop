import { useToaster } from "@/context/ToasterContext";
import ToasterToast from "./ToasterToast";

const Toaster = () => {
    const { toasts } = useToaster();
    return (
        <div className="fixed right-2 bottom-2 z-50 flex w-[calc(100vw-16px)] flex-col gap-2 sm:right-4 sm:bottom-4 sm:w-max sm:gap-4">
            {toasts.map((t) => (
                <ToasterToast key={t.id} toast={t} />
            ))}
        </div>
    );
};

export default Toaster;
