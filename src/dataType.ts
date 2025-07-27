export interface MainApiData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface Medium {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
    name: string;
    value: string;
}

export interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: any[]
}

export interface SingleSectionProps {
  data: Section | undefined;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
  defaultMeta: MetaTag[];
  schema: SchemaObject[];
}

export interface MetaTag {
  type: "property" | "name" | string; // can be extended if needed
  value: string;
  content: string;
}

export interface SchemaObject {
  meta_name: string; // e.g. "ld-json"
  meta_value: string; // raw JSON string
  type: string; // typically "ld-json"
}