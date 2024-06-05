import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const MyEditor = () => {
    const editor = useRef(null);

    const config = {
        buttons: [
            'source', '|',
            'bold', 'italic', 'underline', '|',
            'ul', 'ol', '|',
            'outdent', 'indent', '|',
            'font', 'fontsize', 'brush', 'paragraph', '|',
            'align', 'undo', 'redo', '|',
            'hr', 'eraser', 'fullsize', 'preview'
        ],
        askBeforePasteFromWord: false,
        askBeforePasteHTML: false,
    };

    return (
        <JoditEditor
            ref={editor}
            value=""
            config={config}
            tabIndex={1}
            onBlur={newContent => console.log(newContent)}
            onChange={newContent => {}}
        />
    );
};

export default MyEditor;
