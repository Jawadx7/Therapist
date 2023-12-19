import "./Footer.scss";
import Logo from "../Logo";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <h3>Join our newsletter</h3>
          <p>We'll send you a nice letter once per week. No spam</p>
        </div>
        <div className="right">
          <input type="text" placeholder="Enter your email" />
          <button className="btn btn-primary">Subscriber</button>
        </div>
      </div>
      <div className="middle">
        <div>
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Find a therapist</li>
            <li>Proof policy</li>
            <li>Wellbeing A-Z</li>
            <li>Helplines</li>
          </ul>
        </div>
        <div>
          <h3>Shop</h3>
          <ul>
            <li>Buy in prints</li>
            <li>Store location</li>
            <li>Contributors</li>
            <li>FAQs</li>
            <li>Pledges</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>The team</li>
            <li>Contact us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>We's a B Corp</li>
          </ul>
        </div>
        <div>
          <h3>Stay in Touch</h3>
          <ul>
            <li>Submit Your Story</li>
            <li>Partner With Us</li>
            <li>Who We Are</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Jobs & Internships</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Logo />
        <div className="social">
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <RiTwitterXFill />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
        <small>
          &copy; 2023 | Therapist Coorperation LLC. All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
