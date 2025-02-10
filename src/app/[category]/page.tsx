import { notFound } from "next/navigation";
import {
  getCategories,
  getCategoryTotalPages,
  getPosts,
  PostFilters,
} from "wpjs-api";
import { POSTS_PER_PAGE } from "@/lib/constants";
import PostsList from "@/components/PostsList";

interface CategoryPageProps {
  category: string;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const categories = await getCategories(`${process.env.WP_API_URL}`);
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
  const categoryData = await getCategories(`${process.env.WP_API_URL}`, {
    slug: category,
    per_page: POSTS_PER_PAGE,
  });

  if (categoryData.length === 0) {
    notFound();
  }
  const { name, description, id, slug } = categoryData[0];
  const postFilters: PostFilters = {
    categories: [id],
    per_page: POSTS_PER_PAGE,
  };
  const posts = await getPosts(`${process.env.WP_API_URL}`, postFilters);

  if (posts.length === 0) {
    notFound();
  }

  const totalPages = await getCategoryTotalPages(
    `${process.env.WP_API_URL}`,
    categoryData[0].id,
    POSTS_PER_PAGE
  );

  return (
    <PostsList
      name={name}
      description={description}
      posts={posts}
      totalPages={totalPages}
      slug={slug}
    />
  );
}
