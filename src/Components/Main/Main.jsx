import { useState } from "react";
import "./Main.css";

const Main = () => {

    const [ChangeText,setChangeText] = useState("")

    const HandleChange = (e)=>{
        setChangeText(e.target.value)
        console.log(e.target.value)
    }

const WordChange = ()=>{
 
}

  return (
    <div>
      <div>
        <div className="Value-view-container">
          <div className="Value-view">
            <span >Words </span>
            <span style={{ color: "black", fontSize: "20px" }} onChange={WordChange}>0</span>
          </div>
          <div className="Value-view">
            <span>Characters</span>
            <span style={{ color: "black", fontSize: "20px" }}>0</span>
          </div>
          <div className="Value-view">
            <span>Sentences</span>
            <span style={{ color: "black", fontSize: "20px" }}>0</span>
          </div>
          <div className="Value-view">
            <span>Paragraphs</span>
            <span style={{ color: "black", fontSize: "20px" }}>0</span>
          </div>
          <div className="Value-view">
            <span>Pronouns</span>
            <span style={{ color: "black", fontSize: "20px" }}>0</span>
          </div>
        </div>
        <div id="Text">
          <textarea
          value={ChangeText}
            name="TextArea"
            className="textArea"
            rows="14"
            onChange={HandleChange}
            placeholder="Paste Your Text..."
          ></textarea>
        </div>
        <div className="Main-foot">
          <div>
            <span>Average Reading Time: </span>
          </div>
          <div>
            <span>Longest word: </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
