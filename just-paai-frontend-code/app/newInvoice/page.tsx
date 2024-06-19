"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { invoicesInterface } from "../../interfaces";
import { invoiceStatus } from "../../interfaces";
import { invoiceItemInterface } from "../../interfaces";
import jsPDF from 'jspdf';
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
interface FormData {
    invoiceName: string;
    invoiceItems: InvoiceRow[];
    status: invoiceStatus;
    invoiceNumber: number;
    dueDate: string;
}

export default function newInvoice() {
    const router = useRouter();

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
    const [status, setStatus] = useState(invoiceStatus.paid);
    const prevInvoiceItemsRef = useRef<InvoiceRow[]>([]);
    const [formData, setFormData] = useState<FormData>({
        invoiceName: '',
        invoiceItems: [
            { id: Date.now(), itemName: '', hours: 0, rate: 0, amount: 0, isChecked: false }
        ],
        status: invoiceStatus.paid,
        invoiceNumber: 334562, // change to generate serial wise
        dueDate: new Date().toISOString().split('T')[0],
    });
    const [netAmount, setNetAmount ] = useState<number>(0);
    const generatePdf = () => {
        // Create a new jsPDF instance
        const doc = new jsPDF();

        // Define font size and margins
        const fontSize = 12;
        const margin = 10;

        // Set font size and type
        doc.setFontSize(fontSize);

        // Add invoice name
        doc.text(`Invoice Name: ${formData.invoiceName}`, margin, margin);

        // Add other invoice details
        doc.text(`Invoice Number: ${formData.invoiceNumber}`, margin, margin + fontSize);
        doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, margin, margin + fontSize * 2);
        doc.text(`Due Date: ${formData.dueDate}`, margin, margin + fontSize * 3);
        doc.text(`Status: ${formData.status}`, margin, margin + fontSize * 4);

        // Add invoice items
        let startY = margin + fontSize * 6; // Start Y position for invoice items
        formData.invoiceItems.forEach((item, index) => {
            const y = startY + index * (fontSize + margin);
            doc.text(`${index + 1}. ${item.itemName} - Hours: ${item.hours}, Rate: ${item.rate}, Amount: ${item.amount}`, margin, y);
        });

        // Add total amount
        const totalAmount = formData.invoiceItems.reduce((total, item) => total + item.amount, 0);
        doc.text(`Total Amount: ${totalAmount}`, margin, startY + formData.invoiceItems.length * (fontSize + margin));

        // Save the PDF
        doc.save('invoice.pdf');
    };
    const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            dueDate: e.target.value
        });
    };
    const validateRows = () => {
        for (const row of formData.invoiceItems) {
            if (!row.itemName || row.hours <= 0 || row.rate <= 0) {
                return false;
            }
        }
        return true;
    };
    const handleCreateRow = () => {
        if (validateRows()) {
            setFormData((prevData) => ({
                ...prevData,
                invoiceItems: [
                    ...prevData.invoiceItems,
                    { id: Date.now(), itemName: '', hours: 0, rate: 0, amount: 0, isChecked: false }
                ]
            }));
        } else {
            alert("Please fill all fields in the current row before adding a new row.");
        }
    };

    const handleInputChange = (id: number, field: keyof InvoiceRow, value: string | number) => {
        setFormData((prevData) => ({
            ...prevData,
            invoiceItems: prevData.invoiceItems.map(row =>
                row.id === id ? { ...row, [field]: value } : row
            )
        }));
    };

    const handleCheckboxChange = (id: number) => {
        setFormData((prevData) => ({
            ...prevData,
            invoiceItems: prevData.invoiceItems.map(row =>
                row.id === id ? { ...row, isChecked: !row.isChecked } : row
            )
        }));
    };

    const handleDeleteSelectedRows = () => {
        setFormData((prevData) => ({
            ...prevData,
            invoiceItems: prevData.invoiceItems.filter(row => !row.isChecked)
        }));
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            status: e.target.value as invoiceStatus
        });
        setStatus(e.target.value as invoiceStatus);
    };

    const handleInvoiceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            invoiceName: e.target.value
        });
    };

    // Function to calculate the amount
    const calculateAmounts = () => {
        const totalAmount = formData.invoiceItems.reduce((total, item) => total + (item.hours * item.rate), 0);
        setNetAmount(totalAmount);
        setFormData((prevData) => ({
            ...prevData,
            invoiceItems: prevData.invoiceItems.map(item => ({
                ...item,
                amount: item.hours * item.rate
            }))
        }));
    };
    const handleSubmit = () => {
        //API CALL TO SUBMIT THE FORM DATA
    }

    useEffect(() => {
        const prevInvoiceItems = prevInvoiceItemsRef.current;

        const hasChanged = formData.invoiceItems.some((item, index) => {
            return (
                item.hours !== prevInvoiceItems[index]?.hours ||
                item.rate !== prevInvoiceItems[index]?.rate
            );
        });

        if (hasChanged) {
            calculateAmounts();
        }

        prevInvoiceItemsRef.current = formData.invoiceItems;
    }, [formData.invoiceItems]);
    // useEffect(() => {
    //     console.log(formData);
    // } , [formData])

    return (
        <>
            <section className={styles.main}>
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
                    <div className={styles.one}>
                        <input
                            placeholder="Enter Invoice Name"
                            value={formData.invoiceName}
                            onChange={handleInvoiceNameChange}
                        />
                    </div>
                    <div className={styles.two}>
                        <p>Invoice Num: {formData.invoiceNumber}</p>
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
                            {formData.invoiceItems.map(row => (
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
                                <p>Rs. {netAmount}</p>
                            </div>
                            <div className={styles.date}>
                                <p className={styles.left}>Due Date</p>
                                <input
                                    type="date"
                                    value={formData.dueDate}
                                    onChange={handleDueDateChange}
                                />
                            </div>
                            <div className={styles.status}>
                                <p className={styles.left}>
                                    Status
                                </p>
                                <select onChange={handleStatusChange} value={formData.status} className={status === invoiceStatus.paid ? styles.paid : styles.pending}>
                                    <option value={invoiceStatus.pending}>Pending</option>
                                    <option value={invoiceStatus.paid}>Paid</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.five}>
                        <button className={styles.delete}>Delete Invoice <img src="/bin.svg" /></button>
                        <div>
                            <button className={styles.pdf} onClick={generatePdf}>Preview as PDF</button>
                            <button className={styles.saveSend} onClick={handleSubmit}>Save and Send Invoice</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}