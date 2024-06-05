"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { auth } from '../../config/firebaseApp';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
const MyEditor = dynamic(() => import('./JoditEditor'), { ssr: false });

const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        adhaar: '',
        qualifications: '',
        cases: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.heading}>Edit Profile</div>
            <div className={styles.backBtn}>Back</div>
            <div className={styles.formContainer}>
                <div className={styles.profilePic}>
                    <img src={auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL : "/Defaultpfp.svg"} height={80} width={80} alt='Profile Picture' />
                </div>
                <div className={styles.fieldHeading}>Your Name</div>
                <div className={`${styles.nameWrapper} ${styles.fieldWrapper}`}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.fieldHeading}>Your Contact Info</div>
                <div className={styles.emailPhoneWrapper}>
                    <div className={`${styles.emailWrapper} ${styles.fieldWrapper}`}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={`${styles.phoneWrapper} ${styles.fieldWrapper}`}>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={`${styles.addressWrapper} ${styles.fieldWrapper}`}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="address"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={`${styles.adhaarWrapper} ${styles.fieldWrapper}`}>
                    <label htmlFor="adhaar">Adhaar</label>
                    <input
                        type="adhaar"
                        id="adhaar"
                        name="adhaar"
                        value={formData.adhaar}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.fieldHeading}>Qualifications</div>
                <div className={styles.qualificationsCasesWrapper}>
                    <div className={`${styles.qualificationsWrapper} ${styles.fieldWrapper}`}>
                        <label htmlFor="qualifications">Highest Qualifications</label>
                        <input
                            type="qualifications"
                            id="qualifications"
                            name="qualifications"
                            value={formData.qualifications}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={`${styles.casesWrapper} ${styles.fieldWrapper}`}>
                        <label htmlFor="cases">Cases Solved</label>
                        <input
                            type="cases"
                            id="cases"
                            name="cases"
                            value={formData.cases}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                </div>
                <div className={styles.aboutTextWrapper}>
                    <div className={styles.fieldHeading}>About</div>
                    <MyEditor />
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default EditProfile;
