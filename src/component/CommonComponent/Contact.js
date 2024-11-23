import React from "react";
import CallIcon from "../../assest/call.svg";
import GmailIcon from "../../assest/mail.svg";
import FbIcon from "../../assest/facebook.svg";
import Linkedin from "../../assest/linkedin.svg";
import Github from "../../assest/github-1.png";
import Whatsapp from "../../assest/whatsapp.png";
const Contact = () => {
  return (
    <div className="pl-2">
      {/* <h4 className="text-gray-400 mb-5">
        <a
          href="https://www.facebook.com/emon.1630/"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src={FbIcon} alt="Linkedin icon" /> <span>/emon.1630</span>
        </a>
      </h4> */}
      <h4 className="text-gray-400 mb-5">
        <a
          href="https://www.linkedin.com/in/aremon/"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src={Linkedin} alt="Linkedin icon" /> <span>/in/aremon/</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-5">
        <a
          href="https://github.com/aremon86851"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src={Github} alt="Github icon" className="w-6" />{" "}
          <span>/aremon86851</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-5">
        <a
          href="https://wa.me/8801634571667"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src={Whatsapp} alt="Github icon" className="w-6" />{" "}
          <span>+880-16345-71667</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-5">
        <a
          href="tel:+880-16345-71667"
          target="__blank"
          className="flex items-center gap-5 justify-start "
        >
          <img src={CallIcon} alt="Call icon" /> <span>+880-16345-71667</span>
        </a>
      </h4>
      <h4 className="text-gray-400 mb-0">
        <a
          href="mailto:aremon86851@gmail.com"
          className="flex items-center gap-5 justify-start "
        >
          <img src={GmailIcon} alt="Gmail icon" />{" "}
          <span>aremon86851@gmail.com</span>
        </a>
      </h4>
    </div>
  );
};

export default Contact;
