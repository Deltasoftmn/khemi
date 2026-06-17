import { Metadata } from "next";
import { Info, Award, Target, Eye, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Khimi Consulting",
  description: "Introduction to Khimi Consulting LLC",
};

export default function EnglishAboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Navy Banner Header Section */}
      <section className="bg-[#0b1e33] pt-40 pb-24 text-white relative overflow-hidden">
        {/* Subtle decorative glowing background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2ecc71]/5 rounded-full blur-2xl pointer-events-none -ml-24 -mb-24" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              About Us
            </h1>
            <div className="w-12 h-1.5 bg-[#2ecc71] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content Section (White Background) */}
      <section className="py-20 bg-white text-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Sections: Introduction & About Us */}
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Introduction Section */}
            <div className="bg-slate-50/50 border border-slate-100 hover:border-emerald-500/10 rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1e33] tracking-tight">
                  Introduction
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-light">
                  Khimi Consulting LLC has been operating stably in the Mongolian mining sector in the field of chemical safety training and consulting since 2018. Since 2025, we have been supplying chemicals, reagents and products that meet international standards for the mining, concentration and industrial sectors from world-renowned manufacturers, combining professional experience and continuous operations in the sector, valuing long-term partnerships with our clients.
                </p>
              </div>
            </div>

            {/* About Us Section */}
            <div className="bg-slate-50/50 border border-slate-100 hover:border-emerald-500/10 rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-6 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1e33] tracking-tight">
                  About Us
                </h2>
                <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    We offer solutions tailored to the specifics of the production process, not just as a supplier.
                  </p>
                  <p>
                    Based on the knowledge and experience of our professional team, we advise on the optimal use of reagents and products, and provide occupational safety knowledge and information.
                  </p>
                  <p>
                    In the framework of cooperation with national universities, we conduct research on production processes, aiming to create real value in improving production efficiency, stable operations, and reducing costs for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Mission, Vision, and Partnerships */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-6 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0b1e33] mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light">
                “We will create value through quality products and reliable partnerships to ensure the continuous and safe operation of the mining industry.”
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-6 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0b1e33] mb-4 tracking-tight">
                Vision
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light">
                We will contribute to the development of Mongolian mining with quality, reliable products and innovative solutions, and be the leading supplier in the industry.
              </p>
            </div>

            {/* Cooperation & Partnerships */}
            <div className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-6 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0b1e33] mb-4 tracking-tight">
                Cooperation & Partnership
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light">
                Khimi Consulting LLC cooperates with internationally renowned manufacturers such as Qualitet, Shandong Benxin Chemical, and Twenty 5, and supplies additives, materials, and mining reagents used in the road, construction, and mining sectors to the domestic market.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
