"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import CaseDetails from "../../components/CaseDetails";
interface CaseInterface2 extends CaseInterface {
    CaseNumber: number;
    Notes: {
        title: string;
        note: string;
        noteDate: string;
    }[];
    Notices: {
        title: string;
        content: string;
        isNew: boolean;
    }[];
    Invoices: {
        title: string;
        content: string;
    }[];
}

interface AICaseInterface {
    sections: number[];
    Date: string;
    Court: string;
    CaseName: string;
    CitationNumber: string;
}

enum PageState {
    Default,
    CaseDetails,
}

export default function caseDashboard() {
    const caseDetails: CaseInterface2 = {
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        ClientName: "Keshav Jalan",
        DateStarted: "15/02/2024",
        Status: "Active",
        CaseNumber: 221412,
        Notes: [
            {
                title: "Haryana coop case Day - 3",
                note: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heug oi ghheghetughteghiuetngeuhe ughieu hu ehughegb    ute huiehg iehgu et  e  hoier hgeh ghe ghet ug hguth g  het h ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                noteDate: "24/02/2024",
            },
            {
                title: "Haryana coop case Day - 3",
                note: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                noteDate: "24/02/2024",
            },
            {
                title: "Haryana coop case Day - 3",
                note: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                noteDate: "24/02/2024",
            },
            {
                title: "Haryana coop case Day - 3",
                note: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                noteDate: "24/02/2024",
            },
            {
                title: "Haryana coop case Day - 3",
                note: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                noteDate: "24/02/2024",
            }
        ],
        Notices: [
            {
                title: "Unread Notice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                isNew: false,
            },
            {
                title: "Unread Notice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                isNew: false,
            },
            {
                title: "Unread Notice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                isNew: false,
            }
        ],
        Invoices: [
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            }
        ]
    }
    const AICases : AICaseInterface[] = [{
        sections: [133,145],
        Date: "3 Dec 2023",
        Court : "Mumbai High Court",
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        CitationNumber: "3343443"
    },
    {
        sections: [133,145],
        Date: "3 Dec 2023",
        Court : "Mumbai High Court",
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        CitationNumber: "3343443"
    },
    {
        sections: [133,145],
        Date: "3 Dec 2023",
        Court : "Mumbai High Court",
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        CitationNumber: "3343443"
    },
    {
        sections: [133,145],
        Date: "3 Dec 2023",
        Court : "Mumbai High Court",
        CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
        CitationNumber: "3343443"
    }]
    const [pageState, setpageState] = useState<PageState>(PageState.Default);
    return (
        <>
        <section className={styles.main}>
            <div className={styles.mainContent}>
                <div className={styles.heading}>
                    <h2>
                        {caseDetails.CaseName}
                    </h2>
                    <p>
                        Case Number {caseDetails.CaseNumber}
                    </p>
                </div>
                <div className={styles.Cases}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <p className={styles.hey}>Hey there! Your <span>AI Helper</span> found some cases for you.</p>
                            <p className={styles.det}>These cases are suggested from our extensive case database. You can explore more cases and add them to your research notes in the research section</p>
                        </div>
                        <div className={styles.right}>
                            <p>View/Edit Summary +</p>
                        </div>
                    </div>
                    <div className={styles.bottom1}>
                        {AICases?.map((caseData : AICaseInterface, index: number) => (
                            <li key={index}>
                                <div className={styles.top}>
                                    <p>Sections {caseData.sections.map((sec : number) => (
                                        <span>{sec} ,</span>
                                    ))}</p>
                                    <p>{caseData.Date}</p>
                                    <p>{caseData.Court}</p>
                                </div>
                                <div className={styles.mid}>
                                    {caseData.CaseName}
                                </div>
                                <div className={styles.bottom}>
                                    <p onClick={() => {setpageState(PageState.CaseDetails)}}>Quick Look <img src="/eye.svg"/></p>
                                    <a href={caseData.CitationNumber}>Citation Number <img src="/toprightarr.svg"/></a>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
                <div className={styles.notes}>
                    <div className={styles.notesHeading}>
                        <div className={styles.headingText}>
                            Recent Notes <img src="/toprightarr.svg" alt="" width={20} height={20} />
                        </div>
                        <div className={styles.newNote}>
                            New Note +
                        </div>
                    </div>
                    <ul>
                        {caseDetails?.Notes.length === 0 ? (
                            <div className={styles.emptystate}>
                                <img src="/caseDashboard/emptystate.svg" alt=""></img>
                                <p>Oops! You don't have any notes</p>
                                <button>Create New Note +</button>
                            </div>
                        ) : (
                            <>
                                {caseDetails?.Notes.map((noteObj, index) => (
                                    <div className={styles.note} key={index}>
                                        <div className={styles.left}>
                                            <h3>{noteObj.title}</h3>
                                            <p> {noteObj.note}</p>
                                        </div>
                                        <div className={styles.right}>
                                            {noteObj?.noteDate} <img src="/rightCrr.svg" alt=">" height={22} width={22} />
                                        </div>
                                    </div>
                                ))}</>
                        )}
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.notices}>
                        <div className={styles.noticesHeading}>
                            <div className={styles.headingText}>
                                Legal Notices <img src="toprightarr.svg" alt="" width={20} height={20} />
                            </div>
                            <div className={styles.new}>
                                New +
                            </div>
                        </div>
                        <ul>
                            {caseDetails?.Notices.map((noticeObj, index) => (
                                <div className={styles.notice} key={index}>
                                    <div className={styles.left}>
                                        <img src="/notice.svg"></img>
                                    </div>
                                    <div className={styles.right}>
                                        <h3>{noticeObj.title}</h3>
                                        <p> {noticeObj.content}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.invoices}>
                        <div className={styles.invoicesHeading}>
                            <div className={styles.headingText}>
                                Invoices <img src="toprightarr.svg" alt="" width={20} height={20} />
                            </div>
                            <div className={styles.new}>
                                New +
                            </div>
                        </div>
                        <ul>
                            {caseDetails?.Invoices.map((InvoiceObj, index) => (
                                <div className={styles.invoice} key={index}>
                                    <div className={styles.left}>
                                        <img src="/invoice.svg"></img>
                                    </div>
                                    <div className={styles.right}>
                                        <h3>{InvoiceObj.title}</h3>
                                        <p> {InvoiceObj.content}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.SideBarWrapper}>
                <Sidebar />
            </div>
        </section>
        <CaseDetails onClose={() => {setpageState(PageState.Default)}} showModal={pageState === PageState.CaseDetails}/>
        </>
    )
}