import "./Magazine.scss";
import Post1 from "../../../asserts/magazine-1.png";
import Post2 from "../../../asserts/magazine-2.png";

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
              <div className="icon">&times;</div>
              Guidance you can trust
            </li>
            <li>
              <div className="icon">&times;</div>
              Skills for life success
            </li>
            <li>
              <div className="icon">&times;</div>
              Strategies to feel better
            </li>
            <li>
              <div className="icon">&times;</div>
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
          <img src={Post1} alt="" />
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
              <div className="icon">&times;</div>
              Guidance you can trust
            </li>
            <li>
              <div className="icon">&times;</div>
              Skills for life success
            </li>
            <li>
              <div className="icon">&times;</div>
              Strategies to feel better
            </li>
            <li>
              <div className="icon">&times;</div>
              Strategies to overcome stress
            </li>
          </ul>

          <button className="btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
