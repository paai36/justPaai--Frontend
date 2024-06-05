"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss"
import { userInterface } from "../../interfaces";
import { auth } from "../../config/firebaseApp";

export default function onboarding() {
    const userDetails: userInterface = {
        imageUrl: "",
        name: "Keshav Jalan",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        qualifications: {
            highestQualification: "Bachelors Of Laws (LLB)",
            casesSolved: 10,
        },
        contact: {
            phone: 441165114564,
            email: "hufhrg",
            address: "bgfrggherough",
            aadhaar: "khgiu hegi heiugh",
        }
    }
    const editPage = () => {
        window.location.href = '/editProfile';
    }
    return (
        <main className={styles.mainContent}>
            <h2>
                Edit Profile
            </h2>
            <p className={styles.back}>
                Back
            </p>
            <section>
                <div className={styles.main}>
                    <img src={auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL : "/Defaultpfp.svg"} alt="" height={80} width={80} />
                    <h2>{auth?.currentUser?.displayName ? auth?.currentUser?.displayName : userDetails?.name}</h2>
                    <p>{userDetails?.qualifications.highestQualification}</p>
                </div>
                <div className={styles.about}>
                    <label className={styles.aboutyou}>
                        About You
                    </label>
                    <div className={styles.aboutText}>
                        {userDetails?.about}
                    </div>
                </div>
                <div className={styles.contact}>
                    <label>
                        Your Contact Info
                    </label>
                    <div className={styles.mailPhone}>
                        <div className={styles.email}>
                            <label>Email</label>
                            <div>{userDetails?.contact?.email}</div>
                        </div>
                        <div className={styles.phone}>
                            <label>Phone</label>
                            <div>{userDetails?.contact?.phone}</div>
                        </div>
                    </div>
                    <div className={styles.address}>
                        <label>Address</label>
                        <div>
                            {userDetails?.contact?.address}
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.bottom}>
                <button className={styles.vcard}>Preview Your VCard</button>
                <button className={styles.edit} onClick={editPage}>Edit Details</button>
            </div>
        </main>
    )
}