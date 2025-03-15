export type TableData = {
  key: string;
  value: string | Array<string>;
  valueType: "paragraph" | "bullets" | "numbered" | "";
  footer: string | undefined;
};
export type ProductSection = {
  index: number;
  title: string;
  description: string;
  iterations: Array<string>;
  table: Array<TableData>;
  type: "paragraph" | "bullets" | "numbered" | "";
  footer: string;
};

export type Product = {
  id: number;
  name: string;
  briefDescription: string;
  description: string;
  uri: string;
  image: string;
  type: "Decorative" | "Commercial" | "Surface Coating";
  sections: Array<ProductSection>;
};
