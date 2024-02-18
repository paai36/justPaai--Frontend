import { useState, useEffect } from 'react';
import Modal from '../Modal';
import styles from './ReachOut.module.scss';
interface ReachoutInterface {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ReachOut(
    { showModal,
        onClose, }: {
            showModal: boolean;
            onClose: Function;
        }
) {
    const [reachoutDetails, setreachoutDetails] = useState<ReachoutInterface>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setreachoutDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handlereachout = () => {
        //Handlereachout
        onClose();
    }
    return (
        <Modal showModal={showModal} onClose={onClose}>
            <div className={styles.wrapper}>
                <img className={styles.close} onClick={() => onClose()} src="/close.svg" alt='X' />
                <h2><span>Reach Out</span>To Us</h2>
                <div className={styles.main}>
                    <div>
                        <label>
                            Name
                        </label>
                        <input
                            placeholder="Your Name"
                            name="name"
                            value={reachoutDetails.name}
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
                            value={reachoutDetails.email}
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
                            value={reachoutDetails.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.message}>
                        <label>
                            Message
                        </label>
                        <textarea
                            placeholder="Enter Your Message"
                            name="error"
                            value={reachoutDetails.message}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={styles.cancel} onClick={() => onClose()}>
                        Cancel
                    </button>
                    <button className={styles.reachout} onClick={handlereachout}>
                        Send Message <img src='/toprightwhite.svg' />
                    </button>
                </div>
            </div>
        </Modal>
    )
}