import { useEffect } from 'react';

export const useModalOutClick = (modalRef, setModalOpen) => {
    useEffect(() => {
        const modalOutClick = (e) => {
            if(!modalRef.current.contains(e.target)) {
                setModalOpen(false);
            }
        };

        window.addEventListener("mousedown", modalOutClick);

        return () => window.removeEventListener('mousedown', modalOutClick);
    }, []);
};