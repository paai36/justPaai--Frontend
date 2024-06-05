"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface, noticesInterface, invoicesInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import ReachOut from "../../components/ReachOut";
import ReqFeature from "../../components/ReqFeature";
import { invoiceStatus } from "../../interfaces";

enum PageState {
    Default,
    ReqFeature,
    Reachout,
  }

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
function NoticeRowList({ notice }: { notice: noticesInterface }) {
    return (
        <div className={styles.noticeRow}>
            <img src="notice.svg" alt="" height={14} width={14} />
            <div className={styles.right}>
                <p className={styles.title}>{notice?.title}</p>
                <p className={styles.content}>{notice?.content}</p>
            </div>
        </div>
    )
}
function InvoiceRowList({ invoice }: { invoice: invoicesInterface }) {
    return (
        <div className={styles.invoiceRow}>
            <img src="invoice.svg" alt="" height={14} width={14} />
            <div className={styles.right}>
                <p className={styles.title}>{invoice?.title}</p>
                <p className={styles.content}>{invoice?.content}</p>
            </div>
        </div>
    )
}


export default function dashboard() {
  const [pageState, setPageState] = useState<PageState>(PageState.Default);


    const handleSearch = () => {
        //handle Search FUNCTION
    }
    const handlereachOut = () => {
        setPageState(PageState.Reachout) 
    }
    const handlereqFeature = () => {
        setPageState(PageState.ReqFeature)

    }

    const Notices: noticesInterface[] = [
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
    ]
    const Invoices: invoicesInterface[] = [
        {
            title: "Unread Invoice Title",
            content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            status: invoiceStatus.paid,
            amount: 3000,
            date: "23 dec 2023",
            due_date: "24dec 2023",
            invoiceNumber: 2042,
        },
        {
            title: "Unread Invoice Title",
            content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            status: invoiceStatus.paid,
            amount: 3000,
            date: "23 dec 2023",
            due_date: "24dec 2023",
            invoiceNumber: 2042,
        },
        {
            title: "Unread Invoice Title",
            content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            status: invoiceStatus.paid,
            amount: 3000,
            date: "23 dec 2023",
            due_date: "24dec 2023",
            invoiceNumber: 2042,
        },
        {
            title: "Unread Invoice Title",
            content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            status: invoiceStatus.paid,
            amount: 3000,
            date: "23 dec 2023",
            due_date: "24dec 2023",
            invoiceNumber: 2042,
        },
        {
            title: "Unread Invoice Title",
            content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            status: invoiceStatus.paid,
            amount: 3000,
            date: "23 dec 2023",
            due_date: "24dec 2023",
            invoiceNumber: 2042,
        },
        {
            title: "Unread Invoice Title",
            content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
            status: invoiceStatus.paid,
            amount: 3000,
            date: "23 dec 2023",
            due_date: "24dec 2023",
            invoiceNumber: 2042,
        },
    ]

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
        <>
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
                        <form className={styles.searchBox} onSubmit={() => handleSearch()}>
                            <input placeholder="Start Typing" />
                            <button onClick={() => handleSearch()}>Search</button>
                        </form>
                    </div>
                    <div className={styles.three}>
                        <div className={styles.notices}>
                            <div className={styles.head}>
                                <div className={styles.subheading}>
                                    <p>Recent Notices</p>
                                    <img src="toprightarr.svg" width={16} height={16} alt=">"></img>
                                </div>
                                <button>
                                    New +
                                </button>
                            </div>
                            <div className={styles.noticesList}>
                                {Notices?.map((notice: noticesInterface, index: number) => (
                                    <>
                                        <li key={index}>
                                            <NoticeRowList notice={notice} />
                                        </li>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className={styles.invoices}>
                            <div className={styles.head}>
                                <div className={styles.subheading}>
                                    <p>Recent Invoices</p>
                                    <img src="toprightarr.svg" width={16} height={16} alt=">"></img>
                                </div>
                                <button>
                                    New +
                                </button>
                            </div>
                            <div className={styles.invoicesList}>
                                {Invoices?.map((invoice: invoicesInterface, index: number) => (
                                    <>
                                        <li key={index}>
                                            <InvoiceRowList invoice={invoice} />
                                        </li>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.four}>
                        <div className={styles.reachOut} onClick={() => handlereachOut()}>
                            <p>Reach Out To Us</p>
                            <img src="reachOut.svg" alt="" />
                        </div>
                        <div className={styles.reqFeature} onClick={() => handlereqFeature()}>
                            <p>Request Feature</p>
                            <img src="reqFeature.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.SideBarWrapper}>
                    <Sidebar />
                </div>
            </section>
            <ReachOut onClose={() => { setPageState(PageState.Default) }} showModal={pageState === PageState.Reachout} />
            <ReqFeature onClose={() => { setPageState(PageState.Default) }} showModal={pageState === PageState.ReqFeature} />
        </>
    )
}