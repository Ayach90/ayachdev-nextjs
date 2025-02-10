import { notFound } from "next/navigation";
import { getPosts, getTotalPages, PostFilters } from "wpjs-api";
import { POSTS_PER_PAGE } from "@/lib/constants";
import PostsList from "@/components/PostsList";

interface PaginatedPageProps {
  page: string;
}

export const revalidate = 86400;

export async function generateStaticParams() {
  const totalPages = await getTotalPages(
    `${process.env.WP_API_URL}`,
    POSTS_PER_PAGE
  );
  const pages = Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  }));
  return pages;
}

export default async function Page({
  params,
}: Readonly<{
  params: Promise<PaginatedPageProps>;
}>) {
  const paramsData = await params;
  const currentPage = parseInt(paramsData.page, 10);
  const filters: PostFilters = {
    per_page: POSTS_PER_PAGE,
    offset: currentPage,
  };
  const posts = await getPosts(`${process.env.WP_API_URL}`, filters);

  if ((!posts.length && currentPage !== 1) || currentPage === 1) {
    notFound();
  }

  const totalPages = await getTotalPages(
    `${process.env.WP_API_URL}`,
    POSTS_PER_PAGE
  );

  return <PostsList posts={posts} totalPages={totalPages} />;
}
