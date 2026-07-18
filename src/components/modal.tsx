import type { ReactNode } from "react";

interface IModal {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: IModal) => {
  return (
    <>
      {open && (
        <div className="container-modal" onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()} className="modal">
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
