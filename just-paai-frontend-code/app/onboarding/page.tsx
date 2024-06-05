"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import {useRouter} from "next/navigation";

export default function onboarding() {
    const router = useRouter();
    const handleSubmit = () => {
        //handleSubmit
        router.push("/dashboard");
    }
    return (
        <main className={styles.mainContent}>
            <img src="/onboarding/img.svg" alt="" className={styles.backImg} />
            <section>
                <div className={styles.back}>
                    <img src="/onboarding/back.svg" alt="" />
                    <p>Back</p>
                </div>
                <div className={styles.main}>
                    <div className={styles.head}>
                        <h2>Welcome To <span>JustiPAAI!</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Bibendum neque congue egestas eget arcu id sed. Facilisi faucibus vitae mauris diam pharetra. Aliquet sit nisi viverra eget lacus. At semper euismod sit porttitor velit integer.</p>
                    </div>
                    <div className={styles.form}>
                        <h3>Tell Us About Yourself</h3>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.name}>
                                <label>Your Name</label>
                                <input type="text" placeholder="Enter Your Name" />
                            </div>
                            <div className={styles.email}>
                                <label>Your Official Email Address</label>
                                <input type="text" placeholder="Enter Your Official Email Address" />
                            </div>
                            <div className={styles.phone}>
                                <label>Your Phone Number</label>
                                <input type="text" placeholder="Enter Your Phone Number" />
                            </div>
                        </form>
                    </div>
                </div>
                <button onClick={handleSubmit}>
                        Proceed To Dashboard
                        <img src="/onboarding/proceed.svg" alt=">" />
                    </button>
            </section>
        </main>
    )
}