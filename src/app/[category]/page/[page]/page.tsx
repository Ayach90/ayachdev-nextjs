import PostsList from "@/components/PostsList";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { notFound } from "next/navigation";
import { getCategories, getCategoryTotalPages, getPosts } from "wpjs-api";

export const revalidate = 86400;

export async function generateStaticParams() {
  const categories = await getCategories(process.env.WP_API_URL);
  const params: Array<{ category: string; page: string }> = [];

  for (const category of categories) {
    const totalPages = await getCategoryTotalPages(
      `${process.env.WP_API_URL}`,
      category.id,
      POSTS_PER_PAGE
    );
    for (let page = 1; page <= totalPages; page++) {
      params.push({ category: category.slug, page: page.toString() });
    }
  }
  return params;
}

export default async function CategoryPage({
  params,
}: Readonly<{
  params: Promise<{ category: string; page: string }>;
}>) {
  const { category, page } = await params;
  const currentPage = Number(page);
  const cat = await getCategories(process.env.WP_API_URL, { slug: category });
  const posts = await getPosts(process.env.WP_API_URL, {
    categories: [cat[0].id],
    per_page: POSTS_PER_PAGE,
    offset: (currentPage - 1) * POSTS_PER_PAGE,
  });

  if ((!posts.length && currentPage !== 1) || currentPage === 1) {
    notFound();
  }

  return (
    <div>
      <PostsList name={cat[0].name} posts={posts} page={currentPage} />
    </div>
  );
}
