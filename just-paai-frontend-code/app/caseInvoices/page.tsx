"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import { invoicesInterface } from "../../interfaces";
import { invoiceStatus } from "../../interfaces";

interface caseInterfaceInvoice extends CaseInterface {
    CaseNumber: number;
    Invoices: invoicesInterface[];
}

function InvoiceRow({ invoiceData }: { invoiceData: invoicesInterface }) {
    return (
        <div className={styles.InvoiceRow}>
            <input type="checkbox">
            </input>
            <p className={styles.invoiceName}>{invoiceData.title}</p>
            <p className={styles.amount}>Rs. {invoiceData.amount}</p>
            <p className={invoiceData?.status === invoiceStatus.paid ? styles.statusPaid : styles.statusPending}>{invoiceData.status}</p>
            <p className={styles.dueDate}>{invoiceData.due_date}</p>
            <p className={styles.viewbtn}>&#62;</p>
        </div>
    )
}

export default function caseInvoices() {

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
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterType, setFilterType] = useState<string>("All");
    const [sortedInvoices, setSortedInvoices] = useState<invoicesInterface[]>(caseDetails.Invoices);
    const [netPending, setNetPending] = useState<number>(0);
    const [netPaid, setNetPaid] = useState<number>(0);

    useEffect(() => {
        filterAndSortInvoices();
        calculateTotals();
    }, [searchQuery, filterType]);

    const calculateTotals = () => {
        let pendingTotal = 0;
        let paidTotal = 0;

        caseDetails.Invoices.forEach(invoice => {
            if (invoice.status === invoiceStatus.pending) {
                pendingTotal += invoice.amount;
            } else if (invoice.status === invoiceStatus.paid) {
                paidTotal += invoice.amount;
            }
        });

        setNetPending(pendingTotal);
        setNetPaid(paidTotal);
    };

    useEffect(() => {
        filterAndSortInvoices();
    }, [searchQuery, filterType]);

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };
    const filterAndSortInvoices = () => {
        let filteredInvoices = caseDetails?.Invoices.filter(InvoiceData =>
            InvoiceData.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            InvoiceData.content.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filterType === invoiceStatus.paid) {
            filteredInvoices = filteredInvoices.filter(InvoiceData => InvoiceData.status === invoiceStatus.paid);
        } else if (filterType === invoiceStatus.pending) {
            filteredInvoices = filteredInvoices.filter(InvoiceData => InvoiceData.status === invoiceStatus.pending);
        }

        filteredInvoices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setSortedInvoices(filteredInvoices);
    };

    function AddInvoice() {
        router.push("/newInvoice")
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.top}>
                        <h2 className={styles.caseName}>{caseDetails?.CaseName}</h2>
                        <p className={styles.path}>
                            Dashboard "" Invoices
                        </p>
                    </div>
                    <div className={styles.invoicesBox}>
                        <div className={styles.heading}> Invoices </div>
                        <div className={styles.mainBox}>
                            <div className={styles.actions}>
                                <div className={styles.searchWrapper}>
                                    <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
                                </div>
                                <div className={styles.filterSort}>
                                    {/* filters and Sort are yet to be decided */}
                                    <select className={styles.filter} value={filterType} onChange={handleFilterChange}>
                                        <option value="All">All</option>
                                        <option value={invoiceStatus.paid}>Paid</option>
                                        <option value={invoiceStatus.pending}>Pending</option>
                                    </select>
                                    <select className={styles.sort}>
                                        <option>Date</option>
                                        <option>TEST2</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.cases}>
                                <div className={styles.top}>
                                    <p className={styles.name}>Invoice Reference Name</p>
                                    <p className={styles.client}>Net Payable</p>
                                    <p className={styles.status}>Status</p>
                                    <p className={styles.date}>Last Date</p>
                                </div>
                                <div className={styles.casesList}>
                                    {sortedInvoices?.map((invoiceData: invoicesInterface, index: number) => (
                                        <li>
                                            <InvoiceRow invoiceData={invoiceData}></InvoiceRow>
                                        </li>
                                    ))}
                                </div>
                                <div className={styles.bottom}>
                                    <div className={styles.left}>
                                        <div className={styles.delete}>
                                            Delete Selected Row
                                            <img src="/allCases/bin.svg" alt="" height={15} />
                                        </div>
                                        <div className={styles.pending}>
                                            Mark As Pending
                                            <img src="/allCases/archive.svg" alt="" height={15} />
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.pending}>
                                            <p>Net Pending</p>
                                            <p className={styles.am}>Rs. {netPending}</p>
                                        </div>
                                        <div className={styles.paid}>
                                            <p>Net Paid</p>
                                            <p className={styles.am}>Rs. {netPaid}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <button onClick={() => router.push("/newInvoice")}>
                                Create New Invoice +
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.SideBarWrapper}>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}