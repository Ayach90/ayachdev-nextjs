import { notFound } from "next/navigation";
import { getCategories, getCategoryTotalPages, getPosts } from "wpjs-api";
import PostsList from "@/components/PostsList";
import { POSTS_PER_PAGE } from "@/lib/constants";

export const revalidate = 86400;

export async function generateStaticParams() {
  const categories = await getCategories(`${process.env.WP_API_URL}`);
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
  const categoryData = await getCategories(`${process.env.WP_API_URL}`, {
    slug: category,
  });

  if (categoryData.length === 0) {
    notFound();
  }

  const posts = await getPosts(`${process.env.WP_API_URL}`, {
    categories: [categoryData[0].id],
    per_page: POSTS_PER_PAGE,
    offset: (currentPage - 1) * POSTS_PER_PAGE,
  });

  if ((!posts.length && currentPage !== 1) || currentPage === 1) {
    notFound();
  }

  const totalPages = await getCategoryTotalPages(
    `${process.env.WP_API_URL}`,
    categoryData[0].id,
    POSTS_PER_PAGE
  );

  return (
    <div>
      <PostsList
        name={categoryData[0].name}
        posts={posts}
        page={currentPage}
        totalPages={totalPages}
        slug={categoryData[0].slug}
      />
    </div>
  );
}
