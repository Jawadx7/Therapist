import "./BlogContent.scss";
// import Banner from "../../asserts/magazine-1.png";
import { Link, useParams } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import Blogposts from "../../Data/BlogPosts";

const BlogContent = () => {
  const { id } = useParams();
  const post = Blogposts.find((post) => post.id.toString() === id);

  return (
    <div className="blog_content">
      <div
        className="banner"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${post.img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="title">{post.title}</div>
      </div>

      <div className="main">
        <div className="writing">
          <div className="top">
            <span>
              <CiUser /> {post.person}
            </span>
            <span>
              <CiUser /> {post.date}
            </span>
          </div>
          <p>{post.body}</p>
        </div>
        <div className="more_posts">
          <h1>More Posts</h1>
          {Blogposts.map(({ id, category, writer, title, body }) => (
            <>
              <Link to={`/blog/${id}`} key={id} className="post_box">
                <div className="details">
                  <small>{writer}</small>
                  <div className={`cat ${category}`}>{category}</div>
                </div>
                <div className="title">{title}</div>
                <p>{body.length > 100 ? body.slice(0, 100) : body}</p>
              </Link>
              <hr />
            </>
          ))}
          {/* {Blogposts.map((morePost) => {
            if (morePost.id !== post.id) {
              return (
                <Link to={`/blog/${morePost.id}`} key={id}>
                  <h3>{morePost.title}</h3>
                </Link>
              );
            }
          })} */}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
