import { GrGithub } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import "./Header.css";

const Header = () => {
  return (
    <div className="Main-Header">
      <div className="Header-container">
        <span className="Heading">Text Analyzer</span>
        <div className="Icon-container">
          <span style={{margin:"6px",padding:"4px"}}>
            <BsNewspaper />
          </span>
          <span style={{margin:"6px",padding:"4px"}}>
            <GrGithub />
          </span>
          <span style={{margin:"6px",padding:"4px"}}>
            <RiLinkedinFill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
