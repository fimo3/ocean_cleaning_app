import BlogPostCard from "../(components)/BlogPostCard";

const Blog = () => {
  return (
    <div className="">
      <h1>Blog</h1>
      <div>
        <BlogPostCard />
      </div>
      <div className="lg:grid grid-cols-2 xs:grid-cols-1 justify-around">
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
};

export default Blog;
