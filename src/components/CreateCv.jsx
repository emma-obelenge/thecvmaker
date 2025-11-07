import "../styles/CreateCv.css";
import CvHeading from "./cvHeading";
import Sidebar from "./Sidebar";
import Button from "./Button";

const CreateCv = () => {
  return (
    <div className="create-cv-container">
      <Sidebar />
      <div className="main-outer-container">
        <a href="" className="back-btn">
          Go Back
        </a>
        <main className="main-content">
          <CvHeading />
          <div className="right-panel">
            Live Preview will show here
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
            <pre>Live Preview will show here</pre>
          </div>
        </main>
        <div className="bottom">
          <button className="preview">Preview</button>
          <button className="next">Next: Experience</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCv;
