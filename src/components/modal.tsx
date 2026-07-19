import type { ReactNode } from "react";

interface IModal {
  children: ReactNode;
  open: boolean;
  title: string;
  onClose: () => void;
}

const Modal = ({ children, open, onClose, title }: IModal) => {
  return (
    <>
      {open && (
        <div className="container-modal" onClick={onClose}>
          <div
            role="dialog"
            aria-modal={true}
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
            className="modal"
          >
            <h2 id="modal-title">{title}</h2>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
