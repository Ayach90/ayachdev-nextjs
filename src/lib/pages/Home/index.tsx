import { Post, Category } from "wpjs-api";
import { HeroBanner } from "./HeroBanner";
import { Categories } from "./Categories";
import { LastPosts } from "./LastPosts";

interface Props {
  posts: Post[];
  categories: Category[];
}

export const Home = ({ posts, categories }: Props) => {
  return (
    <>
      <HeroBanner />
      <Categories categories={categories} />
      <LastPosts posts={posts} />
    </>
  );
};
