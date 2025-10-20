interface PopupProps {
    children: React.ReactNode;
    closePopup?: () => void; // if doesnt exist, popup cant be closed by clicking background
}

const Popup: React.FC<PopupProps> = ({ children, closePopup }) => {
    return (
        <dialog
            className="fixed top-0 left-0 z-99 flex h-screen w-screen items-center justify-center bg-[#00000044] px-4"
            onMouseDown={closePopup && closePopup}
        >
            <div
                className="w-max min-w-80 rounded-lg bg-white p-4 shadow"
                onMouseDown={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </dialog>
    );
};

export default Popup;
