"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";

export default function caseDashboard () {
    return (
        <section className={styles.main}>
            <div>

            </div>
            <div className={styles.SideBarWrapper}>
                <Sidebar />
            </div>
        </section>
    )
}