import Icon from "@/components/Icon/Icon";
import { DarkText } from "@/components/Text/DarkText";
import { LightText } from "@/components/Text/LightText";
import { ToastType, useToaster, type Toast } from "@/context/ToasterContext";
import { useMemo } from "react";

interface ToasterToastProps {
    toast: Toast;
}

const ToasterToast: React.FC<ToasterToastProps> = ({ toast }) => {
    const { removeToast } = useToaster();

    const toastStyles = useMemo(() => {
        switch (toast.type) {
            case ToastType.Success:
                return {
                    bgColor: "bg-green-50",
                    titleColor: "text-green-700!",
                    descColor: "text-green-600!",
                    icon: "check_circle",
                };
            case ToastType.Error:
                return {
                    bgColor: "bg-red-50",
                    titleColor: "text-red-700!",
                    descColor: "text-red-600!",
                    icon: "error",
                };
            case ToastType.Info:
                return {
                    bgColor: "bg-white",
                    descColor: "",
                    titleColor: "",
                    icon: "info",
                };
        }
    }, [toast]);

    return (
        <span
            className={`toast-fade-in flex w-full justify-between gap-4 rounded-md p-3 shadow-md transition-opacity duration-500 sm:w-72 ${toast.removing ? "opacity-0" : "opacity-100"} ${toastStyles.bgColor}`}
        >
            <span className="flex gap-3">
                <Icon
                    icon={toastStyles.icon}
                    className={`mt-0.5 text-xs select-none ${toastStyles.titleColor}`}
                />
                <div className="flex flex-col">
                    <DarkText className={`text-sm ${toastStyles.titleColor}`}>
                        {toast.title}
                    </DarkText>
                    <LightText
                        className={`text-sm font-light ${toastStyles.descColor}`}
                    >
                        {toast.description}
                    </LightText>
                </div>
            </span>
            {toast.timeout === 0 && (
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
