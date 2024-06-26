import React from 'react';
import Image from 'next/image';
import { auth } from '../../config/firebaseApp';
import styles from './page.module.css';
import exampleImage from "/public/NoticeDetails/notice.png"
import addImage from "/public/NoticeDetails/add.png"
import selectedImage from "/public/NoticeDetails/selected.png"

const NoticeDetails = () => {
    return (
        <>
        <div className={styles.pageWrapper}>
        <div className={styles.heading}>
        Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947
        </div>
        <div className={styles.contentWrapper}>
            <div className={styles.templateWrapper}>
                <div className={styles.templateHeading}>
                    Notice Templates
                </div>
                <div className={styles.exampleWrapper}>
                    <div className={styles.example}>
                        <div className={styles.exampleHeading}>
                            Cheque Bounce
                        </div>
                        {/* <Image src={exampleImage}></Image> */}
                    </div>
                    <div className={styles.example}>
                    <div className={styles.exampleHeading}>
                            Cheque Bounce
                        </div>
                        {/* <Image src={selectedImage}></Image> */}
                    </div>
                    <div className={styles.example}>
                    <div className={styles.exampleHeading}>
                            Cheque Bounce
                        </div>
                        <div className={styles.examplePreview}>
                            <Image src={exampleImage} />
                        </div>
                        {/* <Image src={selectedImage}></Image> */}
                    </div>
                    <div className={styles.example}>
                    <div className={styles.exampleHeading}>
                            Cheque Bounce
                        </div>
                        <div className={styles.examplePreview}>
                            <Image src={exampleImage} />
                        </div>
                        {/* <Image src={selectedImage}></Image> */}
                    </div>
                    <div className={styles.example}>
                    <div className={styles.exampleHeading}>
                            Cheque Bounce
                        </div>
                        <div className={styles.examplePreview}>
                            <Image src={exampleImage} />
                        </div>
                        {/* <Image src={selectedImage}></Image> */}
                    </div>
                    <div className={styles.add}>
                        <Image src={addImage}></Image>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default NoticeDetails