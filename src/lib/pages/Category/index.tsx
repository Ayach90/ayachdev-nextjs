import PostsList from "@/components/PostsList";
import React from "react";
import { Category as CategoryType, Post } from "wpjs-api";

type Props = { category: CategoryType; posts: Post[] };

const Category = ({ category, posts }: Props) => {
  const { name, description } = category;
  return <PostsList name={name} description={description} posts={posts} />;
};

export default Category;
