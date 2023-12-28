import { useState } from "react";
import SearchBox from "../../Components/SearchBox";
import React from "./Therapists.scss";
import { IoIosArrowUp } from "react-icons/io";
import { HiCheckBadge } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineAttachEmail } from "react-icons/md";
import TherapistsList from "../../Data/Therapists";
import { Link } from "react-router-dom";

const Therapists = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const hundleFilterSection = () => {
    if (activeFilter === "active") {
      setActiveFilter("");
    } else {
      setActiveFilter("active");
    }
  };

  return (
    <div className="therapists">
      <section>
        <h1>Find a Therapist in your location</h1>
        <div className="search">
          <SearchBox />
        </div>
      </section>
      <main>
        <div className="sidebar">
          <div className="top">
            <h3>Filter</h3>
            <span>clear all</span>
          </div>

          <div className="categories">
            {/* Price filter */}
            <article>
              <div className="top">
                <h3>Prices</h3>
                <div className="icon" onClick={() => hundleFilterSection()}>
                  <IoIosArrowUp />
                </div>
              </div>
              <ul className={`filter_items ${activeFilter}`}>
                <li>
                  <input type="radio" name="price_check" />
                  <small>$ (less than $90)</small>
                </li>
                <li>
                  <input type="radio" name="price_check" />
                  <small>$$ ($90 to $130)</small>
                </li>
                <li>
                  <input type="radio" name="price_check" />
                  <small>$$$ ($130 to $150)</small>
                </li>
                <li>
                  <input type="radio" name="price_check" />
                  <small>$$$$ (Over $150)</small>
                </li>
              </ul>
            </article>

            {/* Gender filter */}
            <article>
              <div className="top">
                <h3>Gender</h3>
                <div className="icon" onClick={() => hundleFilterSection()}>
                  <IoIosArrowUp />
                </div>
              </div>
              <ul className={`filter_items ${activeFilter}`}>
                <li>
                  <input type="radio" name="gender_check" />
                  <small>Male</small>
                </li>
                <li>
                  <input type="radio" name="gender_check" />
                  <small>Female</small>
                </li>
                <li>
                  <input type="radio" name="gender_check" />
                  <small>Non - Binary</small>
                </li>
              </ul>
            </article>

            {/* Therapy type filter */}
            <article>
              <div className="top">
                <h3>Therapy Type</h3>
                <div className="icon" onClick={() => hundleFilterSection()}>
                  <IoIosArrowUp />
                </div>
              </div>
              <ul className={`filter_items ${activeFilter}`}>
                <li>
                  <input type="radio" name="type_check" />
                  <small>Couple Counseling</small>
                </li>
                <li>
                  <input type="radio" name="type_check" />
                  <small>Family Therapy</small>
                </li>
                <li>
                  <input type="radio" name="type_check" />
                  <small>Cognitive Behavioral</small>
                </li>
                <li>
                  <input type="radio" name="type_check" />
                  <small>Play Therapy</small>
                </li>
                <li>
                  <input type="radio" name="type_check" />
                  <small>Trauma Forced</small>
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div className="therapists_list">
          {TherapistsList.map(
            ({ id, img, fullname, role, bio, location, phone, email }) => (
              <div className="therapist_box" key={id}>
                <div className="img">
                  <img src={img} alt="" />
                </div>
                <div className="middle">
                  <div className="name">
                    <h3>{fullname}</h3>
                    <div className="icon">
                      <HiCheckBadge />
                    </div>
                    <small>Verified</small>
                  </div>
                  <div className="role">{role}</div>
                  <p className="bio">{bio}</p>

                  <div className="tags">
                    <div className="tag">New Client Accepted</div>
                    <div className="tag tag-grey">Online Therapy</div>
                  </div>
                </div>
                <div className="info">
                  <li>
                    <SlLocationPin />
                    <small>{location}</small>
                  </li>
                  <li>
                    <LiaPhoneVolumeSolid />
                    <small>{phone}</small>
                  </li>
                  <li>
                    <MdOutlineAttachEmail />
                    <small>{email}</small>
                  </li>
                  <Link className="btn" to={`/therapists/${id}`}>
                    View Details
                  </Link>
                  <button className="btn btn-primary">Appointment</button>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Therapists;
