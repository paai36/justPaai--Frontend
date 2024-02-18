import { useState, useEffect } from 'react';
import Modal from '../Modal';
import styles from './ReportModal.module.scss';
interface ReportInterface {
    name: string;
    email: string;
    phone: string;
    error: string;
}

export default function ReportModal(
    { showModal,
        onClose, }: {
            showModal: boolean;
            onClose: Function;
        }
) {
    const [reportDetails, setReportDetails] = useState<ReportInterface>({
        name: '',
        email: '',
        phone: '',
        error: ''
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setReportDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleReport = () => {
        //HandleReport
        onClose();
    }
    return (
        <Modal showModal={showModal} onClose={onClose}>
            <div className={styles.wrapper}>
                <img className={styles.close} onClick={() => onClose()} src="/close.svg" alt='X' />
                <h2>Report <span>Error</span></h2>
                <div className={styles.main}>
                    <div>
                        <label>
                            Name
                        </label>
                        <input
                            placeholder="Your Name"
                            name="name"
                            value={reportDetails.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input
                            placeholder="Your Official Email"
                            name="email"
                            value={reportDetails.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>
                            Phone
                        </label>
                        <input
                            placeholder="Your Phone Number"
                            name="phone"
                            value={reportDetails.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.error}>
                        <label>
                            Error Details
                        </label>
                        <textarea
                            placeholder="Enter Your Error Description"
                            name="error"
                            value={reportDetails.error}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={styles.cancel} onClick={() => onClose()}>
                        Cancel
                    </button>
                    <button className={styles.report} onClick={handleReport}>
                        Report The Error <img src='/toprightwhite.svg' />
                    </button>
                </div>
            </div>
        </Modal>
    )
}