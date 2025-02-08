import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "wpjs-api";

type Props = { post: Post };

const CardLargePost = ({ post }: Props) => {
  const { title, excerpt, featured_image_url, featured_image_alt, slug } = post;
  return (
    <Link
      href={`/${slug}`}
      className="flex items-start w-full rounded shadow  bg-white hover:bg-gray-200"
    >
      <Image
        alt={featured_image_alt || "Default Image"}
        src={featured_image_url}
        width={144}
        height={128}
      />
      <div className="p-4 w-full">
        <h3>{title.rendered}</h3>
        <p>{excerpt.rendered}</p>
      </div>
    </Link>
  );
};

export default CardLargePost;
