import React, { useState} from 'react'
import { InputTextarea } from "primereact/inputtextarea";
import './App.css'

function App() {
  const [content, setContent] = useState("")
  const clearBtnHandler =()=>{
    setContent("");
  }

  return (
    <>
      <label htmlFor="content">Content</label>
      <br />
      <InputTextarea
        id="content"
        type={"text"}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="Your Content Here"
        autoResize
        rows="3"
        cols="30"
      />
      <br />
      {content.split(" ").map((word, index) => {
        let bold = "";
        let normal = "";
        if (word.length > 8) {
          bold = word.slice(0, 3);
          normal = word.slice(3);
        } else {
          bold = word.slice(0, 2);
          normal = word.slice(2);
        }
        return (
          <React.Fragment key={index}>
            <b>{bold}</b>
            {normal}{" "}
          </React.Fragment>
        );
      })}
      <br />
      <br />
      <button onClick={clearBtnHandler}>Clear</button>
    </>
  );
}

export default App;
