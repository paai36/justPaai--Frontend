"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

function CaseRowList({ caseData }: { caseData: CaseInterface }) {
    return (
        <div className={styles.caseRow}>
            <div className={styles.left}>
                <p className={styles.caseName}>{caseData.CaseName}</p>
                <p className={styles.clientName}><span>Client :</span>{caseData.ClientName}</p>
            </div>
            <div className={styles.right}>
                <p className={styles.viewbtn}>view &gt;</p>
            </div>
        </div>
    )
}


export default function dashboard() {
    const allCasesDummy: CaseInterface[] = [{
        CaseName: "Haryana Dairy nuaray, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Archived",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Archived",
    },
    {
        CaseName: "hsrh fhusssshsssssrugh rehgehtgiohe tuhg oteh ggggh hhhhhhhhh iu ghuihrguiheuigheuh gegewtuhg uiethgiuph",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Ritik Chandra",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "hsrh fhusssshsssssrugh rehgehtgiohe tuhg oteh ggggh hhhhhhhhh iu ghuihrguiheuigheuh gegewtuhg uiethgiuph",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },
    {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Ritik Chandra",
        DateStarted: "09 Jan 2024",
        Status: "Active",
    },]
    const router = useRouter();
    return (
        <section className={styles.main}>
            <div className={styles.mainContent}>
                <h1>Dashboard</h1>
                <div className={styles.one}>
                    <div className={styles.head}>
                        <div className={styles.subheading}>
                            <p>Recent Cases</p>
                            <img src="toprightarr.svg" width={16} height={16} alt=">"></img>
                        </div>
                        <button onClick={() => router.push("/newCase")}>
                            New Case  +
                        </button>
                    </div>
                    <div className={styles.caseList}>
                        {allCasesDummy?.map((caseData: CaseInterface, index: number) => (
                            <li key={index}>
                                <CaseRowList caseData={caseData} />
                            </li>
                        ))}
                    </div>
                </div>
                <div className={styles.two}>
                    <h3>Search From Millions Of Cases In Our Database.</h3>
                    <div className={styles.searchBox}>
                        <input/>
                        <button>Search</button>
                    </div>
                </div>
                <div className={styles.three}>
                    <div>

                    </div>
                </div>
                <div className={styles.four}></div>
                <div className={styles.five}></div>
            </div>
            <div className={styles.SideBarWrapper}>
                <Sidebar />
            </div>
        </section>
    )
}