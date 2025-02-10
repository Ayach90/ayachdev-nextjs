import { Boxed } from "@/lib/layout/Boxed";
import { Post } from "wpjs-api";
import CardLargePost from "../CardLargePost";
import Pagination from "./Pagination";

type Props = {
  description?: string;
  name?: string;
  page?: number;
  posts: Post[];
  slug?: string;
  totalPages: number;
};

const PostsList = ({
  description,
  name,
  page = 1,
  posts,
  slug,
  totalPages,
}: Props) => {
  return (
    <section className="p-4">
      {name && <h1 className="text-center">{name}</h1>}
      {page === 1 && description && (
        <p className="text-center px-60">{description}</p>
      )}
      {page > 1 && `Page ${page}`}
      <Boxed className="py-24">
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <article>
                <CardLargePost post={post} />
              </article>
            </li>
          ))}
        </ul>
      </Boxed>
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} slug={slug} />
      )}
    </section>
  );
};

export default PostsList;
