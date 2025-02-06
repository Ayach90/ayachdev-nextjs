//MENUS

export interface MenuItem {
  ID: number;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_password: string;
  post_name: string;
  to_ping: string;
  pinged: string;
  post_modified: string;
  post_modified_gmt: string;
  post_content_filtered: string;
  post_parent: number;
  guid: string;
  menu_order: number;
  post_type: string;
  post_mime_type: string;
  comment_count: string;
  filter: string;
  db_id: number;
  menu_item_parent: string;
  object_id: string;
  object: string;
  type: string;
  type_label: string;
  url: string;
  title: string;
  target: string;
  attr_title: string;
  description: string;
  classes: string[];
  xfn: string;
}

export interface MenusResponse {
  primary: MenuItem[];
  footer: MenuItem[];
}

//CATEGORIES

export type CategoriesResponse = Category[];

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: Links;
}

export interface YoastHeadJson {
  title: string;
  robots: {
    index: string;
    follow: string;
    "max-snippet": string;
    "max-image-preview": string;
    "max-video-preview": string;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_url: string;
  og_site_name: string;
  twitter_card: string;
  schema: Schema;
}

export interface Schema {
  "@context": string;
  "@graph": SchemaGraphItem[];
}

export interface SchemaGraphItem {
  "@type": string;
  "@id": string;
  url?: string;
  name?: string;
  isPartOf?: {
    "@id": string;
  };
  breadcrumb?: {
    "@id": string;
  };
  inLanguage?: string;
  itemListElement?: ListItem[];
  potentialAction?: PotentialAction[];
  description?: string;
}

export interface ListItem {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

export interface PotentialAction {
  "@type": string;
  target: {
    "@type": string;
    urlTemplate: string;
  };
  "query-input": {
    "@type": string;
    valueRequired: boolean;
    valueName: string;
  };
}

export interface Links {
  self: LinkItem[];
  collection: LinkItem[];
  about: LinkItem[];
  "wp:post_type": LinkItem[];
  curies: CuriesItem[];
}

export interface LinkItem {
  href: string;
  targetHints?: {
    allow: string[];
  };
}

export interface CuriesItem {
  name: string;
  href: string;
  templated: boolean;
}

//POSTS
// Interfaz para la propiedad "guid", "title", "content", "excerpt", etc.
export interface RenderedField {
  rendered: string;
  protected?: boolean; // en "content" y "excerpt"
}

// Interfaz para el objeto meta (en este ejemplo, solo se incluye "footnotes")
export interface PostMeta {
  footnotes: string;
}

// Interfaz para los elementos de _links
export interface LinkItem {
  href: string;
  // targetHints es opcional y, si se incluye, debe tener una propiedad "allow" de tipo string[]
  targetHints?: {
    allow: string[];
  };
  // Otros campos opcionales según la respuesta
  id?: number;
}

export interface Links {
  self: LinkItem[];
  collection: LinkItem[];
  about: LinkItem[];
  author?: LinkItem[];
  replies?: LinkItem[];
  "version-history"?: LinkItem[];
  "predecessor-version"?: LinkItem[];
  "wp:attachment"?: LinkItem[];
  "wp:term"?: LinkItem[];
  curies: {
    name: string;
    href: string;
    templated: boolean;
  }[];
}

export interface YoastHeadJson {
  title: string;
  robots: {
    index: string;
    follow: string;
    "max-snippet": string;
    "max-image-preview": string;
    "max-video-preview": string;
  };
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description?: string;
  og_url: string;
  og_site_name: string;
  twitter_card: string;
  twitter_misc?: { [key: string]: string };
}

// Interfaz para cada post
export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: RenderedField;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: RenderedField;
  content: RenderedField;
  excerpt: RenderedField;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: PostMeta;
  categories: number[];
  tags: number[];
  class_list: string[];
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: Links;
}

// El array completo se tipa como Post[]
export type PostsResponse = Post[];
