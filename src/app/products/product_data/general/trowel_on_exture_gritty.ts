import { Product, ProductSection } from "../types";

const sectionOne: ProductSection = {
  index: 1,
  title: "APPLICATION SPECIFICATIONS",
  description: "",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [],
};

const section2: ProductSection = {
  index: 2,
  title: "NEW SUBSTRATE",
  description:
    "Substrate should be prepared appropriately to ensure that it is clean, dry and sound. Always check to ensure cementitious plastered substrates profile is smooth and even, and to the recommended hardness to avoid chipping of sand particles on the surface. NEXT TROWEL–ON TEXTURE GRITTY is self-priming and therefore no need of suitable primer is needed. However, chipping and flaking plastered substrates can be fortified with a suitable primer, notably NEXT MASONRY PRIMER.",
  iterations: [],
  type: "paragraph",
  footer: "",
  table: [],
};

const section3: ProductSection = {
  index: 3,
  title: "REDECORATION",
  description:
    "Old painted substrates have to be free from loose flaking paint, dirt and grease. Cracks and defective substrates have to be filled accordingly. All redecoration substrates have to be preceded with NEXT MASONRY PRIMER before application of NEXT TROWEL–ON TEXTURE GRITTY",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [],
};

const section4: ProductSection = {
  index: 4,
  title: "APPLICATION",
  description: "",
  iterations: [
    "NEXT TROWEL–ON TEXTURE GRITTY is strictly trowel/steel float applied. Texture film thickness is governed by the coarsest grits in the material i.e. 3.0mm, 2.5mm, 2.0mm, 1.5mm or 1.0mm.",
    "Bottom – up application is encouraged to avoid spillage and wastage. The trowel/steel float should be held at an angle of around 10-15mm whilst reducing the risk of dragging and scrapping.",
    "Ensure bumps are felt during application, a sign that the coarsest grits are reached. Float the texture removing excess materials thereby exposing the grits on the surface.",
    "Use a specialized polystyrene plastic float to create the desired scratch finish texture to enhance depth in the texture.",
    "Once the textured plaster is dry after about 24 hours, apply two coats of NEXTSHIELD TROWEL–ON FINISH COAT using a brush, roller or spray to obtain a seamless finish and rich colour. NEXTSHIELD TROWEL–ON FINISH COAT should be allowed to cure between coats for better results.",
    "OPTIONAL. A coat of NEXTSHIELD SEALER can be applied to enhance sheen and depth of the applied decorative plaster.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section5: ProductSection = {
  index: 5,
  title: "APPLICATION",
  description: "SAFETY & HANDLING",
  iterations: [
    "Keep out of reach of children",
    "Water based with very low V.O.C levels. Spillages to be washed off using water following local regulations.",
    "Always wear protective gears i.e. gloves and clothes. Avoid exposure on skin and eyes. If ingested, DO NOT INDUCE VOMITING. Instead, urgently consult a physician for medical advice. Carry along the label or container with detailed information.",
    "Always follow local disposal regulations.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section6: ProductSection = {
  index: 6,
  title: "Technical Data",
  description: "",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [
    {
      key: "FINISH",
      value: "Gritty textured base coat decorative plaster. ",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "DENSITY",
      value: "1.7 – 1.8",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "% SOLIDS",
      value: "80 – 90",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "THINNING",
      value: "DO NOT THIN. SUPPLIED READY FOR USE.",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "CLEANING",
      value: "Clean tools and containers immediately using clean water.",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "SPREADING CAPACITY",
      value: [
        "3.0mm: 4.0 – 4.5 kg/m²",
        "2.5mm: 3.5 – 4.0 kg/m²",
        "2.0mm: 3.0 – 3.5 kg/m²",
        "1.5mm: 2.5 – 3.0 kg/m²",
        "1.0mm: 2.0 – 2.5 kg/m²",
      ],
      valueType: "bullets",
      footer:
        "These spreading capacities are derived from our own laboratory conditions and substrates and may vary from those of actual substrates. Substrate profile, applicators skills and design type will also greatly impact on coverage.",
    },
    {
      key: "DRYING TIME",
      value: [
        "TOUCH DRY: 2-4 HOURS",
        "THROUGH DRY: 12-24 HOURS",
        "HARD DRY: 4 – 7 DAYS"
      ],
      valueType: "bullets",
      footer:
        "NB: AMBIENT TEMPERATURES DURING APPLICATION WILL GREATELY DETERMINE DRYING TIMES. LOWER TEMPERATURES DECREASES DRYING TIMES WHILST HIGHER TEMPERATURES ACCELERATES DRYING.",
    },
    {
      key: "POT LIFE",
      value:
        "10 – 15 minutes when left exposed. Polystyrene troweling/floating should be done immediately to avoid drying thus affecting the structuring procedure",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "CONSISTENCY & COLOUR",
      value: "Off-White to creamish paste",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "PACK SIZE",
      value: "6KG & 30KG",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "SHELVE LIVE",
      value: [
        "1 year in its original tightly sealed container and in dry cool condition away from direct sunlight and excessive heat.",
        "Opened containers to be tightly re-sealed to avoid entrapping air. Product to be used up within a short period.",
      ],
      valueType: "bullets",
      footer: undefined,
    },
    {
      key: "TRANSPORT & STACKING",
      value:
        "NEXT TROWEL–ON TEXTURE GRITTY can easily be transported because of its Non-Hazardous nature. DO NOT STACK MORE THAN 4 BUCKETS",
      valueType: "paragraph",
      footer: undefined,
    },
  ],
};

export const trowel_on_exture_gritty: Product = {
  id: 1,
  name: "Trowel-On Texture Gritty",
  briefDescription:
    "A premium quality acrylic textured plaster finish formulated for trowel/steel float application giving your walls tactile with multidimensional height, width and depth.",
  description:
    "NEXT TROWEL–ON TEXTURE GRITTY is a premium quality acrylic textured plaster finish formulated for trowel/steel float application giving your walls tactile with multidimensional height, width and depth. NEXT TROWEL–ON TEXTURE GRITTY is formulated from high quality materials that include special aggregates, pigments and extenders in a premium resin and fortified with diverse additives i.e. bactericides, algaecides and fungicides that combats attack both in wet and dry form.  NEXT TROWEL–ON TEXTURE GRITTY is complimented by NEXTSHIELD TROWEL–ON FINISH COAT that provides double protection against the hash tropical weather conditions. NEXTSHIELD TROWEL–ON FINISH COAT comes in a variety of pastel and accent colours providing an arrays of hues to choose from. NEXT TROWEL–ON TEXTURE GRITTY also comes in gritty variances of 3.0mm, 2.5mm, 2.0mm, 1.5mm and 1.0mm to suit substrate type and desired depth.  NEXT TROWEL–ON TEXTURE GRITTY is suitable for exterior or interior use and can be applied on both new or previously painted substrates.",
  uri: "trowel_on_exture_gritty",
  image: "",
  type: "Decorative",
  sections: [sectionOne, section2, section3, section4, section5, section6],
};
