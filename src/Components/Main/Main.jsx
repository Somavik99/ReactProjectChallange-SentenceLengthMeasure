import "./Main.css";

const Main = () => {
  return (
    <div>
      <div>
        <div className="Value-view-container">
          <div className="Value-view">
            <span>Words </span>
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
          <textarea
            name="TextArea"
            className="textArea"
            rows="15"
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
