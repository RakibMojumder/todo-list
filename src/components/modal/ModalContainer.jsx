import { RxCross2 } from "react-icons/rx";
import { motion as m } from "framer-motion";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const ModalContainer = ({ title, handleClose, children }) => {
  const ref = useRef();
  useClickOutside(ref, handleClose);

  return (
    <m.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      className="fixed inset-0 bg-neutral-500/30 z-[9999] flex justify-center items-center p-5"
    >
      <m.div
        ref={ref}
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
        exit={{ y: 100, opacity: 0, transition: { duration: 0.3 } }}
        className="bg-[#1C1D24] text-white lg:w-2/6 rounded-lg"
      >
        <div className="px-3 py-2.5 border-b border-primary/50 flex justify-between items-center">
          <h3 className="flex-1 text-center font-medium">{title}</h3>
          <RxCross2
            onClick={handleClose}
            className="size-6 text-center cursor-pointer"
          />
        </div>
        <div className="sm:p-5">{children}</div>
      </m.div>
    </m.div>
  );
};

export default ModalContainer;
