import RenderHtml from "@/components/RenderHtml/RenderHtml";
import React from "react";
import { Post as PostType } from "wpjs-api";

type Props = { post: PostType };

const Post = ({ post }: Props) => {
  return (
    <div>
      <RenderHtml html={post.title.rendered} />
    </div>
  );
};

export default Post;
