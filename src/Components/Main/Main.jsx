import "./Main.css";

const Main = () => {
  return (
    <div>
      <div>
        <div className="Value-view-container">
          <div className="Value-view">
            <span >Words </span>
            <span style={{ color: "black", fontSize: "20px" }}>0</span>
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
            <textarea name="TextArea" className="textArea"  cols="100" rows="40" placeholder="Please Enter Text"></textarea>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
