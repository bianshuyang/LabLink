import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include the CSS for the WYSIWYG editor

export default function Error() {
  const [editorHtml, setEditorHtml] = useState(''); // Hold the editor content

  function handleEditorChange(html) {
    setEditorHtml(html);
  }

  // Custom toolbar options
  const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    ['link', 'image', 'video'],
    ['emoji'],
    ['clean']                                         // remove formatting
  ];

  // The modules object is used to customize the toolbar options
  const modules = {
    toolbar: toolbarOptions,
    clipboard: {
      // Match visual, not literal, whitespace
      matchVisual: false,
    },
    // Include additional modules here
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'script',
    'direction', 'emoji'
    // Include additional formats here
  ];

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
}
