import { notFound } from "next/navigation";
import {
  getCategories,
  getPosts,
  getTotalPages,
  Post as PostType,
} from "wpjs-api";
import Post from "@/lib/pages/Post";

type PostPageProps = {
  category: string;
  slug: string;
  id: number;
};

export async function generateStaticParams() {
  const allPosts: PostType[] = [];
  const perPage = 10;
  const totalPages = await getTotalPages(`${process.env.WP_API_URL}`, perPage);

  for (let i = 1; i <= totalPages; i++) {
    const posts = await getPosts(`${process.env.WP_API_URL}`, {
      per_page: perPage,
      page: i,
    });
    allPosts.push(...posts);
  }

  return allPosts.map(async (post) => {
    const category = await getCategories(`${process.env.WP_API_URL}`, {
      include: [post.categories[0]],
    });

    return {
      category: category[0].slug,
      slug: post.link,
    };
  });
}

const Page = async ({
  params,
}: Readonly<{
  params: Promise<PostPageProps>;
}>) => {
  const { slug } = await params;
  const post = await getPosts(`${process.env.WP_API_URL}`, {
    slug,
  });
  if (post.length === 0) {
    notFound();
  }
  return <Post post={post[0]} />;
};

export default Page;
