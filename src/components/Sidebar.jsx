import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="resume-tabs">
      <ul>
        <li>
          <span className="index heading active">1</span>
          <span>Heading</span>
        </li>
        <li>
          <span className="index experience">2</span>
          <span>Experience</span>
        </li>
        <li>
          <span className="index education">3</span>
          <span>Education</span>
        </li>
        <li>
          <span className="index skills">4</span>
          <span>Skills</span>
        </li>
        <li>
          <span className="index summary">5</span>
          <span>Summary</span>
        </li>
        <li>
          <span className="index finalize" id="last-item">
            6
          </span>
          <span>Finalize</span>
        </li>
      </ul>
      <div className="cv-completeness">
        <label htmlFor="resume-completeness">RESUME COMPLETENESS</label>
        <input
          type="range"
          id="resume-completeness"
          name="resume-completeness"
          min="0"
          max="100"
          value="0"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>0%</output>
      </div>
      <footer>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
        <a href="">Assesibility</a>
        <a href="">Contact Us</a>
        <div>
          <span>&copy; 2025, NooTekDS.</span>
          <span> All rights reserved.</span>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
