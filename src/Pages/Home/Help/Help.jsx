import "./Help.scss";
import { useState } from "react";
import Account from "../../../asserts/account.png";

const Help = () => {
  const [activeItem, setActive] = useState("account");

  return (
    <section className="help">
      <div className="top">
        <h1>Allow me to explain the functioning process</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
          dolor praesentium iste, harum enim quo minima accusantium expedita
          libero sapiente cumque nostrum ab assumenda delectus, unde magni amet
          rerum?
        </p>
      </div>
      <div className="main">
        <div className="navigation">
          <li
            onClick={() => setActive("account")}
            className={activeItem === "account" ? "active" : ""}
          >
            <h3>Create an account</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              veritatis officiis reiciendis quos? Molestias obcaecati totam
              doloribus, labore dignissimos sit.
            </p>
          </li>
          <li
            onClick={() => setActive("assessment")}
            className={activeItem === "assessment" ? "active" : ""}
          >
            <h3>Assessment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              veritatis officiis reiciendis quos? Molestias obcaecati totam
              doloribus, labore dignissimos sit.
            </p>
          </li>
          <li
            onClick={() => setActive("consultation")}
            className={activeItem === "consultation" ? "active" : ""}
          >
            <h3>Consultation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              veritatis officiis reiciendis quos? Molestias obcaecati totam
              doloribus, labore dignissimos sit.
            </p>
          </li>
          <li
            onClick={() => setActive("treatment")}
            className={activeItem === "treatment" ? "active" : ""}
          >
            <h3>Treatment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              veritatis officiis reiciendis quos? Molestias obcaecati totam
              doloribus, labore dignissimos sit.
            </p>
          </li>
        </div>
        <div className="content">
          <h1 className={activeItem === "account" ? "active" : ""}>
            <img src={Account} alt="" />
          </h1>
          <h1 className={activeItem === "assessment" ? "active" : ""}>
            Assessment
          </h1>
          <h1 className={activeItem === "consultation" ? "active" : ""}>
            Consultation
          </h1>
          <h1 className={activeItem === "treatment" ? "active" : ""}>
            Treatment
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Help;
