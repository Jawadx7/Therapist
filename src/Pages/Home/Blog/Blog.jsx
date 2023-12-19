import "./Blog.scss";
import blog1 from "../../../asserts/post-1.png";
import blog2 from "../../../asserts/post-2.png";
import blog3 from "../../../asserts/post-3.png";

const Blog = () => {
  return (
    <section className="blog">
      <div className="top">
        <h1>Popular News and Blogs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui
          alias iste delectus possimus similique dolor provident, adipisci
          reprehenderit error corrupti sint! Laboriosam iste modi quia eius,
          harum excepturi officia.
        </p>
      </div>
      <div className="blogs_container">
        <div className="blog_box">
          <div className="blog_img">
            <img src={blog1} alt="" />
          </div>
          <div className="details">
            <small>Susan Krauss . 3 days ago</small>
            <div className="cat news">News</div>
          </div>
          <div className="title">
            Why Constantly Seeking Approval Is Bad for Your Relationship
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repellendus minus ipsam ea sit quibusdam suscipit cum eum nostrum
            unde.
          </p>
          <button className="btn">Read more</button>
        </div>
        <div className="blog_box">
          <div className="blog_img">
            <img src={blog2} alt="" />
          </div>
          <div className="details">
            <small>Samoon Ahmad . 7 days ago</small>
            <div className="cat blog">Blog</div>
          </div>
          <div className="title">
            Targeting the Gut in The Treatment of Mental Illness
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repellendus minus ipsam ea sit quibusdam suscipit cum eum nostrum
            unde.
          </p>
          <button className="btn">Read more</button>
        </div>
        <div className="blog_box">
          <div className="blog_img">
            <img src={blog3} alt="" />
          </div>
          <div className="details">
            <small>Reccardo Delle . 2 hours ago</small>
            <div className="cat news">News</div>
          </div>
          <div className="title">Understanding Atypical Anorexia Nervosa</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repellendus minus ipsam ea sit quibusdam suscipit cum eum nostrum
            unde.
          </p>
          <button className="btn">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
