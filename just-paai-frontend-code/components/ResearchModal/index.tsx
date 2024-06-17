import { useState, useEffect } from 'react';
import Modal from '../Modal';
import styles from './ResearchModal.module.scss';

export default function ResearchModal(
    { showModal,
        onClose, }: {
            showModal: boolean;
            onClose: Function;
        }
) {
    const CaseDetails = {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        Sections: [315, 243],
        Date: "23 Dec 2023",
        Court: "Mumbai High Court",
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
                        Case
                    </p>
                    <h2>
                        {CaseDetails.CaseName}
                    </h2>
                </div>
                <div className={styles.two}>
                    <p>Applicable Sections {CaseDetails.Sections.map((t) => (<span>{t} ,</span>))}</p>
                    <p>Case Started on {CaseDetails.Date}</p>
                    <p>In {CaseDetails.Court}</p>
                </div>
                <div className={styles.three}>
                    
                </div>
                <div className={styles.four}>
                    <p className={styles.summaryheading}>Summary</p>
                    <p className={styles.summary}>{CaseDetails?.Summary}</p>
                </div>
                <div className={styles.five}>
                    <button className={styles.edit}>Create Note Using This Case<img src='/toprightarr.svg' /></button>
                    <button className={styles.download}>View Citation <img src='/toprightarr.svg' /></button>
                </div>
            </div>
        </Modal>
    )

}