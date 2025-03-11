import { Product, ProductSection } from "../types";

const sectionOne: ProductSection = {
  index: 1,
  title: "Product Features",
  description: "",
  iterations: [
    "High-quality vinyl sheen",
    "Washable and stain resistant",
    "Uses VIP Thixotropic Technology",
    "Suitable for embossed wall coverings and areas where easy maintenance is required",
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
    "Fill cracks and surface imperfections with a suitable skimming plaster",
    "Prime the surface with NEXT Masonry Primer",
    "Prime the surface  with NEXT Acrylic Sealer.",
    "Porous surfaces are to be sealed with one coat of NEXT Acrylic Sealer or NEXT Alkali Resisting Primer as the first coat, then topcoat with two coats of NEXT VINYL WALL SHEEN.",
    "For Previously Painted Masonry Surfaces",
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
  title: "Application Criteria",
  description: "",
  iterations: [
    "Stir well before use. Use clean equipment for application.",
    "First Coat – Thin with not more than 20% water",
    "Apply the first coat preferably by brush or roller to ensure that the pores in the plaster are filled for proper adhesion. ",
    "Subsequent coats by brush, roller, or spray.",
    "Allow drying for 2-4 hours.",
    "Apply two coats of NEXT VINYL WALL SHEEN thinned to not more than 10%.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section7: ProductSection = {
  index: 7,
  title: "Thinning and Wash Up",
  description: "",
  iterations: [
    "Use clean water for cleaning. Wash the paint equipment immediately after use. Do not allow to dry.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section8: ProductSection = {
  index: 8,
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

const section9: ProductSection = {
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
    },
    {
      key: "Generic Type",
      value: "100% Acrylic Emulsion",
      valueType: "paragraph",
    },
    {
      key: "Color Ranges",
      value:
        "Available in >1,000’s colours tinted from Pastel, Tint, Deep, and Accent bases, using a variety of fandecks.",
      valueType: "paragraph",
    },
    {
      key: "Pack Sizes",
      value: "1, 4 and 20L",
      valueType: "paragraph",
    },
    {
      key: "Flash Point",
      value: "N/A",
      valueType: "paragraph",
    },
    {
      key: "Drying Time",
      value: "Touch Dry – 20 minutes; Hard Dry – 2-4 Hours",
      valueType: "paragraph",
    },
    {
      key: "Spreading Rate",
      value:
        "10 – 12 Sqm/L per coat depending on porosity and texture of surface and application method.",
      valueType: "paragraph",
    },
    {
      key: "Application Methods",
      value:
        "By brush, roller, or spray. Do NOT apply in rainy weather or late evening.",
      valueType: "paragraph",
    },
    {
      key: "Transportation & Storage",
      value:
        "Do not use or store in extremes of temperature and protect from frost. To prevent spillage, please store and transport upright.",
      valueType: "",
    },
  ],
};

export const wall_sheen_silk_emulsion_paint: Product = {
  id: 1,
  name: "Wall sheen silk emulsion paint",
  briefDescription:
    "This is a heavy-bodied, high-build coating that creates a textured, durable finish. Ideal for walls and ceilings, it provides excellent coverage, hides imperfections, and enhances surfaces with a stylish, rugged appearance.",
  description:
    "Wall Sheen Silk Emulsion Paint is a high-quality, water-based interior paint that provides a smooth, silky finish with a subtle sheen. Known for its luxurious appearance, it enhances the beauty of walls while offering excellent durability. Its stain-resistant and washable properties make it an ideal choice for areas that experience regular use, as it can be easily wiped clean without damaging the surface. With a low-VOC formula, this paint is environmentally friendly and has minimal odor, making it safe for indoor application. It spreads evenly and provides good coverage, reducing the need for multiple coats. Additionally, its mold and mildew-resistant properties make it suitable for humid environments. Perfect for living rooms, bedrooms, hallways, and offices, Wall Sheen Silk Emulsion Paint combines elegance with practicality, making it a popular choice for both residential and commercial spaces.",
  uri: "wall_sheen_silk_emulsion_paint",
  image: "",
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
  ],
};
