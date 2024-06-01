export interface CaseInterface {
    CaseName: string;
    ClientName: string;
    Status: "Active" | "Archived";
    DateStarted: string; 
}
export interface userInterface {
    imageUrl: string;
    name: string;
    qualifications: {
        highestQualification: string;
        casesSolved: number;
    };
    about: string;
    contact : {
        email: string;
        phone: number;
        address: string;
        aadhaar: string;
    }
}
export interface noticesInterface {
    title: string;
    content: string;
    isNew: boolean;
}
export interface invoicesInterface {
    title: string;
    content: string;
}