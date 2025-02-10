import { getCategories, getPosts, getTotalPages } from "wpjs-api";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { Home } from "@/lib/pages";

export const revalidate = 86400;

export default async function Page() {
  const posts = await getPosts(`${process.env.WP_API_URL}`, {
    per_page: POSTS_PER_PAGE,
    orderby: "date",
    order: "desc",
  });

  const totalPages = await getTotalPages(
    `${process.env.WP_API_URL}`,
    POSTS_PER_PAGE
  );

  const categories = await getCategories(`${process.env.WP_API_URL}`);

  return <Home posts={posts} categories={categories} totalPages={totalPages} />;
}
