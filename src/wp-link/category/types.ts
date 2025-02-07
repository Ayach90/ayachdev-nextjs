export interface CategoryFilters {
  context?: "view" | "embed" | "edit";
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  order?: "asc" | "desc";
  orderby?:
    | "count"
    | "id"
    | "include"
    | "name"
    | "slug"
    | "term_group"
    | "term_order";
  hide_empty?: boolean;
  parent?: number;
  post?: number;
  _fields?: string[];
  slug?: string;
}

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
  acf: { bgColor: string; textColor: string };
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
