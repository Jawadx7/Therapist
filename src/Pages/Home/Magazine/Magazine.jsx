import "./Magazine.scss";
import Post1 from "../../../asserts/magazine-1.png";
import Post2 from "../../../asserts/magazine-2.png";
// import { FaCheck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";
import { PiMedalFill } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { BsCalendar3Event } from "react-icons/bs";

const Magazine = () => {
  return (
    <section className="magazine">
      {/* first post */}

      <div className="post post1">
        <div className="text">
          <h1>Strengthen Mental Health and Wellness</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            soluta at temporibus laboriosam quisquam. Quidem officia dignissimos
            animi commodi ullam, quae rerum, ipsa necessitatibus dolore
            excepturi ratione laudantium sunt voluptatibus.
          </p>

          <button className="btn btn-primary">Try for free</button>

          <ul className="checkList">
            <li>
              <FaCheck className="icon" />
              Guidance you can trust
            </li>
            <li>
              <FaCheck className="icon" />
              Skills for life success
            </li>
            <li>
              <FaCheck className="icon" />
              Strategies to feel better
            </li>
            <li>
              <FaCheck className="icon" />
              Strategies to overcome stress
            </li>
          </ul>
        </div>
        <div className="post_img">
          <img src={Post1} alt="" />
        </div>
      </div>

      {/* second post */}

      <div className="post post2">
        <div className="post_img">
          <img src={Post2} alt="" />
        </div>

        <div className="text">
          <h1>Reasons to choose us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            soluta at temporibus laboriosam quisquam. Quidem officia dignissimos
            animi commodi ullam, quae rerum, ipsa necessitatibus dolore
            excepturi ratione laudantium sunt voluptatibus.
          </p>

          <ul className="checkList">
            <li>
              <CiBadgeDollar />
              Absolutely free of charge
            </li>
            <li>
              <PiMedalFill />
              Qualified Therapists
            </li>
            <li>
              <MdDashboard />
              Personalized Dashboard
            </li>
            <li>
              <BsCalendar3Event />
              Convenient
            </li>
          </ul>

          <button className="btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
