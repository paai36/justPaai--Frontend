import styles from './Modal.module.scss';

export default function Modal({
    showModal,
    onClose,
    children,
}: {
    showModal: Boolean;
    onClose: Function;
    children: React.ReactNode;
}) {
    return showModal ? (
        <div className={styles.modaloverlay} onClick={() => onClose()}>
            <div className={styles.modalwrapper} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal}>{children}</div>
            </div>
        </div>
    ) : (
        <></>
    );
}
