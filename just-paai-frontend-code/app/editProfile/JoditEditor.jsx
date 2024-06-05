import React, { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import JoditEditor
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const MyEditor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        buttons: [
            '|', 'bold', 'italic', 'underline', '|',
            'ul', 'ol', '|', 'outdent', 'indent', '|',
            'font', 'fontsize', 'brush', 'paragraph', '|',
            'align', 'undo', 'redo', '|',
            'hr', 'eraser', 'fullsize', 'preview', '|'
        ],
        askBeforePasteFromWord: false,
        askBeforePasteHTML: false,
    };

    useEffect(() => {
        // This ensures the editor is only rendered on the client side
        if (typeof window !== 'undefined') {
            setContent(''); // Initial content
        }
    }, []);

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => {}}
        />
    );
};

export default MyEditor;
