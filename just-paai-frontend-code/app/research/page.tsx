"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { invoicesInterface } from "../../interfaces";
import { invoiceStatus } from "../../interfaces";
import { invoiceItemInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import { notesInterface } from "../../interfaces";
function NoteRow({ noteData }: { noteData: notesInterface }) {
    return (
        <div className={styles.noteRow}>
            <input type="checkbox">
            </input>
            <div className={styles.noteContent}>
                <h3>{noteData?.noteTitle}</h3>
                <p>{noteData?.noteContent}</p>
            </div>
            <p className={styles.type}>{noteData.Type}</p>
            <p className={styles.date}>{noteData.Date}</p>
            <p className={styles.viewbtn}>&#62;</p>
        </div>
    )
}

export default function research() {
    const allNotesDummy: notesInterface[] = [{
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "u gfiuehguihwi ughweuig hiehguighuihg iheguihoi y  gfwgf  gfrwuig  f gw hguihwi ughweuig hiehguighuihg iheguihoi y  gfwgf  gfrwuig  f gw hguihwi ughweuig hiehguighuihg iheguihoi y  gfwgf  gfrwuig  f gw hguihwi ughweuig hiehguighuihg iheguihoi y  gfwgf  gfrwuig  f gw",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    {
        noteTitle: "Haryana coop case Day - 3",
        noteContent: "India's judicial system is facing a crisis of excessive petty litigation, despite legislative efforts to curb this trend. Even with the amendment to Section 102 of the Code of Civil Procedure, 1908, which pro",
        Type: "Note",
        Date: "23 Jan 2021"
    },
    ]
    const handleSearch = () => {
        //handle Search Function
    }
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterType, setFilterType] = useState<string>("All");
    const [sortedCases, setSortedCases] = useState();
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const handleDelete = () => {
            //delete selected note(s)
    }
    return (
        <section className={styles.main}>
            <div className={styles.top}>
                <h3>Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947</h3>
                <div><p>Dahsboard</p> <img src="/rightCrr.svg" height={24} width={24}></img><p>Research</p><img src="/rightCrr.svg" height={24} width={24}></img> </div>
            </div>
            <div className={styles.searchBoxWrapper} style={isCollapsed ? { height: "20vh" } : { height: "30vh" }}>
                <div className={styles.t}>
                    <h3>Search From Millions Of Cases In Our Database. </h3>
                    <div onClick={() => setIsCollapsed(!isCollapsed)} className={styles.icon} >
                        <img src={isCollapsed ? "/expand.svg" : "/collapse.svg"} />
                    </div>
                </div>
                {!isCollapsed && (
                    <p className={styles.des}>Just enter the summary of your case, and we will go through all our case files using AI and display the ones which are similar to your case</p>
                )}
                <form className={styles.searchBox} onSubmit={() => handleSearch()}>
                    <input placeholder="Start Typing" style={isCollapsed ? { height: "3vh" } : { height: "6vh" }} />
                    <button onClick={() => handleSearch()}>Search</button>
                </form>
            </div>
            <div className={styles.notes}>
                <div className={styles.head}>
                    <h2>Your Notes</h2>
                    <button className={styles.newNote}>Create New Note +</button>
                </div>
                <div className={styles.actions}>
                    <div className={styles.searchWrapper}>
                        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
                    </div>
                    <div className={styles.filterSort}>
                        {/* filters and Sort are yet to be decided */}
                        <select className={styles.filter} value={filterType} onChange={handleFilterChange}>
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Archived">Archived</option>
                        </select>
                        <select className={styles.sort}>
                            <option>Date</option>
                            <option>TEST2</option>
                        </select>
                    </div>
                </div>
                <div className={styles.notes1}>
                    <div className={styles.top}>
                        <p className={styles.notes}>Notes</p>
                        <p className={styles.type}>Type</p>
                        <p className={styles.date}>Date Added</p>
                    </div>
                    <div className={styles.notesList}>
                        {allNotesDummy?.map((noteData: notesInterface, index: number) => (
                            <li>
                                <NoteRow noteData={noteData}></NoteRow>
                            </li>
                        ))}
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.delete} onClick={() => handleDelete()}>
                            Delete Selected Row
                            <img src="/allCases/bin.svg" alt="" height={15} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}