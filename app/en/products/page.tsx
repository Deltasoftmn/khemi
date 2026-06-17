import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Khimi Consulting",
  description: "Product Catalog",
};

const productCategories = [
  {
    title: "Collectors",
    items: [
      "Potassium amyl xanthate (PAX) - main collector used for strong flotation concentration of sulfide minerals such as copper, lead, and zinc.",
      "Sodium isobutyl xanthate (SIBX) - used as a primary flotation collector as it strongly floats sulfide minerals like copper, lead, and zinc.",
      "Isopropyl ethyl thiocarbamate (IPETC) - used to suppress pyrite to maintain high concentrate grade.",
      "TAF-7 (sodium dialkyl dithiophosphate) — Used to selectively float copper, lead, zinc, and molybdenum sulfide minerals, and significantly improves concentrate quality by not recovering gangue minerals like pyrite and pyrrhotite.",
      "IBA — Has selective adsorption on copper, lead, and zinc sulfide minerals, keeping concentrate quality consistently high by not recovering pyrite.",
      "SSM - Selectively adsorbs on copper, lead, and zinc sulfide minerals, dramatically improving concentrate quality by depressing pyrite flotation.",
      "AFI-4G-10k - Selectively adsorbs on copper, lead, and zinc sulfide minerals, dramatically improving concentrate quality by depressing pyrite flotation.",
      "TAF-72h - Selectively adsorbs on copper, lead, and zinc sulfide minerals, ensuring high concentrate quality by depressing pyrite flotation.",
      "NBA Dibutyldithiophosphate - capable of depressing pyrite flotation, thereby significantly improving concentrate quality."
    ]
  },
  {
    title: "Frothers",
    items: [
      "DP-4 (alkyl sulfone calcium mixture) - Increases the efficiency of the mineral flotation process by keeping the foam stable and fine-textured.",
      "M-TF 421 flotation reagent - ensures the efficiency of the mineral flotation process by generating stable, uniform foam.",
      "MTF-321 - Ensures the efficiency of the mineral flotation process by generating stable, uniform foam.",
      "Methyl isobutyl carbinol (MIBC) - Formulates stable, uniform foam in the flotation concentration process, improving mineral recovery."
    ]
  },
  {
    title: "pH Regulators",
    items: [
      "Sodium carbonate - Stabilizes the flotation of minerals like copper and molybdenum and increases reagent efficiency by maintaining an alkaline environment.",
      "Sodium hydroxide - Stabilizes reagent action and increases mineral flotation efficiency by regulating the pH of the flotation environment."
    ]
  },
  {
    title: "Corrosion Inhibitors",
    items: [
      "1,3-Diethyl thiourea - Used to reduce oxidation and wear by forming a protective layer on steel surfaces of equipment, pipes, and tanks."
    ]
  },
  {
    title: "Depressants",
    items: [
      "Sodium metabisulfite - Suppresses oxidation and limits the flotation of gangue minerals, thereby ensuring the purity and recovery of target minerals like copper and gold.",
      "Sodium hydrosulfide - Depresses copper flotation, allowing molybdenum to be recovered in pure form."
    ]
  },
  {
    title: "Activators",
    items: [
      "Copper (II) sulfate - Activates the mineral surface and increases collector adsorption, thereby enhancing zinc flotation efficiency.",
      "Iron (III) sulfate - Flocculates and precipitates fine dust and clay particles, increasing the efficiency of water purification processes."
    ]
  },
  {
    title: "Auxiliaries",
    items: [
      "Isopropyl alcohol (IPA) - Widely used to safely and efficiently clean precise electronic equipment such as PLCs, sensors, and cameras due to its non-residue, rapid evaporation properties."
    ]
  }
];

export default function EnglishProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Navy Banner Header Section */}
      <section className="bg-[#0b1e33] pt-40 pb-24 text-white relative overflow-hidden">
        {/* Subtle decorative glowing background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2ecc71]/5 rounded-full blur-2xl pointer-events-none -ml-24 -mb-24" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Products
            </h1>
            <p className="text-slate-300 text-lg">
              Product List
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section (White Background with 2-Column Grid) */}
      <section className="py-16 bg-white text-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {productCategories.map((cat, catIdx) => (
              <div key={catIdx}>
                {/* Category Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1e33] mb-8 pb-2 border-b border-slate-100">
                  {cat.title}
                </h2>
                
                {/* 2-Column Grid for Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-3 items-start">
                      <span className="font-bold text-[#0b1e33] text-base shrink-0 select-none">
                        {itemIdx + 1}.
                      </span>
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
