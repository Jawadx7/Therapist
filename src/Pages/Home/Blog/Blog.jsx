import "./Blog.scss";
import Blogposts from "../../../Data/BlogPosts";
import { Link } from "react-router-dom";

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
        {Blogposts.map(({ id, img, category, writer, title, body }) => (
          <div key={id} className="blog_box">
            <div className="blog_img">
              <img src={img} alt="" />
            </div>
            <div className="details">
              <small>{writer}</small>
              <div className={`cat ${category}`}>{category}</div>
            </div>
            <div className="title">{title}</div>
            <p>{body.length > 100 ? body.slice(0, 100) : body}</p>
            <Link to={`/blog/${id}`} className="btn">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
