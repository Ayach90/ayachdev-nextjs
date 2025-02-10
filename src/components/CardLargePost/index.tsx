import Image from "next/image";
import Link from "next/link";
import { getCategories, Post } from "wpjs-api";
import RenderHtml from "../RenderHtml/RenderHtml";

type Props = { post: Post };

const CardLargePost = async ({ post }: Props) => {
  const { featured_image_url, featured_image_alt, slug, categories } = post;
  const title = post.title.rendered;
  const excerpt = post.title.rendered;
  const category = await getCategories(`${process.env.WP_API_URL}`, {
    include: [categories[0]],
  });

  return (
    <Link
      href={`/${category[0].slug}/${slug}`}
      className="flex items-start w-full rounded shadow  bg-white hover:bg-gray-200"
    >
      <Image
        alt={featured_image_alt || "Default Image"}
        src={featured_image_url}
        width={144}
        height={128}
      />
      <div className="p-4 w-full">
        <h3>
          <RenderHtml html={title} />
        </h3>
        <p>
          <RenderHtml html={excerpt} />
        </p>
      </div>
    </Link>
  );
};

export default CardLargePost;
