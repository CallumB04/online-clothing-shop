import { createContext, useContext, useState } from "react";

export enum ToastType {
    Success,
    Info,
    Error,
}

export type Toast = {
    id: number;
    title: string;
    description: string;
    type: ToastType;
    timeout: number;
    removing?: boolean; // final 500ms of life, fading from toaster before removal
};

type ToasterContextType = {
    toasts: Toast[];
    addToast: (
        title: string,
        description: string,
        type: ToastType,
        timeout: number // time (in ms) until toast is removed automatically. 0 for permanent
    ) => void;
    removeToast: (id: number) => void;
    clearToaster: () => void;
};

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export const useToaster = () => {
    const context = useContext(ToasterContext);
    if (!context) {
        throw new Error("useToaster must be used within a ToasterProvider");
    }

    return context;
};

export const ToasterProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [toastsCounter, setToastsCounter] = useState<number>(0); // lifetime toasts counter, for assigning unique id

    const addToast = (
        title: string,
        description: string,
        type: ToastType,
        timeout: number
    ) => {
        // create toast and assign id from lifetime counter
        const toast: Toast = {
            id: toastsCounter,
            title: title,
            description: description,
            type: type,
            timeout: timeout,
        };

        setToasts((currentToasts) => [...currentToasts, toast]); // add toast to state
        setToastsCounter((prev) => prev + 1); // increment overall lifetime toasts

        // remove toast after timeout, unless permanent
        if (timeout > 0) {
            setTimeout(
                () => {
                    removeToast(toast.id, true);
                },
                timeout ? timeout - 500 : 0
            ); // schedule 500ms before timeout, will fadeout first before deleting
        }
    };

    const removeToast = (id: number, auto?: boolean) => {
        if (auto) {
            // set removing of toast to true, and fade out
            setToasts((previousToasts) =>
                previousToasts.map((t) =>
                    t.id === id ? { ...t, removing: true } : t
                )
            );
            // remove toast from toaster in 500ms after fadeout
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, 500);
        } else {
            // remove instantly if manual
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }
    };

    const clearToaster = () => {
        setToasts([]);
    };

    return (
        <ToasterContext.Provider
            value={{ toasts, addToast, removeToast, clearToaster }}
        >
            {children}
        </ToasterContext.Provider>
    );
};
