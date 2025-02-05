export interface Category {
  createdAt: string;
  description: string;
  documentId: string;
  id: number;
  locale: string;
  name: string;
  publishedAt: string;
  slug: string;
  updatedAt: string;
}

export interface Post {
  categories: Category;
  content: string;
  createdAt: string;
  documentId: string;
  id: number;
  image: string | null;
  locale: string;
  localizations: string[];
  publishedAt: string;
  slug: string;
  subtitle: string;
  title: string;
  updatedAt: string;
}

export interface FooterItem {
  createdAt: string;
  documentId: string;
  id: number;
  locale: string;
  name: string;
  publishedAt: string;
  slug: string;
  updatedAt: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: { pagination: StrapiMetaPagination };
}

export interface StrapiMetaPagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
