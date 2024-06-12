import { useState, useEffect } from 'react';
import Modal from '../Modal';
import styles from './CaseDetails.module.scss';

export default function CaseDetails(
    { showModal,
        onClose, }: {
            showModal: boolean;
            onClose: Function;
        }
) {
    const CaseDetails = {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "keshav Jalan",
        ClientMail: "keshavjalan@gmail.com",
        phoneNumber: 75965964956,
        files: ["TESTURL", "TESTURL"],
        Summary: "ndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial sysndia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive pettydia's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which prohibits second appeals for money recovery suits under Rs. 25,000, courts are still burdened with cases where litigation costs often exceed the disputed amoun",
        status: "Active",
    }
    return (
        <Modal showModal={showModal} onClose={onClose}>
            <div className={styles.wrapper}>
            <img className={styles.close} onClick={() => onClose()} src="/close.svg" height={28} width={28} alt='X' />
                <div className={styles.one}>
                    <p>
                        {CaseDetails.status} Case
                    </p>
                    <h2>
                        {CaseDetails.CaseName}
                    </h2>
                </div>
                <div className={styles.two}>
                    <p>{CaseDetails.ClientName}</p>
                    <p>{CaseDetails.ClientMail}</p>
                    <p>{CaseDetails.phoneNumber}</p>
                </div>
                <div className={styles.three}>
                    <h3>Relevant Files</h3>
                    <div className={styles.fileWrap}>
                        {CaseDetails.files.map((file, index) => (
                            <div key={index} className={styles.file}>
                                {file}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.four}>
                    <p className={styles.summaryheading}>Summary</p>
                    <p className={styles.summary}>{CaseDetails?.Summary}</p>
                </div>
                <div className={styles.five}>
                    <button className={styles.edit}>Edit Case Details<img src='/toprightarr.svg' /></button>
                    <button className={styles.download}>Download as PDF <img src='/toprightarr.svg' /></button>
                </div>
            </div>
        </Modal>
    )

}