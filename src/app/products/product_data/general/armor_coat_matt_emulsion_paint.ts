import { getUri } from "@/utils/uri.base.utils";
import { Product, ProductSection } from "../types";

const sectionOne: ProductSection = {
  index: 1,
  title: "Product Features",
  description: "",
  iterations: [
    "High-Hiding",
    "Resistant to Dirt Pick-Up",
    "Uses VIP Thixotropic Technology",
    "Resistant to fungus, mildew, and algal growth",
    "Matt High Build Film",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section2: ProductSection = {
  index: 2,
  title: "Surface Preparation",
  description: "",
  iterations: [
    "All surfaces are to be dry and free from loose sand, debris, dirt, grease, fungus, algae, etc.",
    "Thoroughly sand glossy and smooth surfaces to ensure good adhesion",
    "If the surface is contaminated with fungus/algae, treat using NEXT Biocidal Solution",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section3: ProductSection = {
  index: 3,
  title: "Special Considerations",
  description: "",
  iterations: [
    "Do NOT apply over freshly applied masonry plaster less than 2 weeks old. Moisture content in the plaster must be 5% or below at any point of paint application.",
    "Do NOT paint if the relative Humidity is greater than 95% or within 3% of dew point.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section4: ProductSection = {
  index: 4,
  title: "For New Masonry Surface",
  description: "",
  iterations: [
    "The surface must be dry. ",
    "Fill cracks and surface imperfections with a suitable skimming plaster ",
    "Prime the surface with NEXT Masonry Primer, preceded with NEXT Acrylic Sealer. Porous surfaces are to be sealed with one coat of NEXT Acrylic Sealer or NEXT Alkali Resisting Primer as the first coat, then topcoat with two coats of NEXT ARMOR COAT.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section5: ProductSection = {
  index: 4,
  title: "For Previously Painted Masonry Surfaces",
  description: "",
  iterations: [
    "TAll surfaces must be sound, dry, and free from loose sand, debris, dirt, grease, fungus, algae, etc.",
    "Fill cracks with NEXT CEMENTO SKIM-COAT exterior skimming plaster.",
    "Surfaces with cracking and flaking paint should be thoroughly scraped, wire brushed, and dusted to remove all loose powdery materials.",
    "Apply one coat of NEXT Masonry Primer and let it thoroughly dry.",
    "Apply two coats of NEXT VINYL WALL SHEEN letting them dry between coats.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section6: ProductSection = {
  index: 6,
  title: "For Previously Painted Masonry Surfaces",
  description: "",
  iterations: [
    "All surfaces must be sound, dry, and free from loose sand, debris, dirt, grease, fungus, algae, etc.",
    "Fill cracks with NEXT CEMENTO SKIM-COAT exterior skimming plaster.",
    "Surfaces with cracking and flaking paint should be thoroughly scraped, wire brushed, and dusted to remove all loose powdery materials.",
    "Apply one coat of NEXT Masonry Primer and let it thoroughly dry. ",
    "Apply two coats of NEXT ARMOR COAT letting them dry between coats.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section7: ProductSection = {
  index: 7,
  title: "Application Criteria",
  description: "",
  iterations: [
    "Stir well before use. Use clean equipment for application.",
    "First Coat – Thin with not more than 20% water",
    "Apply the first coat preferably by brush or roller to ensure that the pores in the plaster are filled for proper adhesion. Subsequent coats by brush, roller, or spray. Allow drying for 2-4 hours. Followed by two coats of NEXT ARMOR COAT thinned to not more than 10%.",
    "Thinning and Wash Up",
    "Use clean water for cleaning. Wash the paint equipment immediately after use. Do not allow to dry.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section8: ProductSection = {
  index: 8,
  title: "Thinning and Wash Up",
  description: "",
  iterations: [
    "Use clean water for cleaning. Wash the paint equipment immediately after use. Do not allow to dry.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section9: ProductSection = {
  index: 9,
  title: "Precautions",
  description: "",
  iterations: [
    "If medical advice is needed, have product container or label at hand.",
    "Keep out of reach of children",
    "Dispose of contents/container to a waste disposal site in accordance with local/national regulations",
    "Ensure good ventilation during application and drying. ",
    "Do not get in eyes, on skin, or on",
    "IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses, if present, and easy to do. Continue rinsing.",
    "IF ON SKIN: Wash with plenty of water. Do not use solvent thinners or White Spirit. ",
    "IF SWALLOWED: seek quick medical attention if you feel unwell. ",
    "Safety data sheet available on request.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section10: ProductSection = {
  index: 9,
  title: "Technical Data",
  description: "",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [
    {
      key: "Product Ref",
      value: "VIP Series",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Generic Type",
      value: "100% Acrylic Emulsion",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Color Ranges",
      value:
        "Available in >1,000’s colours tinted from Pastel, Tint, Deep, and Accent bases, using a variety of fandecks.",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Pack Sizes",
      value: "1, 4 and 20L",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Flash Point",
      value: "N/A",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Drying Time",
      value: "Touch Dry – 20 minutes; Hard Dry – 2-4 Hours",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Spreading Rate",
      value:
        " 5-8 Sqm/L per coat depending on porosity and texture of surface and application method.",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Application Methods",
      value:
        "By brush, roller, or spray. Do NOT apply in rainy weather or late evening.",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "Transportation & Storage",
      value:
        "Do not use or store in extremes of temperature and protect from frost. To prevent spillage, please store and transport upright.",
      valueType: "paragraph",
      footer: undefined,
    },
  ],
};

export const armor_coat_matt_emulsion_paint: Product = {
  id: 1,
  name: "Armor Coat Matt Emulsion Paint",
  briefDescription:
    "An exterior paint combining classic 100% acrylic formula and VIP technology to provide outstanding brushability and film build to protect substrates from harsh weather conditions.",
  description:
    "NEXT ARMOR COAT is an exterior paint combining classic 100% acrylic formula and VIP technology to provide outstanding brushability and film build to protect substrates from harsh weather conditions. It contains a special combination of biocides, acticides, and fungicides to prevent bacterial, fungal, and algal growth, lightfast pigments to resist fading, and a flexible emulsion resin that prevents cracking, flaking, and peeling in harsh tropical weather.",
  uri: "armor_coat_matt_emulsion_paint",
  image: getUri("/images/paint_thumbnails/Armor-Paint-Bucket-thumb.png"),
  type: "Decorative",
  sections: [
    sectionOne,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10
  ],
};
