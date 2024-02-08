import { useEffect } from "react";

const useClickOutside = (ref, fn) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                fn()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [fn, ref])
};

export default useClickOutside;