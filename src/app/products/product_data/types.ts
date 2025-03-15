export type TableData = {
  key: String;
  value: String | Array<String>;
  valueType: "paragraph" | "bullets" | "numbered" | "";
  footer: String | undefined;
};
export type ProductSection = {
  index: Number;
  title: String;
  description: String;
  iterations: Array<String>;
  table: Array<TableData>;
  type: "paragraph" | "bullets" | "numbered" | "";
  footer: String;
};

export type Product = {
  id: Number;
  name: String;
  briefDescription: String;
  description: String;
  uri: String;
  image: String;
  type: "Decorative" | "Commercial" | "Surface Coating";
  sections: Array<ProductSection>;
};
