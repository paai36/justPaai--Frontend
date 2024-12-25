import React, { useState } from "react";
import { auth } from "../../config/firebaseApp";
import styles from "./Sidebar.module.scss";

interface EventsInterface {
    date: string;
    eventName: string;
}

export default function Sidebar() {
    const upNextEvents: EventsInterface[] = [
        {
            date: "24 Dec 2033",
            eventName: "Event Name",
        },
        {
            date: "24 Dec 2033",
            eventName: "Event Name",
        },
        {
            date: "24 Dec 2033",
            eventName: "Event Name",
        },
        {
            date: "24 Dec 2033",
            eventName: "Court Appointment",
        },
    ];

    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isYearsView, setIsYearsView] = useState(false);
    const [startYear, setStartYear] = useState(
        Math.floor(currentDate.getFullYear() / 12) * 12
    );

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        setCurrentDate(prevDate);
    };

    const handleNextMonth = () => {
        const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        setCurrentDate(nextDate);
    };

    const handleSelectMonth = (monthIndex: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
        setIsModalOpen(false); // Close modal after selecting a month
    };

    const handleSelectYear = (year: number) => {
        setCurrentDate(new Date(year, currentDate.getMonth(), 1));
        setIsYearsView(false); // Switch back to the months view
    };

    const handlePrevYears = () => {
        setStartYear(startYear - 12);
    };

    const handleNextYears = () => {
        setStartYear(startYear + 12);
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        const firstDay = getFirstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());

        const calendarCells = Array(firstDay).fill(null);

        for (let i = 1; i <= daysInMonth; i++) {
            calendarCells.push(i);
        }

        while (calendarCells.length % 7 !== 0) {
            calendarCells.push(null);
        }

        return calendarCells.map((day, index) => {
            const isToday =
                day &&
                today.getDate() === day &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear();

            return (
                <div
                    key={index}
                    className={`${styles.cell} ${isToday ? styles.today : ""} ${
                        day ? styles.active : ""
                    }`}
                >
                    {day}
                </div>
            );
        });
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.clientCard}>
                <img
                    src={auth?.currentUser?.photoURL ? auth?.currentUser?.photoURL : "/Defaultpfp.svg"}
                    alt=''
                />
                <div>
                    <p>Client</p>
                    <h3>{auth?.currentUser?.displayName ? auth?.currentUser?.displayName : "User"}</h3>
                </div>
            </div>
            <div className={styles.cal}>
                <div
                    className={styles.calendarHeader}
                    onClick={() => setIsModalOpen(true)}
                >
                    <div className={styles.left}>
                        {currentDate.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })}
                    </div>
                    <div className={styles.right}>
                        <button onClick={handlePrevMonth}>{"<"}</button>
                        <button onClick={handleNextMonth}>{">"}</button>
                    </div>
                </div>
                <div className={styles.daysRow}>
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                        <div key={index}>{day}</div>
                    ))}
                </div>
                <div className={styles.body}>{renderCalendarDays()}</div>
            </div>
            <div className={styles.upNext}>
                <p className={styles.heading}>Up Next</p>
                <ul>
                    {upNextEvents?.map((event, index) => (
                        <li key={index}>
                            <div className={styles.leftWrapper}>
                                <img src="/cal.svg" alt="" />
                                <div className={styles.right}>
                                    <p className={styles.date}>{event?.date}</p>
                                    <p className={styles.name}>{event?.eventName}</p>
                                </div>
                            </div>
                            <div className={styles.goto}>
                                <img src="/rightCrr.svg" alt=">"></img>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.newEventbtn}>
                <button>Create New Event +</button>
            </div>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        {isYearsView ? (
                            <>
                                <div className={styles.modalHeader}>
                                    <button onClick={handlePrevYears}>{"<"}</button>
                                    <h2>Choose Year</h2>
                                    <button onClick={handleNextYears}>{">"}</button>
                                </div>
                                <div className={styles.yearsSelector}>
                                    {[...Array(12)].map((_, index) => {
                                        const year = startYear + index;
                                        return (
                                            <div
                                                key={index}
                                                className={styles.year}
                                                onClick={() => handleSelectYear(year)}
                                            >
                                                {year}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            <>
                                <h2
                                    className={styles.modalHeader}
                                    onClick={() => setIsYearsView(true)}
                                >
                                    {currentDate.getFullYear()}
                                </h2>
                                <div className={styles.monthSelector}>
                                    {months.map((month, index) => (
                                        <div
                                            key={index}
                                            className={styles.month}
                                            onClick={() => handleSelectMonth(index)}
                                        >
                                            {month}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}