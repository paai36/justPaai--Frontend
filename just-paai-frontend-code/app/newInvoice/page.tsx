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
    return (
        <>
            <section className={styles.main}>
                <div className={styles.top}>
                    <h2 className={styles.caseName}>{caseDetails?.CaseName}</h2>
                    <p className={styles.path}>
                        Dashboard <img src="rightCrr.svg" /> Invoices <img src="rightCrr.svg" /> New Invoice
                    </p>
                </div>
            </section>
        </>
    )
}