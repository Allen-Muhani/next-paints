import { Product, ProductSection } from "../types";

const sectionOne: ProductSection = {
  index: 1,
  title: "Product Features",
  description: "",
  iterations: [
    "Water-based primer: Low odor, eco-friendly, and easy cleanup with soap and water.",
    "Low odor & eco-friendly: Water-based formula with low VOCs for improved indoor air quality.",
    "Washable & durable: Light scrub resistance for low-to-moderate traffic areas (e.g., bedrooms, dining rooms).",
    "Multi-surface compatibility: Works on plaster, drywall, wood, metal, and previously painted surfaces.",
    "Mildew resistance: Inhibits mold growth in humid or moisture-prone areas.",
    "Weather-resistant: Withstands cracking and peeling in diverse climates (exterior use).",
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
    "Clean the Surface by removing dust, dirt, or grease using a damp cloth or sponge.",
    "Repair Imperfections by filling cracks, holes, or dents with spackling compound or filler",
    "Remove Loose Material by scraping off peeling/flaking paint or loose plaster with a putty knife.",
    "Sand the Entire Surface by lightly sanding walls with fine-grit sandpaper and wiping away the dust",
    "Address Stains: For severe stains, clean with a stain-blocking primer or specialized primer.  ",
    "Apply next paints primer if necessary i.e new/unpainted walls,stained areas, dramatic color changes",
    "Ensure that the wall is completely dry",
    "Use painter’s tape to protect trim, outlets, and fixtures while coving floors and furniture with drop cloths",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section3: ProductSection = {
  index: 3,
  title: "Redecoration/repainting",
  description: "",
  iterations: [
    "Old painted substrates have to be free from loose flaking paint, dirt and grease.",
    "Cracks and defective substrates have to be filled accordingly.",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section4: ProductSection = {
  index: 4,
  title: "Precautions",
  description: "",
  iterations: [
    "Keep out of reach of children",
    "Water based with very low V.O.C levels. Spillages to be washed off using water following local regulations.",
    "Always wear protective gears i.e. gloves and clothes. Avoid exposure on skin and eyes. If ingested, DO NOT INDUCE VOMITING. Instead, urgently consult a physician for medical advice. Carry along the label or container with detailed information.",
    "Always follow local disposal regulations.",
    "Dispose of contents/container to a waste disposal site in accordance with local/national regulations",
  ],
  type: "bullets",
  footer: "",
  table: [],
};

const section5: ProductSection = {
  index: 5,
  title: "Technical Data",
  description: "",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [
    {
      key: "Density",
      value: "1.4 – 1.5",
      valueType: "paragraph",
    },
    {
      key: "% SOLIDS",
      value: "60 – 70",
      valueType: "paragraph",
    },
    {
      key: "THINNING",
      value:
        "Can be thinned to 20% using clean tap water when applying using a brush or roller. Spray method can take up to 20% thinning but this shall require 3 – 4 coats",
      valueType: "paragraph",
    },
    {
      key: "APPLICATION",
      value: "By brush, roller or spray",
      valueType: "paragraph",
    },
    {
      key: "CLEANING",
      value: "Clean tools and containers immediately using clean water.",
      valueType: "paragraph",
    },
    {
      key: "SPREADING CAPACITY",
      value:
        "6 – 7 m²/l for 2 coats.  <br/> These spreading capacities are derived from our own laboratory conditions and substrates and may vary from those of actual substrates. Substrate profile and porosity will greatly impact on coverage.",
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
        "2 – 3 Hours with recoating after 4 hours <br/> NOTE: AMBIENT TEMPERATURES DURING APPLICATION WILL GREATELY DETERMINE DRYING TIMES. LOWER TEMPERATURES DECREASES DRYING TIMES WHILST HIGHER TEMPERATURES ACCELERATES DRYING.",
      valueType: "paragraph",
    },
    {
      key: "DRYING TIME",
      value:
        "By brush, roller, or spray. Do NOT apply in rainy weather or late evening.",
      valueType: "paragraph",
    },
    {
      key: "CONSISTENCY & COLOUR",
      value: "White flowing consistency",
      valueType: "paragraph",
    },
    {
      key: "PACK SIZE",
      value: "1l, 4l, 10l and 20l",
      valueType: "paragraph",
    },
    {
      key: "SHELVE LIVE",
      value: [
        "2 year in its original tightly sealed container and in dry cool condition away from direct sunlight and excessive heat.",
        "Opened containers to be tightly re-sealed to avoid entrapping air. Product to be used up within a short period once opened.",
      ],
      valueType: "bullets",
    },
    {
      key: "TRANSPORT & STACKING",
      value:
        "Water based with very low V.O.C levels. Can easily be transported because of its Non-Hazardous nature. DO NOT STACK MORE THAN 4 BUCKETS",
      valueType: "paragraph",
    },
  ],
};

const section6: ProductSection = {
  index: 6,
  title: "Discalimer",
  description:
    "All information contained herein is given in good faith, based on our specialized knowledge and experience. We reserve the right to effect changes to product and specification alike in the interest of product development and improving technology.",
  iterations: [],
  type: "paragraph",
  footer: "",
  table: [],
};

export const aqua_undercoat_matt_emulsion_paint: Product = {
  id: 3,
  name: "Aqua Undercoat Matt emulsion paint",
  briefDescription:
    "Is a primary surface preparatory paint based on a tough copolymer emulsion applied to a wide range of substrates before the application of suitable water based top coats.",
  description:
    "Aqua Undercoat is a high-performance, water-based primer designed to prepare interior and exterior surfaces for flawless topcoat finishes. Its fast-drying formula creates a smooth, adhesive base that enhances paint durability and color vibrancy. Ideal for use on plaster, drywall, wood, metal, and previously painted surfaces, it effectively seals porous materials, blocks stains (e.g., watermarks, nicotine, or tannin bleed), and prevents uneven absorption. The low-VOC, eco-friendly composition ensures minimal odor and safer indoor air quality, making it suitable for homes, schools, and commercial spaces. Resistant to cracking and peeling, it promotes long-lasting results in diverse climates. Easy to apply with brushes, rollers, or sprayers, Aqua Undercoat dries to a neutral, sandable finish within 1–2 hours, streamlining project timelines. Its mildew-inhibiting properties add extra protection in humid environments. A must-have for professionals and DIYers seeking a reliable, non-toxic foundation for walls, trim, or furniture.",
  uri: "aqua_undercoat_matt_emulsion_paint",
  image: "",
  type: "Decorative",
  sections: [sectionOne, section2, section3, section4, section5, section6],
};
