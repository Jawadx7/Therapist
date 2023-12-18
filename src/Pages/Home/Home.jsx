import "./Home.scss";
import HeroPic from "../../asserts/hero-img.png";
import Help from "./Help/Help";
import Category from "./Category/Category";
import Magazine from "./Magazine/Magazine";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero_text">
          <div className="tag">No. 1 Mental Health Platform</div>
          <h1>Free, Personalized Online Mental Heath Care</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            doloremque! Modi placeat, ex facilis iusto enim voluptate autem ea
            architecto minima officiis esse sed, distinctio quo. Saepe fugiat in
            sit?
          </p>

          <div className="search_form">
            <div className="dropdown">dropdown menu</div>
            <div className="input">
              <input type="text" placeholder="City, zip code" />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>

          <div className="features">
            <span>
              <div className="icon">&#9776;</div>
              <small>No account needed</small>
            </span>
            <span>
              <div className="icon">&#9776;</div>
              <small>Free to connect</small>
            </span>
            <span>
              <div className="icon">&#9776;</div>
              <small>Online and face to face</small>
            </span>
          </div>
        </div>
        <img src={HeroPic} alt="" className="hero_img" />
      </section>
      <Category />
      <Help />
      <Magazine />
    </div>
  );
};

export default Home;
