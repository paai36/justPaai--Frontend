import { useState, useEffect } from 'react';
import Modal from '../Modal';
import styles from './ReqFeature.module.scss';
interface reqFeatureInterface {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ReqFeature(
    { showModal,
        onClose, }: {
            showModal: boolean;
            onClose: Function;
        }
) {
    const [reqFeatureDetails, setreqFeatureDetails] = useState<reqFeatureInterface>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setreqFeatureDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handlereqFeature = () => {
        //HandlereqFeature
        onClose();
    }
    return (
        <Modal showModal={showModal} onClose={onClose}>
            <div className={styles.wrapper}>
                <img className={styles.close} onClick={() => onClose()} src="/close.svg" alt='X' />
                <h2>Request <span>Feature</span></h2>
                <div className={styles.main}>
                    <div>
                        <label>
                            Name
                        </label>
                        <input
                            placeholder="Your Name"
                            name="name"
                            value={reqFeatureDetails.name}
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
                            value={reqFeatureDetails.email}
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
                            value={reqFeatureDetails.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.message}>
                        <label>
                            Feature Request
                        </label>
                        <textarea
                            placeholder="Enter Your Desired Feature"
                            name="feature"
                            value={reqFeatureDetails.message}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={styles.cancel} onClick={() => onClose()}>
                        Cancel
                    </button>
                    <button className={styles.reqFeature} onClick={handlereqFeature}>
                        Send Message <img src='/toprightwhite.svg' />
                    </button>
                </div>
            </div>
        </Modal>
    )
}