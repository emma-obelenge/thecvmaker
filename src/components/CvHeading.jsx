import "../styles/cvHeading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const CvHeading = () => {
  function isNameValid() {
    return true;
  }
  return (
    <div className="cvHeading-container">
      <h3>How should employers reach you?</h3>

      <div className="instructions">
        <p>Please provide both an email address and a phone number.</p>
        <p>* indicates a required field</p>
      </div>

      <form id="contactForm" aria-labelledby="formHeading">
        {/* 1. Name */}
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <div className="input-container">
            <input
              type="text"
              id="name"
              name="name"
              required
              //   onChange={handleNameChange} // Use React event handler
            />
            {/* Checkmark visibility controlled by state */}
            <span
              className={`check-icon ${
                isNameValid ? "check-visible" : "check-hidden"
              }`}
            >
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "green", opacity: "0.7" }}
              />
              <FontAwesomeIcon
                icon={faCircleExclamation}
                style={{ color: "red", opacity: "0.7" }}
              />
            </span>
          </div>
        </div>

        {/* 2. Surname (Example without dynamic check for simplicity) */}
        <div className="form-group surname">
          <label htmlFor="surname">SURNAME</label>
          <div className="input-container">
            <input type="text" id="surname" name="surname" required />
            <span className="check-icon check-hidden" aria-hidden="true"></span>
          </div>
        </div>

        {/* 3. City */}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <div className="input-container">
            <input type="text" id="city" name="city" required />
            <span className="check-icon check-hidden" aria-hidden="true"></span>
          </div>
        </div>

        <div className="input countryNcode form-group">
          {/* 4. Postcode */}
          <div>
            <label htmlFor="postcode">Postcode:</label>
            <div className="input-container">
              <input type="text" id="postcode" name="postcode" required />
              <span
                className="check-icon check-hidden"
                aria-hidden="true"
              ></span>
            </div>
          </div>

          {/* 5. Country */}
          <div>
            <label htmlFor="country">Country:</label>
            <div className="input-container">
              <input type="text" id="country" name="country" required />
              <span
                className="check-icon check-hidden"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>

        {/* 6. Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <div className="input-container">
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{11}"
              placeholder="08012345678"
              required
            />
            <span className="check-icon check-hidden" aria-hidden="true"></span>
          </div>
        </div>

        {/* 7. Email */}
        <div className="form-group email">
          <label htmlFor="email">Email:</label>
          <div className="input-container">
            <input type="email" id="email" name="email" required />
            <span className="check-icon check-hidden" aria-hidden="true"></span>
          </div>
        </div>

        {/* <div className="submit-btn-container">
          <button type="submit">Submit</button>
        </div> */}
      </form>
    </div>
  );
};

export default CvHeading;
