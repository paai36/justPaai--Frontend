export interface CaseInterface {
    CaseName: string;
    ClientName: string;
    Status: "O" | "A";
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
    contact: {
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
export enum invoiceStatus {
    paid = "Paid",
    pending = "Pending",
}
export interface invoicesInterface {
    title: string;
    content: string;
    status: invoiceStatus;
    amount : number;
    date: string;
    due_date: string;
    invoiceNumber: number;
}
export interface invoiceItemInterface {
    itemName: string;
    hours: number;
    rate: number;
}
export interface notesInterface {
    noteTitle: string;
    noteContent: string;
    Type: string;
    Date: string;
}