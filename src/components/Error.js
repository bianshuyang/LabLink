import { useRouteError } from "react-router-dom";
import sjcl from 'sjcl';
import React, { useState, useEffect } from 'react';
import "../styles/forum.css";
import { Link } from "react-router-dom"
import Navbar from './Navbar.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function hashPassword(password) {
  try{
    return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(password));
  }
  catch(error){
    console.error("Error hashing password:", error);
  }
}



export default function Error() {
  const error = useRouteError();
  console.error(error);
  const i = 0;
  return (


    


    <div className="App">
                <CKEditor
                    editor={ ClassicEditor }

                    onReady={editor=>{}}
onChange={(event, editor) => {
    try {

        const data = editor.getData();
        
    } catch (error) {
        console.error('Error in editor onChange:', error);
    }
}}


                />
            </div>

  );
}
