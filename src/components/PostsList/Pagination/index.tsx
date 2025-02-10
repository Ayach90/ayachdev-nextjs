import Link from "next/link";
import style from "./style.module.css";
type Props = { currentPage: number; totalPages: number; slug?: string };

const Pagination = ({ currentPage, totalPages, slug = "" }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <nav>
        {pages.map((page) => {
          let url: string;
          if (page === 1) {
            url = `/${slug}`;
          } else if (slug) {
            url = `/${slug}/page/${page}`;
          } else {
            url = `/page/${page}`;
          }
          return (
            <span
              key={page}
              style={{ margin: "0 0.5rem" }}
              className={page === currentPage ? style.current : ""}
            >
              <Link href={url}>{page}</Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Pagination;
