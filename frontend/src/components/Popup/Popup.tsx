interface PopupProps {
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children }) => {
    return (
        <dialog className="fixed top-0 left-0 z-99 flex h-screen w-screen items-center justify-center bg-[#00000044] px-4">
            <div className="w-max rounded-lg bg-white p-4 shadow">
                {children}
            </div>
        </dialog>
    );
};

export default Popup;
