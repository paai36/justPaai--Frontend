"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { CaseInterface } from "../../interfaces";
import { useRouter } from "next/navigation";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

export default function newCase() {
    const [droppedFiles, setDroppedFiles] = useState<File[]>();
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [formData, setFormData] = useState({
        caseTitle: "",
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientAadhaar: "",
        opponentName: "",
        opponentEmail: "",
        opponentPhone: "",
        opponentAadhaar: "",
        relevantFiles: [],
        caseSummary: ""
    });
    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filesList = e.target.files;
        if (filesList) {
            const filesArray = Array.from(filesList);
            if (droppedFiles)
                setDroppedFiles([...droppedFiles, ...filesArray]);
            else
                setDroppedFiles(filesArray);
        }
    };
    const handleSubmit = (e : any) => {
        e.preventDefault();
        // Perform API call with formData
        console.log("Form data:", formData);
    };
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        const contentState = editorState.getCurrentContent();
        const htmlContent = stateToHTML(contentState);
        setFormData(prevState => ({
            ...prevState,
            caseSummary: htmlContent
        }));
        console.log("Editor content:", htmlContent);
    };
    return (
        <div className={styles.main}>
            <h1>New Case</h1>
            <div className={styles.mainWrapper}>
                <form>
                    <input
                        type="text"
                        placeholder="Enter Case Title"
                        required
                        className={styles.caseTitle} />
                    <div className={styles.clientInfo}>
                        <label className={styles.sectionLabel}>Client Info</label>
                        <div className={styles.top}>
                            <label>Name of the Client</label>
                            <input type="text"
                                id="name"
                                name="name"
                                required />
                        </div>
                        <div className={styles.mid}>
                            <div>
                                <label>Email</label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    required />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input type="tel"
                                    id="phone"
                                    name="phone"
                                    required />
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <label>Aadhaar ID Number</label>
                            <input type="number"
                                id="aadhaar"
                                name="aadhaar"
                                required />
                        </div>
                    </div>
                    <div className={styles.opponentInfo}>
                        <label className={styles.sectionLabel}>Opponent Info</label>
                        <div className={styles.top}>
                            <label>Name of the Opponent</label>
                            <input type="text"
                                id="name"
                                name="name"
                                required />
                        </div>
                        <div className={styles.mid}>
                            <div>
                                <label>Email</label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    required />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input type="tel"
                                    id="phone"
                                    name="phone"
                                    required />
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <label>Aadhaar ID Number</label>
                            <input type="number"
                                id="aadhaar"
                                name="aadhaar"
                                required />
                        </div>
                    </div>
                    <div className={styles.file}>
                        <label className={styles.sectionLabel}>Relevant Files</label>
                        <div className={styles.wrapper}>
                            <input
                                type='file'
                                id='fileInput'
                                className={styles.fileInputBrowse}
                                multiple
                                onChange={handleFileInputChange}
                            ></input>
                            {droppedFiles?.map((file, index) => (
                                <li key={index}>
                                    {file.type === "application/pdf" && <img src="/pdf-svgrepo-com.svg" alt="" height={20} width={20} />}
                                </li>
                            ))}
                            <label htmlFor="fileInput" className={styles.plus}>+</label>
                        </div>
                    </div>
                    <div className={styles.caseSummary}>
                        {/* <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            toolbar={{
                                options: ['inline', 'fontSize', 'list', 'textAlign', 'colorPicker'],
                                inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
                                list: { options: ['unordered', 'ordered'] },
                                fontSize: {options: [2,16,78]}
                            }}
                            placeholder='Enter Your Case Summary here (Markdown Supported)'
                            onEditorStateChange={onEditorStateChange}
                        /> */}
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.back}>
                            Go back
                        </button>
                        <button className={styles.save}>
                            Save Case Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}