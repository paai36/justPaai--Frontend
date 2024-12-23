"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
import api from "../../axios";

function CaseRow({
  caseData,
  toggleSelection,
  isSelected,
}: {
  caseData: CaseInterface;
  toggleSelection: (id: string) => void;
  isSelected: boolean;
}) {
  //function for each row of case
  return (
    <div className={styles.caseRow}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelection(caseData.id)}
      />
      <p className={styles.caseName}>{caseData.CaseName}</p>
      <p className={styles.clientName}>{caseData.ClientName}</p>
      <p
        className={
          caseData?.Status === "A" ? styles.statusArch : styles.statusActive
        }
      >
        {caseData.Status === "A" ? "Archived" : "Active"}
      </p>
      <p className={styles.DateStarted}>{caseData.DateStarted}</p>
      <p className={styles.viewbtn}>view &#62;</p>
    </div>
  );
}

export default function allCases() {
  //currently using ClientSide Rendering if server side is to be used later then remove "use client" from the top of the page
  const allCasesDummy: CaseInterface[] = [
    // {
    //   CaseName: "Haryana Dairy nuaray, 1947",
    //   ClientName: "Keshav Jalan",
    //   DateStarted: "09 Jan 2024",
    //   Status: "O",
    // },
    // {
    //   CaseName:
    //     "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //   ClientName: "Keshav Jalan",
    //   DateStarted: "09 Jan 2024",
    //   Status: "A",
    // },
    // {
    //     CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //     ClientName: "Keshav Jalan",
    //     DateStarted: "09 Jan 2024",
    //     Status: "A",
    // },
    // {
    //     CaseName: "hsrh fhusssshsssssrugh rehgehtgiohe tuhg oteh ggggh hhhhhhhhh iu ghuihrguiheuigheuh gegewtuhg uiethgiuph",
    //     ClientName: "Keshav Jalan",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
    // {
    //     CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //     ClientName: "Keshav Jalan",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
    // {
    //     CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //     ClientName: "Ritik Chandra",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
    // {
    //     CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //     ClientName: "Keshav Jalan",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
    // {
    //     CaseName: "hsrh fhusssshsssssrugh rehgehtgiohe tuhg oteh ggggh",
    //     ClientName: "Keshav Jalan",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
    // {
    //     CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //     ClientName: "Keshav Jalan",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
    // {
    //     CaseName: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    //     ClientName: "Ritik Chandra",
    //     DateStarted: "09 Jan 2024",
    //     Status: "O",
    // },
  ];
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("All");
  const [sortedCases, setSortedCases] = useState<CaseInterface[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayCases, setDisplayCases] = useState<CaseInterface[]>([]);
  const [selectedCases, setSelectedCases] = useState<Set<string>>(new Set());

  const casesListRef = useRef<HTMLDivElement>(null);

  const fetchCases = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await api.get(`/cases/?p=${page}`);
      const { data, current_page, max_pages } = response.data;

      const transformedData = data.map((caseItem: any) => ({
        CaseName: caseItem.case_name,
        ClientName: caseItem.client_name,
        DateStarted: caseItem.date_started,
        Status: caseItem.status,
        id: caseItem.id,
      }));

      setSortedCases((prevCases) => {
        const existingIds = new Set(prevCases?.map((caseItem) => caseItem.id));
        const uniqueCases = transformedData.filter(
          (caseItem) => !existingIds.has(caseItem.id)
        );
        if (prevCases != null) {
          return [...prevCases, ...uniqueCases];
        } else {
          return [...uniqueCases];
        }
      });
      setDisplayCases((prevCases) => {
        const existingIds = new Set(prevCases?.map((caseItem) => caseItem.id));
        const uniqueCases = transformedData.filter(
          (caseItem) => !existingIds.has(caseItem.id)
        );
        if (prevCases != null) {
          return [...prevCases, ...uniqueCases];
        } else {
          return [...uniqueCases];
        }
      });

      setCurrentPage(current_page);
      setMaxPages(max_pages);
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchInitialCases = async () => {
      await fetchCases(1);
      await fetchCases(2);
    };

    fetchInitialCases();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const listElement = casesListRef.current;
      if (!listElement) return;

      const { scrollTop, scrollHeight, clientHeight } = listElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        !isLoading &&
        currentPage <= maxPages
      ) {
        fetchCases(currentPage + 1);
      }
    };

    const listElement = casesListRef.current;
    listElement?.addEventListener("scroll", handleScroll);

    return () => listElement?.removeEventListener("scroll", handleScroll);
  }, [currentPage, maxPages, isLoading]);

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
    let filteredCases = sortedCases?.filter(
      (caseData) =>
        caseData.CaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseData.ClientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterType === "Active") {
      filteredCases = filteredCases?.filter(
        (caseData) => caseData.Status === "O"
      );
    } else if (filterType === "Archived") {
      filteredCases = filteredCases?.filter(
        (caseData) => caseData.Status === "A"
      );
    }

    filteredCases?.sort(
      (a, b) =>
        new Date(b.DateStarted).getTime() - new Date(a.DateStarted).getTime()
    );
    setDisplayCases(filteredCases);
  };

  const toggleSelection = (id: string) => {
    setSelectedCases((prevSelected) => {
      const newSet = new Set(prevSelected);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    console.log(selectedCases);
  }, [selectedCases]);

  function AddCase() {
    router.push("/newCase");
  }

  const Delete = async () => {
    // console.log("Delete")
    const casesToDelete = Array.from(selectedCases);
    try {
      for (const caseId of casesToDelete) {
        await api.delete(`/cases/edit/`, {
          data: {
            case_uid: caseId,
          },
        });
      }
      // Remove deleted cases from state
      setSortedCases((prevCases) =>
        prevCases.filter((caseData) => !selectedCases.has(caseData.id))
      );
      setDisplayCases((prevCases) =>
        prevCases.filter((caseData) => !selectedCases.has(caseData.id))
      );

      // Clear selected cases
      setSelectedCases(new Set());
    } catch (error) {
      console.error("Error deleting cases:", error);
    }
  };

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
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
            <div className={styles.filterSort}>
              {/* filters and Sort are yet to be decided */}
              <select
                className={styles.filter}
                value={filterType}
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Archived">Archived</option>
              </select>
              {/* <select className={styles.sort}>
                <option>Date</option>
                <option>TEST2</option>
              </select> */}
            </div>
          </div>
          <div className={styles.cases}>
            <div className={styles.top}>
              <p className={styles.name}>Case Name</p>
              <p className={styles.client}>Client Name</p>
              <p className={styles.status}>Status</p>
              <p className={styles.date}>Date Started</p>
            </div>
            <div className={styles.casesList} ref={casesListRef}>
              {displayCases?.map((caseData: CaseInterface, index: number) => (
                <li key={index}>
                  <CaseRow
                    caseData={caseData}
                    toggleSelection={toggleSelection}
                    isSelected={selectedCases.has(caseData.id)}
                  />
                </li>
              ))}
              {isLoading && (
                <div className={styles.loaderWrapper}>
                  <div className={styles.loader}></div>
                </div>
              )}
            </div>
            <div className={styles.bottom}>
              <div className={styles.delete} onClick={Delete}>
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
