import React from "react";

export default function About(props) {
  return (
    <>
      <h1 style={{ color: props.mode === "light" ? "#198754" : "#53d79a" }}>
        {props.heading}
      </h1>

      <p style={{ color: props.mode === "light" ? "black" : "white" }}>
        Welcome to our website, a versatile online tool designed for efficient
        text manipulation. From converting text case to counting words and
        characters, our platform simplifies editing tasks. With real-time
        preview and time estimation features, we empower users to enhance
        productivity and readability. Join us on your text editing journey!
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#333b37",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              What is This Website About?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#333b37",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              This website provides a user-friendly platform for efficient text
              manipulation. With features like converting text case, counting
              words and characters, and real-time preview, it simplifies editing
              tasks. The goal is to empower users to enhance productivity and
              readability.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#333b37",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Who Can Use This Website?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#333b37",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              This website is designed for anyone who works extensively with
              text. Whether you're a student, a professional, or simply someone
              who needs to manipulate text regularly, this platform is tailored
              to streamline your tasks and improve efficiency.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#333b37",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#333b37",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              If you have any questions, suggestions, or feedback, please feel
              free to reach out. Your input is valued and the commitment is to
              improve this website to better serve your needs. You can contact
              via email at{" "}
              <a href="mailto:rishita.das.work@gmail.com">
                rishita.das.work@gmail.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>

      {/* <button type="button" onClick={toggleMode} className="btn btn-success my-3">
    {currentMode}
</button> */}
    </>
  );
}
