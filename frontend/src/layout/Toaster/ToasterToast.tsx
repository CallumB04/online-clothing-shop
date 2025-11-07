import Icon from "@/components/Icon/Icon";
import { DarkText } from "@/components/Text/DarkText";
import { LightText } from "@/components/Text/LightText";
import { useToaster, type Toast } from "@/context/ToasterContext";

interface ToasterToastProps {
    toast: Toast;
}

const ToasterToast: React.FC<ToasterToastProps> = ({ toast }) => {
    const { removeToast } = useToaster();

    return (
        <span
            className={`border-layout-border toast-fade-in flex w-full justify-between gap-4 rounded-md border-1 bg-[#ffffffee] p-3 transition-opacity duration-500 sm:w-72 ${toast.removing ? "opacity-0" : "opacity-100"}`}
        >
            <span className="flex gap-3">
                <Icon icon="info" className="mt-0.5 text-xs select-none" />
                <div className="flex flex-col">
                    <DarkText className="text-sm">{toast.title}</DarkText>
                    <LightText className="text-sm">
                        {toast.description}
                    </LightText>
                </div>
            </span>
            {toast.closeable && (
                <Icon
                    icon="close"
                    className="hover:text-charcoal text-light-text h-max text-xs transition-colors duration-200 select-none"
                    onClick={() => removeToast(toast.id)}
                />
            )}
        </span>
    );
};

export default ToasterToast;
