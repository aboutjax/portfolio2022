import { MDXRemote } from "next-mdx-remote";

const PostBody = ({ mdxSource, components }) => {
  return (
    <div className="prose-custom text-default-contrastPrimary">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default PostBody;
