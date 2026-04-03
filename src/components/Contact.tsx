import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  const { contact, hero, education } = portfolioData;
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${contact.email}`} data-cursor="disable">
                {contact.email}
              </a>
            </p>
            <h4>Education</h4>
            <p>{education[0].degree} – {education[0].field}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={contact.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{hero.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
