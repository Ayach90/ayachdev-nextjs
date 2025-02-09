import { Post } from "wpjs-api";

type Props = {
  currentPage: number;
  posts: Post[];
};

export const Paginated = ({ currentPage, posts }: Props) => {
  return (
    <main>
      <h1>Página {currentPage}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}></li>
        ))}
      </ul>
    </main>
  );
};
