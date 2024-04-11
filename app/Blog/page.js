import BlogPostCard from "../(components)/BlogPostCard";

const Blog = () => {
  return (
    <div className="p-5">
      <h1 className="">Blog</h1>
      <hr className="text-default-text mt-3" />
      <div>
        <BlogPostCard />
      </div>
      <div className="lg:grid grid-cols-2 xs:grid-cols-1 justify-around">
        <BlogPostCard />
        <BlogPostCard />
        <a href="#Seeall">
          <h3>See all</h3>
        </a>
      </div>
    </div>
  );
};

export default Blog;
