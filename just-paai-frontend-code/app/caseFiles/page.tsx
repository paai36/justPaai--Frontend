"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/navigation";

interface fileInterface {
    fileName: string;
    DateAdded: string;
    fileLink: string;
    fileType: string;
}

export default function caseFiles() {

    const [filesList, setFilesList] = useState<fileInterface[]>([
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "doc"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "doc"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "doc"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "doc"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "doc"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
        {
            fileName: "I am the President of the United States",
            DateAdded: "23 Jan 2023",
            fileLink: "https://www.google.com",
            fileType: "img"
        },
    ]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.heading}>
                        <h3>Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947</h3>
                        <p className={styles.caseNum}>Case Number 2133422</p>
                    </div>
                    <div className={styles.files}>
                        <div className={styles.top}>
                            <p className={styles.name}>File Name</p>
                            <p className={styles.date}>Date Added</p>
                        </div>
                        <div className={styles.filesList}>
                            {filesList?.map((fileData: fileInterface, index: number) => (
                                <li key={index}>
                                    <div className={styles.fileRow}>
                                        <img src={"/caseFiles/" + fileData?.fileType + ".svg"} onClick={() => console.log("/caseFiles/" + fileData?.fileType)}/>
                                        {/* img src according to fileType */}
                                        <p className={styles.fileName}>{fileData.fileName}</p>
                                        <p className={styles.DateAdded}>{fileData.DateAdded}</p>
                                        <p className={styles.viewbtn} onClick={() => window.open(fileData.fileLink, "_blank")}>view &#62;</p>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                    <button className={styles.addBtn}>Add File From Device +</button>
                </div>
                <div className={styles.SideBarWrapper}>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}