import "./Category.scss";
import { FaChevronCircleRight } from "react-icons/fa";

const Category = () => {
  return (
    <section className="category">
      <div className="cat_box individual">
        <div className="top">
          <h1>Individual</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            inventore incidunt numquam perspiciatis, placeat praesentium?
          </p>
        </div>
        <div className="bottom">
          <small>Explore More</small>
          <FaChevronCircleRight className="icon" />
        </div>
      </div>
      <div className="cat_box couple">
        <div className="top">
          <h1>Couple</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            inventore incidunt numquam perspiciatis, placeat praesentium?
          </p>
        </div>
        <div className="bottom">
          <small>Explore More</small>
          <FaChevronCircleRight className="icon" />
        </div>
      </div>
      <div className="cat_box teen">
        <div className="top">
          <h1>Teen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            inventore incidunt numquam perspiciatis, placeat praesentium?
          </p>
        </div>
        <div className="bottom">
          <small>Explore More</small>
          <FaChevronCircleRight className="icon" />
        </div>
      </div>
      <div className="cat_box psychiatry">
        <div className="top">
          <h1>Psychiatry</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            inventore incidunt numquam perspiciatis, placeat praesentium?
          </p>
        </div>
        <div className="bottom">
          <small>Explore More</small>
          <FaChevronCircleRight className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Category;
