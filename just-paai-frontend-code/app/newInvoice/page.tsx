"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { invoicesInterface } from "../../interfaces";
import { invoiceStatus } from "../../interfaces";
import { invoiceItemInterface } from "../../interfaces";

interface caseInterfaceInvoice extends CaseInterface {
    CaseNumber: number;
    Invoices: invoicesInterface[];
}
interface InvoiceRow extends invoiceItemInterface {
    id: number;
    amount: number;
    isChecked: boolean;
}

export default function newInvoice() {
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
    const [invoiceRows, setInvoiceRows] = useState<InvoiceRow[]>([]);
    const [status, setStatus] = useState(invoiceStatus.pending);
    const validateRows = () => {
        for (const row of invoiceRows) {
            if (!row.itemName || row.hours <= 0 || row.rate <= 0) {
                return false;
            }
        }
        return true;
    };
    const handleCreateRow = () => {
        if (validateRows()) {
            setInvoiceRows([
                ...invoiceRows,
                { id: Date.now(), itemName: '', hours: 0, rate: 0, amount: 0, isChecked: false }
            ]);
        } else {
            alert("Please fill all fields in the current row before adding a new row.");
        }
    };
    const handleInputChange = (id: number, field: keyof InvoiceRow, value: string | number) => {
        setInvoiceRows(rows =>
            rows.map(row =>
                row.id === id ? { ...row, [field]: value, amount: row.hours * row.rate } : row
            )
        );
    };

    const handleCheckboxChange = (id: number) => {
        setInvoiceRows(rows =>
            rows.map(row =>
                row.id === id ? { ...row, isChecked: !row.isChecked } : row
            )
        );
    };

    const handleDeleteSelectedRows = () => {
        setInvoiceRows(rows => rows.filter(row => !row.isChecked));
    };
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value as invoiceStatus);
    };
    useEffect(() => {
        setInvoiceRows(rows =>
            rows.map(row => ({
                ...row,
                amount: isNaN(row.hours) || isNaN(row.rate) ? 0 : row.hours * row.rate
            }))
        );
    }, [invoiceRows]);

    return (
        <>
            <section className={styles.main}>
                <div className={styles.top}>
                    <h2 className={styles.caseName}>{caseDetails?.CaseName}</h2>
                    <p className={styles.path}>
                        Dashboard <img src="rightCrr.svg" /> Invoices <img src="rightCrr.svg" /> New Invoice
                    </p>
                </div>
                <p className={styles.backBtn}>
                    <img src="leftCrr.svg" alt="" /> Back
                </p>
                <div className={styles.invoiceBox}>
                    <div className={styles.one}>
                        <input placeholder="Enter Invoice Name" />
                    </div>
                    <div className={styles.two}>
                        <p>Invoice Num: 334563</p>
                        <p>23 Jan 2024</p>
                    </div>
                    <div className={styles.three}>
                        <div className={styles.top}>
                            <p className={styles.item}>Invoice Item</p>
                            <p className={styles.hours}>Hours</p>
                            <p className={styles.rate}>Rate </p>
                            <p className={styles.amount}>Amount</p>
                        </div>
                        <div className={styles.main_container}>
                        {invoiceRows.map(row => (
                                <div key={row.id} className={styles.row}>
                                    <input
                                        type="checkbox"
                                        checked={row.isChecked}
                                        onChange={() => handleCheckboxChange(row.id)}
                                        className={styles.che}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Item Name"
                                        value={row.itemName}
                                        onChange={(e) => handleInputChange(row.id, 'itemName', e.target.value)}
                                        className={styles.itemName}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Hours"
                                        value={row.hours}
                                        onChange={(e) => handleInputChange(row.id, 'hours', parseInt(e.target.value) || 0)}
                                        className={styles.hours}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Rate"
                                        value={row.rate}
                                        onChange={(e) => handleInputChange(row.id, 'rate', parseInt(e.target.value) || 0)}
                                        className={styles.rate}
                                    />
                                    <span className={styles.amount}>{row.amount}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.delete} onClick={handleDeleteSelectedRows}>Delete Selected Row <img src="/allCases/bin.svg" /></div>
                            <div className={styles.create} onClick={handleCreateRow}>Create New Row +</div>
                        </div>
                    </div>
                    <div className={styles.four}>
                        <div className={styles.left}>
                            <p>Your Client Will be informed via Whatsapp and email</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.pay}>
                                <p className={styles.left}>Net Payable</p>
                                <p>Rs. 45000</p>
                            </div>
                            <div className={styles.date}>
                                <p className={styles.left}>Due Date</p>
                                <p>04 Jan 2024</p>
                            </div>
                            <div className={styles.status}>
                                <p className={styles.left}>
                                    Status
                                </p>
                                <select onChange={handleStatusChange} value={status} className={status === invoiceStatus.paid ? styles.paid : styles.pending}>
                                    <option value={invoiceStatus.pending}>Pending</option>
                                    <option value={invoiceStatus.paid}>Paid</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.five}>
                        <button className={styles.delete}>Delete Invoice <img src="/bin.svg" /></button>
                        <div>
                            <button className={styles.pdf}>Preview as PDF</button>
                            <button className={styles.saveSend}>Save and Send Invoice</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}