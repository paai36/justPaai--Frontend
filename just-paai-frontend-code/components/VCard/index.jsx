import { useState } from 'react';
import Modal from '../Modal';
import styles from './VCard.module.scss';
import { auth } from "../../config/firebaseApp";
import Image from 'next/image';
import qr from "../../public/qr.png"
import logo from "../../public/logo.png"
import gmail from "../../public/Vcard/gmail.png"
import facebook from "../../public/Vcard/facebook.png"
import copy from "../../public/Vcard/copy.png"
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
                <h2>Share your <span>Vcard</span></h2>
                <div className={styles.main}>
                 <div className={styles.topWrapper}>
                    <div className={styles.profilePic}>
                    <img src={auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL : "/Defaultpfp.svg"} alt="" height={80} width={80} />
                    </div>
                    <div className={`${styles.name}`}>
                        <div className={`${styles.label} ${styles.nameLabel}`}>
                            Name
                        </div>
                    <span>{auth?.currentUser?.displayName ? auth?.currentUser?.displayName : "Ritik Chandra"}</span>
                    </div>
                 </div>
                 <div className={styles.info}>
                 <div className={styles.mailPhone}>
                 <div className={`${styles.mail} ${styles.field}`}>
                        <div className={`${styles.label} ${styles.mailLabel}`}>
                           Email
                        </div>
                    <span>ritik.chandra009@gmail.com</span>
                    </div>
                    <div className={`${styles.phone} ${styles.field}`}>
                        <div className={`${styles.label} ${styles.phoneLabel}`}>
                            Phone
                        </div>
                    <span>7982895568</span>
                    </div>
                 </div>
                 <div className={styles.qualificationsAndCases}>
                 <div className={`${styles.qualifications} ${styles.field}`}>
                        <div className={`${styles.label} ${styles.qualificationsLabel}`}>
                           Highest Qualification
                        </div>
                    <span>Bachelor of Laws</span>
                    </div>
                    <div className={`${styles.cases} ${styles.field}`}>
                        <div className={`${styles.label} ${styles.casesLabel}`}>
                        Cases Completed
                        </div>
                    <span>36</span>
                    </div>
                 </div>
                 </div>
                 <div className={`${styles.about} ${styles.field}`}>
                 <div className={`${styles.label} ${styles.aboutLabel}`}>
                        About
                        </div>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ullam dicta error facilis rem illum atque reiciendis libero quam sit? Facilis, unde odit. Illum nisi quas non fugiat maiores voluptate velit, itaque saepe dolorem aperiam dolore iusto quidem voluptatum magnam dignissimos sed dolor sapiente! Facilis dolores nostrum iusto eum nam?</span>
                 </div>
                 <div className={styles.qrAndLogo}>
                    <div className={styles.qr}>
                        <Image src={qr} />
                    </div>
                    <div className={styles.logo}>
                        <Image src={logo} />
                    </div>
                 </div>

                </div>
                <div className={styles.btns}>
                    <button className={styles.button}>
                        <Image src={gmail} />
                        <span>Share via Gmail</span>
                    </button>
                    <button className={styles.button}>
                        <Image src={facebook} />
                        <span>Share via Facebook</span>
                    </button>
                    <button className={styles.button}>
                        <Image src={copy} />
                        <span>Copy As Image</span>
                    </button>
                </div>
            </div>
        </Modal>
    )
}
