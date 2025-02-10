import { Post, Category } from "wpjs-api";
import { HeroBanner } from "./HeroBanner";
import { Categories } from "./Categories";
import PostsList from "@/components/PostsList";

interface Props {
  posts: Post[];
  categories: Category[];
  totalPages: number;
}

export const Home = ({ posts, categories, totalPages }: Props) => {
  return (
    <>
      <HeroBanner />
      <Categories categories={categories} />
      <PostsList posts={posts} name="Latest Posts" totalPages={totalPages} />
    </>
  );
};
