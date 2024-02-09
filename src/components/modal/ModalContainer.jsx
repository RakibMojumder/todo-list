import { RxCross2 } from "react-icons/rx";

const ModalContainer = ({ title, handleClose, children }) => {
  return (
    <div className="fixed inset-0 bg-neutral-500/30 z-[9999] flex justify-center items-center">
      <div className="bg-[#1C1D24] text-white w-2/6">
        <div className="px-3 py-2.5 border-b border-primary/50 flex justify-between items-center">
          <h3 className="flex-1 text-center font-medium">{title}</h3>
          <RxCross2
            onClick={handleClose}
            className="size-6 text-center cursor-pointer"
          />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
