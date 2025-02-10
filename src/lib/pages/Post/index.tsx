import { Post as PostType } from "wpjs-api";
import RenderHtml from "@/components/RenderHtml/RenderHtml";

type Props = { post: PostType };

const Post = ({ post }: Props) => {
  return (
    <div>
      <RenderHtml html={post.title.rendered} />
    </div>
  );
};

export default Post;
