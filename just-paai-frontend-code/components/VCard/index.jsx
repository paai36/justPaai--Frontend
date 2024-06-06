import { useState } from 'react';
import Modal from '../Modal';
import styles from './VCard.module.scss';

export default function VCardModal({ showModal, onClose }) {
    const [vCardDetails, setVCardDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        organization: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVCardDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSave = () => {
        // Handle VCard save logic here
        onClose();
    }

    return (
        <Modal showModal={showModal} onClose={onClose}>
            <div className={styles.wrapper}>
                <img className={styles.close} onClick={() => onClose()} src="/close.svg" alt='X' />
                <h2>Share your <span>VCard</span></h2>
                <div className={styles.main}>
                    <div>
                        <label>Name</label>
                        <input
                            placeholder="Your Name"
                            name="name"
                            value={vCardDetails.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            placeholder="Your Official Email"
                            name="email"
                            value={vCardDetails.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            placeholder="Your Phone Number"
                            name="phone"
                            value={vCardDetails.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                            placeholder="Your Address"
                            name="address"
                            value={vCardDetails.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Organization</label>
                        <input
                            placeholder="Your Organization"
                            name="organization"
                            value={vCardDetails.organization}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={styles.cancel} onClick={() => onClose()}>
                        Cancel
                    </button>
                    <button className={styles.save} onClick={handleSave}>
                        Save VCard <img src='/toprightwhite.svg' />
                    </button>
                </div>
            </div>
        </Modal>
    )
}
