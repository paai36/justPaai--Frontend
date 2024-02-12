import React from "react";
import { useState, useEffect } from "react"

import { auth } from "../../config/firebaseApp";
import styles from "./Sidebar.module.scss";

interface EventsInterface {
    date: string;
    eventName: string;
}
export default function Sidebar() {
    const upNextEvents: EventsInterface[] = [
        {
            date: "24 Dex 2033",
            eventName: "Event Name",
        },
        {
            date: "24 Dex 2033",
            eventName: "Event Name",
        },
        {
            date: "24 Dex 2033",
            eventName: "Event Name",
        },
        {
            date: "24 Dex 2033",
            eventName: "Court Appointment",
        },
    ]
    return (
        <div className={styles.sidebar}>
            <div className={styles.clientCard}>
                <img
                    src={auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL : "/Defaultpfp.svg"}
                    alt=''
                >
                </img>
                <div>
                    <p>Client</p>
                    <h3>{auth?.currentUser?.displayName ? auth?.currentUser?.displayName : "User"}</h3>
                </div>
            </div>
            <div className={styles.cal}>
                <p>
                    Calendar <img src="/toprightarr.svg" alt=">"></img>
                </p>
                {/* Cal Component */}
            </div>
            <div className={styles.upNext}>
                <p className={styles.haeding}>Up Next</p>
                <ul>
                    {upNextEvents?.map((event, index) => (
                        <li key={index}>
                            <div className={styles.leftWrapper}>
                                <img src="/cal.svg" alt="" />
                                <div className={styles.right}>
                                    <p className={styles.date}>
                                        {event?.date}
                                    </p>
                                    <p className={styles.name}>
                                        {event?.eventName}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.goto}>
                                <img src="/rightcrr.svg" alt=">"></img>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.newEventbtn}>
                <button >
                    Create New Event +
                </button>
            </div>
        </div>
    )
}