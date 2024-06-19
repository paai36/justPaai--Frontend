"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { invoicesInterface } from "../../interfaces";
import { invoiceStatus } from "../../interfaces";
import { invoiceItemInterface } from "../../interfaces";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/navigation";
interface caseInterfaceInvoice extends CaseInterface {
    CaseNumber: number;
    Invoices: invoicesInterface[];
}
interface InvoiceRow extends invoiceItemInterface {
    id: number;
    amount: number;
    isChecked: boolean;
}

export default function caseInvoiceDetails() {
    const router = useRouter();
    const [invoiceItems, setInvoiceItems] = useState<InvoiceRow[]>([
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 1,
        },
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 2,
        },
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 3,
        },
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 4
        },
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 5
        },
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 6
        },
        {
            itemName: "ITETETTE",
            rate: 3443,
            hours: 4,
            amount: 73374,
            isChecked: false,
            id: 7
        },
    ]);
    const caseDetails: caseInterfaceInvoice = {
        CaseName: "Harayan ifg ifggfoiei",
        ClientName: "Keshav Jalan",
        Status: "Active",
        DateStarted: "56th feb 2024",
        CaseNumber: 56402,
        Invoices: [
            {
                title: "Unread Invoice Title TESTA",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3,
                date: "23 dec 2023",
                due_date: "2 June 2024",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title TESTB",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2024",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.pending,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2023",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2022",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 4000,
                date: "23 dec 2023",
                due_date: "2 August 2022",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2022",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2024",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2024",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "3 June 2024",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "4 June 2024",
                invoiceNumber: 2042,
            },
            {
                title: "Unread Invoice Title",
                content: " ng hgg ur tuhguhetug gh ethgetget ghuet ug heugh ehg etiughuetg he9gehge geg er gherh gurhugheuh gjeh gjheghjkehgje h ghie0",
                status: invoiceStatus.paid,
                amount: 3000,
                date: "23 dec 2023",
                due_date: "2 June 2024",
                invoiceNumber: 2042,
            },
        ]
    }

    return (
        <>
            <section className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.top}>
                        <h2 className={styles.caseName}>{caseDetails?.CaseName}</h2>
                        <p className={styles.path}>
                            Dashboard <img src="rightCrr.svg" /> Invoices <img src="rightCrr.svg" /> New Invoice
                        </p>
                    </div>
                    <p className={styles.backBtn} onClick={() => router.back()}>
                        <img src="leftCrr.svg" alt="" /> Back
                    </p>
                    <div className={styles.invoiceBox}>
                        <h3>$ Invoice Name</h3>
                        <div className={styles.numDate}>
                            <p>Invoice Num : 334256</p>
                            <p>23 jan 2024</p>
                        </div>
                        <div className={styles.Itemcontainer}>
                            <div className={styles.top}>
                                <p className={styles.item}>Invoice Item</p>
                                <p className={styles.hours}>Hours</p>
                                <p className={styles.rate}>Rate </p>
                                <p className={styles.amount}>Amount</p>
                            </div>
                            <div className={styles.main_container}>
                                {invoiceItems?.map((row: InvoiceRow, index: number) => (
                                    <div key={index} className={styles.row}>
                                        <input
                                            type="checkbox"
                                            checked={row.isChecked}
                                            // onChange={() => handleCheckboxChange(row.id)}
                                            className={styles.che}
                                        />
                                        <p className={styles.itemName}>
                                            {row.itemName}
                                        </p>
                                        <p className={styles.hours}>
                                            {row.hours}
                                        </p>
                                        <p className={styles.rate}>
                                            {row.rate}
                                        </p>
                                        <p className={styles.amount}>
                                            Rs {row.amount}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.moreDetails}>
                            <div className={styles.pay}>
                                <p className={styles.left}>Net Payable</p>
                                <p>Rs. 9546</p>
                            </div>
                            <div className={styles.date}>
                                <p className={styles.left}>Due Date</p>
                                <p className={styles.right}>04 Jan 2024 </p>
                            </div>
                            <div className={styles.status}>
                                <p className={styles.left}>
                                    Status
                                </p>
                                <select  className={styles.pending}> //change
                                    <option value={invoiceStatus.pending}>Pending</option>
                                    <option value={invoiceStatus.paid}>Paid</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.btns}>
                                <button className={styles.delete}>
                                    Delete Invoice
                                    <img src="/bin.svg" width={18} height={18}/>
                                </button>
                                <button className={styles.pdf}>Download As PDF</button>
                        </div>
                    </div>
                </div>
                <div className={styles.SideBarWrapper}>
                    <Sidebar />
                </div>
            </section>
        </>
    )
}