import { Product, ProductSection } from "../types";

const section1: ProductSection = {
  index: 1,
  title: "COMPOSITION",
  description:
    "Next Trowel-On Cemento Dri-Tex is composed of evenly graded marble aggregates, fine fillers and carefully selected performance and workability additives bound together in a highly durable cementitious matrix. The incorporation of non-rusting marble aggregates makes Next Trowel-On Cemento Dri-Tex ideal for use in high salt environments such as beach-side locations.",
  iterations: [],
  type: "paragraph",
  footer: "",
  table: [],
};

const section2: ProductSection = {
  index: 2,
  title: "APPLICATION SPECIFICATIONS",
  description: "",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [],
};

const section3: ProductSection = {
  index: 3,
  title: "NEW SUBSTRATE",
  description:
    "Substrate should be prepared appropriately to ensure that it is clean, dry and sound. Always check to ensure cementitious plastered substrates profile is smooth and even, and to the recommended hardness to avoid chipping of sand particles on the surface. It highly recommended to precede NEXT TROWEL–ON TEXTURE MARBLE STONE FINISH with NEXT MASONRY PRIMER tinted to match the dominant marble stone finish colour.",
  iterations: [],
  type: "paragraph",
  footer: "",
  table: [],
};

const section4: ProductSection = {
  index: 4,
  title: "REDECORATION",
  description:
    "Old painted substrates have to be free from loose flaking paint, dirt and grease. Cracks and defective substrates have to be filled accordingly. All redecoration substrates have to be preceded with NEXT MASONRY PRIMER NEXT MASONRY PRIMER tinted to match the dominant marble stone finish colour before the application of NEXT TROWEL–ON TEXTURE MARBLE STONE FINISH.",
  iterations: [],
  type: "paragraph",
  footer: "",
  table: [],
};

const section5: ProductSection = {
  index: 5,
  title: "MIX PREPARATION",
  description: "",
  iterations: [
    "19.6 kg of Next Trowel-On Cemento Dri-Tex powder should be mixed with approximately 5.4 kg of Next Cemento Add-Mix on site immediately prior to application.",
    "To prepare mix, pour approximately 80% of the required Cemento into a clean mixing container and blend with a mechanical stirrer whilst slowly adding Next Trowel-On Cemento Dri-Tex powder.",
    "Continue to add powder and adjust viscosity with remaining Next Cemento Add-Mix as needed.",
    "Allow mix to stand for 2 minutes then briefly re-mix prior to application. Pot life of Next Trowel-On Cemento Dri-Tex is approximately 40 minutes at 20 ̊ C. ",
    "Do not remix material once it has started to harden in the pot. Prepare fresh batches as required.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section6: ProductSection = {
  index: 6,
  title: "APPLICATION",
  description: "",
  iterations: [
    "Next Trowel-On Cemento Dri-Tex is not suitable for use as a base render. Ensure surface has been rendered with a suitable Primer prior to coating with Next Trowel-On Cemento Dri-Tex. ",
    "Apply Next Trowel-On Cemento Dri-Tex to the surface with a steel trowel and spread evenly at a thickness governed by the coarsest particle size (approximately 1.5 mm). ",
    "Once applied, make ready for finishing by removing excess material using a steel trowel. ",
    "Using a plastic texture float, rub the wet Next Trowel-On Cemento Dri-Tex in a circular motion to create a uniform appearance. Stop regularly to remove excess paste from the face of the finishing trowel then return to floating until surface is uniform. ",
    "Once the desired finish has been achieved, continue to apply more material and float. ",
    "All wall faces must be completed in a single session working from one corner to the other. ",
    "In order to avoid visible joins, a “wet-edge” should be maintained at all times. *For best results, Next Trowel-On Cemento Dri-Tex should not be applied in temperatures above 25 ̊ Celsius, direct sun or warm and windy conditions. Application of Next Trowel-On Cemento Dri-Tex to porous masonry surfaces may be problematic as a result of excessive suction. ",
    "Porous substrata (such as old sand and cement render) can be dampened with water prior to Next Trowel-On Cemento Dri-Tex application. In this case ensure that no free water is on the surface during Cemento Dri-Tex application. If touching the substrate leaves your hand wet, there is still too much surface water present for Next Trowel-On Cemento Dri-Tex application. Once finished, Next Trowel-On Cemento Dri-Tex should be left to cure for not less than 5 days prior to over coating with two (2) coats of Nextshield Trowel-On Finishing Coat.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section7: ProductSection = {
  index: 7,
  title: "SAFETY & HANDLING",
  description: "",
  iterations: [
    "Cemento Dri-Tex is non-hazardous however it contains cement which is alkaline in nature. It is recommended the use of skin protection whilst mixing and applying Cemento Dri-Tex. ",
    "Always prepare Cemento Dri-Tex in a well-ventilated area and avoid inhaling nuisance dust during mix preparation.",
    "Keep out of reach of children",
    "Water based with very low V.O.C levels. Spillages to be washed off using water following local regulations.",
    "Always wear protective gears i.e. gloves and clothes. Avoid exposure on skin and eyes. If ingested, DO NOT INDUCE VOMITING. Instead, urgently consult a physician for medical advice. Carry along the label or container with detailed information.",
    "Always follow local disposal regulations.",
  ],
  type: "numbered",
  footer: "",
  table: [],
};

const section8: ProductSection = {
  index: 8,
  title: "Technical Data",
  description: "",
  iterations: [],
  type: "bullets",
  footer: "",
  table: [
    {
      key: "FINISH",
      value: "Gritty Marble Finish",
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
      value: "100",
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
      value: ["2.0mm: 3.0 – 3.5 kg/m²",
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
        "HARD DRY: 4 – 7 DAYS",
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
      value: "Off-White Powder",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "PACK SIZE",
      value: "20KG and 50KG Bags",
      valueType: "paragraph",
      footer: undefined,
    },
    {
      key: "SHELVE LIVE",
      value: [
        "1 year in its original tightly sealed bag and in dry cool condition away from direct sunlight and excessive heat. Avoid humid damp condition due to reaction with cement that cure through hydrolysis.",
        "Opened bags to be tightly re-sealed to avoid entrapping air and moisture. Product to be used up within a short period.",
      ],
      valueType: "bullets",
      footer: undefined,
    },
    {
      key: "TRANSPORT & STACKING",
      value:
        "Next Trowel-On Cemento Dri-Tex can easily be transported because of its Non-Hazardous nature. Can be stacked to safe heights as it is in powder form.",
      valueType: "paragraph",
      footer: undefined,
    },
  ],
};

const section9: ProductSection = {
  index: 9,
  title: "DISCLAIMER",
  description:
    "All information contained herein is given in good faith, based on our specialized knowledge and experience. We reserve the right to effect changes to product and specification alike in the interest of product development and improving technology.",
  iterations: [],
  type: "paragraph",
  footer: "",
  table: [],
};

export const next_trowel_on_cemento_dri_tex: Product = {
  id: 1,
  name: "Next Trowel-On Cemento Dri-Tex",
  briefDescription:
    "Polymer/Cement-based architectural wall finish for application to renders & other masonry based surfaces.",
  description:
    "Next Trowel-On Cemento Dri-Tex is the dry-mix alternative to traditional acrylic based architectural wall finishes. Next Trowel-On Cemento Dri-Tex is supplied as Off-White powder which is mixed on-site, applied by trowel, and then painted in the desired colour. Next Trowel-On Cemento Dri-Tex is supplied in 20kg bags and is simply mixed with Next Cemento Add-Mix to achieve a workable paste ready for application. The use of Next Trowel-On Cemento Dri-Tex will result in a material saving of approximately 50% when compared to comparative pre-mixed acrylic texture coatings.",
  uri: "next_trowel-next_trowel_on_cemento_dri_tex",
  image: "/images/paint_thumbnails/Trowel-On-Texture-Cemento-thumb-2.png",
  type: "Decorative",
  sections: [section1, section2, section3, section4, section5, section6, section7, section8, section9],
};
