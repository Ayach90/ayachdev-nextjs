import Category from "@/lib/pages/Category";
import { getCategories, getPosts, PostFilters } from "wpjs-api";

interface CategoryPageProps {
  category: string;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const categories = await getCategories(process.env.WP_API_URL);
  const pages = categories.map(({ slug }) => ({
    category: slug,
  }));
  return pages;
}

export default async function Page({
  params,
}: {
  params: Promise<CategoryPageProps>;
}) {
  const { category } = await params;
  const categoryData = await getCategories(process.env.WP_API_URL, {
    slug: category,
  });

  const postFilters: PostFilters = { categories: [categoryData[0].id] };
  const posts = await getPosts(process.env.WP_API_URL, postFilters);

  return <Category category={categoryData[0]} posts={posts} />;
}
