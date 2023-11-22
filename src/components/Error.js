import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include the CSS for the WYSIWYG editor

export default function Error() {
  const [editorHtml, setEditorHtml] = useState(''); // Hold the editor content

  function handleEditorChange(html) {
    setEditorHtml(html);
  }

  // The modules object is used to customize the toolbar options
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // Match visual, not literal, whitespace
      matchVisual: false,
    }
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        theme="snow" // this prop is optional
      />
    </div>
  );
}
