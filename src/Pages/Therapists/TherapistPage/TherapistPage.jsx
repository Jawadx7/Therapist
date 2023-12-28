import { useParams } from "react-router-dom";
import "./TherapistPage.scss";
import TherapistsList from "../../../Data/Therapists";
import { HiCheckBadge } from "react-icons/hi2";
import { LiaDollarSignSolid } from "react-icons/lia";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { TbCertificate } from "react-icons/tb";
import { useState } from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";

const TherapistPage = () => {
  const { id } = useParams();
  const therapist = TherapistsList.find(
    (therapist) => therapist.id.toString() === id
  );

  const [activeinfo, setActiveInfo] = useState("about");

  return (
    <main className="therapists_main">
      <section className="therapist_hero">
        <div className="info">
          <div className="profile">
            <div className="img">
              <img src={therapist.img} alt="" />
            </div>
            <div className="text">
              <div className="name">
                <h3>{therapist.fullname}</h3>
                <HiCheckBadge className="icon" />
              </div>
              <div className="role">{therapist.role}</div>
              <li>
                <LiaDollarSignSolid />
                <small>Individual Sessions $275</small>
              </li>
              <li>
                <HiOutlineCircleStack />
                <small>In Practice for 10 Years</small>
              </li>
              <li>
                <TbCertificate />
                <small>Dgree / Diploma from Columbia University</small>
              </li>

              <div className="tags">
                <div className="tag">New Client Accepted</div>
                <div className="tag tag-grey">Online Therapy</div>
              </div>
            </div>
          </div>
          <div className="navigators">
            <a href="#about" className="btn">
              About
            </a>
            <a href="#finance" className="btn">
              Finances
            </a>
            <a href="#specialities" className="btn">
              Specialities and Expertise
            </a>
            <a href="#treatment" className="btn">
              Treatment Approach
            </a>
            <a href="#client" className="btn">
              Client Focus
            </a>
          </div>
          <div className="navigators_info">
            <div id="about">
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                consequatur quos commodi fugit quas reiciendis assumenda id
                laudantium consequuntur neque fugiat perferendis impedit
                molestias reprehenderit veritatis odit magni esse, aut repellat
                veniam rerum placeat velit voluptas! Beatae tempora voluptatum
                rerum qui, voluptate reiciendis. Exercitationem illo cumque,
                tempora laudantium dicta explicabo repellendus itaque, quis
                saepe facere odio facilis incidunt impedit doloribus, doloremque
                dolorem veniam culpa voluptatem nostrum tempore autem ducimus?
                Laborum quibusdam temporibus voluptatibus, quam atque facere, ut
                iusto illum numquam corrupti necessitatibus odit ducimus ratione
                laudantium. Soluta suscipit voluptatum, quaerat illo nihil
                libero molestiae beatae tempora, voluptates tenetur corporis
                distinctio?
              </p>
            </div>
          </div>
        </div>
        <div className="contact_details">
          <div className="connect">
            <h3>Les's Connect</h3>
            <li>
              <LiaPhoneVolumeSolid />
              <small>{therapist.phone}</small>
            </li>
            <li>
              <MdOutlineAttachEmail />
              <small>{therapist.email}</small>
            </li>
            <button className="btn btn-primary">Appointment</button>
          </div>
          <div className="practice">
            <h3>My Practice at a Glance</h3>
            <li>
              <SlLocationPin />
              <small>{therapist.location}</small>
            </li>

            <div className="btns">
              <button className="btn">Email Me</button>
              <button className="btn">My Website</button>
            </div>
            <hr />

            <li>
              <SlLocationPin />
              <small>
                I am offering both Telehealth (video sessions) and office visits
              </small>
            </li>
            <li>
              <GoPeople />
              <small>Available both in-person and online</small>
            </li>
          </div>
        </div>
      </section>

      <section id="finance" className="other_content">
        <h3>Finances</h3>
        {/* <div className="divs">
          <div>
            <h4>Frees</h4>
            <li>
              <GoPeople />
              <small>Available both in-person and online</small>
            </li>
            <li>
              <GoPeople />
              <small>Available both in-person and online</small>
            </li>
            <li>
              <GoPeople />
              <small>Available both in-person and online</small>
            </li>
          </div>

          <div>
            <h4>Insurance</h4>
          </div>
          <div className="box">
            <h3>My Practice at a Glance</h3>
            <div className="btns">
              <button className="btn">Email Me</button>
              <button className="btn">My Website</button>
            </div>
          </div>
        </div> */}
      </section>
      <section id="specialities" className="other_content">
        <h3>Speciality</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consequatur quos commodi fugit quas reiciendis assumenda id laudantium
          consequuntur neque fugiat perferendis impedit molestias reprehenderit
          veritatis odit magni esse, aut repellat veniam rerum placeat velit
          voluptas! Beatae tempora voluptatum rerum qui, voluptate reiciendis.
          Exercitationem illo cumque, tempora laudantium dicta explicabo
          repellendus itaque, quis saepe facere odio facilis incidunt impedit
          doloribus, doloremque dolorem veniam culpa voluptatem nostrum tempore
          autem ducimus? Laborum quibusdam temporibus voluptatibus, quam atque
          facere, ut iusto illum numquam corrupti necessitatibus odit ducimus
          ratione laudantium. Soluta suscipit voluptatum, quaerat illo nihil
          libero molestiae beatae tempora, voluptates tenetur corporis
          distinctio?
        </p>
      </section>
      <section id="treatment" className="other_content">
        <h3>Treatment</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consequatur quos commodi fugit quas reiciendis assumenda id laudantium
          consequuntur neque fugiat perferendis impedit molestias reprehenderit
          veritatis odit magni esse, aut repellat veniam rerum placeat velit
          voluptas! Beatae tempora voluptatum rerum qui, voluptate reiciendis.
          Exercitationem illo cumque, tempora laudantium dicta explicabo
          repellendus itaque, quis saepe facere odio facilis incidunt impedit
          doloribus, doloremque dolorem veniam culpa voluptatem nostrum tempore
          autem ducimus? Laborum quibusdam temporibus voluptatibus, quam atque
          facere, ut iusto illum numquam corrupti necessitatibus odit ducimus
          ratione laudantium. Soluta suscipit voluptatum, quaerat illo nihil
          libero molestiae beatae tempora, voluptates tenetur corporis
          distinctio?
        </p>
      </section>
      <section id="client" className="other_content">
        <h3>Client</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consequatur quos commodi fugit quas reiciendis assumenda id laudantium
          consequuntur neque fugiat perferendis impedit molestias reprehenderit
          veritatis odit magni esse, aut repellat veniam rerum placeat velit
          voluptas! Beatae tempora voluptatum rerum qui, voluptate reiciendis.
          Exercitationem illo cumque, tempora laudantium dicta explicabo
          repellendus itaque, quis saepe facere odio facilis incidunt impedit
          doloribus, doloremque dolorem veniam culpa voluptatem nostrum tempore
          autem ducimus? Laborum quibusdam temporibus voluptatibus, quam atque
          facere, ut iusto illum numquam corrupti necessitatibus odit ducimus
          ratione laudantium. Soluta suscipit voluptatum, quaerat illo nihil
          libero molestiae beatae tempora, voluptates tenetur corporis
          distinctio?
        </p>
      </section>
    </main>
  );
};

export default TherapistPage;
