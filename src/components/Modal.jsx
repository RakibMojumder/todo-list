import { createPortal } from "react-dom";
import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  const ref = useRef();
  useClickOutside(ref, () => onClose());

  return createPortal(
    <div
      className={`fixed inset-0 bg-neutral-200/30 z-[9999] flex justify-center items-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div ref={ref} className="bg-white w-1/3">
        <div className="px-3 py-1 border-b flex justify-between items-center">
          <h3 className="flex-1 text-center font-medium">{title}</h3>{" "}
          <span
            onClick={() => onClose()}
            className="size-8 text-center text-xl cursor-pointer"
          >
            X
          </span>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
