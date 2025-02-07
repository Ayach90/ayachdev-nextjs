export interface PostFilters {
  _fields?: string[];
  after?: string;
  author_exclude?: number;
  author?: number;
  before?: string;
  categories_exclude?: number[];
  categories?: number[];
  context?: "view" | "embed" | "edit";
  exclude?: number[];
  offset?: number;
  page?: number;
  per_page?: number;
  search?: string;
  sticky?: boolean;
  tags_exclude?: number[];
  tags?: number[];
  order?: "asc" | "desc";
  orderby?:
    | "date"
    | "relevance"
    | "id"
    | "include"
    | "title"
    | "slug"
    | "modified"
    | "menu_order"
    | "meta_value"
    | "meta_value_num"
    | "comment_count";
  slug?: string;
  status?: "publish" | "future" | "draft" | "pending" | "private";
}

export interface Post {
  _links: WPLinks;
  categories: number[];
  class_list: string[];
  comment_status: string;
  content: RenderedContent;
  date_gmt: string;
  date: string;
  excerpt: RenderedContent;
  featured_image_alt: string;
  featured_image_url: string;
  featured_media: number;
  format: string;
  guid: Guid;
  id: number;
  link: string;
  meta: PostMeta;
  modified_gmt: string;
  modified: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: number[];
  template: string;
  title: RenderedContent;
  type: string;
  yoast_head_json: YoastHeadJson;
  yoast_head: string;
}

interface Guid {
  rendered: string;
}

interface RenderedContent {
  protected?: boolean;
  rendered: string;
}

interface PostMeta {
  _acf_changed: boolean;
  footnotes: string;
}

interface YoastImage {
  height: number;
  type: string;
  url: string;
  width: number;
}

interface YoastHeadJson {
  article_modified_time: string;
  article_published_time: string;
  author: string;
  canonical: string;
  og_image: YoastImage[];
  og_locale: string;
  og_site_name: string;
  og_title: string;
  og_type: string;
  og_url: string;
  robots: {
    index: string;
    follow: string;
    "max-snippet": string;
    "max-image-preview": string;
    "max-video-preview": string;
  };
  title: string;
  twitter_card: string;
  twitter_misc: {
    [key: string]: string;
  };
}

interface WPLinks {
  self: Array<{
    href: string;
    targetHints?: { allow: string[] };
  }>;
  collection: Array<{ href: string }>;
  about: Array<{ href: string }>;
  author: Array<{
    embeddable: boolean;
    href: string;
  }>;
  replies: Array<{
    embeddable: boolean;
    href: string;
  }>;
  "version-history": Array<{
    count: number;
    href: string;
  }>;
  "predecessor-version": Array<{
    id: number;
    href: string;
  }>;
  "wp:featuredmedia": Array<{
    embeddable: boolean;
    href: string;
  }>;
  "wp:attachment": Array<{ href: string }>;
  "wp:term": Array<
    | { taxonomy: "category"; embeddable: boolean; href: string }
    | { taxonomy: "post_tag"; embeddable: boolean; href: string }
  >;
  curies: Array<{
    name: string;
    href: string;
    templated: boolean;
  }>;
}
