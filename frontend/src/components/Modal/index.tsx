'use client';

import { useRouter } from 'next/navigation';
import { JSX, useEffect } from 'react';

import styles from './style.module.scss';

interface IModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: JSX.Element;
}

const Modal = (props: IModalProps) => {
    const { isOpen, onClose, children } = props;
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button
                    className={styles.closeButton}
                    onClick={() => {
                        router.back();
                    }}
                >
                    ×
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
