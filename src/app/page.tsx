import { Home } from "@/lib/pages";
import { getCategories, getPosts } from "wpjs-api";

const NUM_POSTS = 5;
export const revalidate = 86400;

export default async function Page() {
  const posts = await getPosts(process.env.WP_API_URL, {
    per_page: NUM_POSTS,
    orderby: "date",
    order: "desc",
  });
  const categories = await getCategories(process.env.WP_API_URL);

  return <Home posts={posts} categories={categories} />;
}
