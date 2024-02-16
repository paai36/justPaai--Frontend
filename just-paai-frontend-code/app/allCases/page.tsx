"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";


function CaseRow({ caseData }: { caseData: CaseInterface }) {
    //function for each row of case
    return (
        <div className={styles.caseRow}>
            <input type="checkbox">
            </input>
            <p className={styles.caseName}>{caseData.CaseName}</p>
            <p className={styles.clientName}>{caseData.ClientName}</p>
            <p className={caseData?.Status === "Archived" ? styles.statusArch : styles.statusActive}>{caseData.Status}</p>
            <p className={styles.DateStarted}>{caseData.DateStarted}</p>
            <p className={styles.viewbtn}>view &#62;</p>
        </div>
    )
}

export default function allCases() {
    //currently using ClientSide Rendering if server side is to be used later then remove "use client" from the top of the page
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
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterType, setFilterType] = useState<string>("All");
    const [sortedCases, setSortedCases] = useState<CaseInterface[]>(allCasesDummy);

    useEffect(() => {
        filterAndSortCases();
    }, [searchQuery, filterType]);

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };

    const filterAndSortCases = () => {
        let filteredCases = allCasesDummy.filter(caseData =>
            caseData.CaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            caseData.ClientName.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filterType === "Active") {
            filteredCases = filteredCases.filter(caseData => caseData.Status === "Active");
        } else if (filterType === "Archived") {
            filteredCases = filteredCases.filter(caseData => caseData.Status === "Archived");
        }

        filteredCases.sort((a, b) => new Date(b.DateStarted).getTime() - new Date(a.DateStarted).getTime());
        setSortedCases(filteredCases);
    };

    function AddCase() {
        router.push("/addCase");
    }

    function Delete() {
        // Implement delete case functionality
    }

    function Archive() {
        // Implement archive case functionality
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <h1>All Cases</h1>
                </div>
                <div className={styles.mainContent}>
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
                    <div className={styles.cases}>
                        <div className={styles.top}>
                            <p className={styles.name}>Case Name</p>
                            <p className={styles.client}>Client Name</p>
                            <p className={styles.status}>Status</p>
                            <p className={styles.date}>Date Started</p>
                        </div>
                        <div className={styles.casesList}>
                            {sortedCases?.map((caseData: CaseInterface, index: number) => (
                                <li>
                                    <CaseRow caseData={caseData}></CaseRow>
                                </li>
                            ))}
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.delete}>
                                Delete Selected Row
                                <img src="/allCases/bin.svg" alt="" height={15} />
                            </div>
                            <div className={styles.archive}>
                                Archive
                                <img src="/allCases/archive.svg" alt="" height={15} />
                            </div>
                        </div>
                    </div>
                    <button className={styles.newCase} onClick={() => AddCase()}>
                        Add New Case +
                    </button>
                </div>
            </div>
        </>
    );
}
