import { notFound } from "next/navigation";
import { getCategories, getPosts, PostFilters } from "wpjs-api";
import Category from "@/lib/pages/Category";
import { POSTS_PER_PAGE } from "@/lib/constants";

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
}: Readonly<{
  params: Promise<CategoryPageProps>;
}>) {
  const { category } = await params;
  const categoryData = await getCategories(process.env.WP_API_URL, {
    slug: category,
    per_page: POSTS_PER_PAGE,
  });
  if (categoryData.length === 0) {
    notFound();
  }

  const postFilters: PostFilters = { categories: [categoryData[0].id] };
  const posts = await getPosts(process.env.WP_API_URL, postFilters);

  return <Category category={categoryData[0]} posts={posts} />;
}
