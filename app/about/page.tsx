import { Metadata } from "next";
import { Info, Award, Target, Eye, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Бидний тухай - Khimi Consulting",
  description: "Хими Консалтинг ХХК-ийн танилцуулга",
};

export default function AboutPage() {
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
              Бидний тухай
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
            {/* Танилцуулга Section */}
            <div className="bg-slate-50/50 border border-slate-100 hover:border-emerald-500/10 rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1e33] tracking-tight">
                  Танилцуулга
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-light">
                  Хими Консалтинг ХХК нь 2018 оноос хойш Монголын уул уурхайн салбарт химийн бодисын аюулгүй ажиллагааны сургалт зөвлөгөөний чиглэлээр тогтвортой үйл ажиллагаа явуулж ирсэн. 2025 оноос уул уурхай, баяжуулалт, аж үйлдвэрийн салбарт зориулсан химийн бодис, урвалж болон олон улсын стандартад нийцсэн бүтээгдэхүүнийг дэлхийн нэр хүндтэй үйлдвэрлэгчдээс нийлүүлж, салбарын мэргэжлийн туршлага, тасралтгүй үйл ажиллагааг хослуулан харилцагчдын урт хугацааны түншлэлийг эрхэмлэн ажиллаж байна.
                </p>
              </div>
            </div>

            {/* Бидний тухай Section */}
            <div className="bg-slate-50/50 border border-slate-100 hover:border-emerald-500/10 rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-6 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0b1e33] tracking-tight">
                  Бидний тухай
                </h2>
                <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Бид зөвхөн ханган нийлүүлэгчийн хувиар бус, үйлдвэрлэлийн процессын онцлогт нийцсэн шийдлийг санал болгодог.
                  </p>
                  <p>
                    Мэргэжлийн баг хамт олны мэдлэг туршлагад тулгуурлан урвалж, бүтээгдэхүүний оновчтой хэрэглээний талаар зөвлөмж өгч, аюулгүй ажиллагааны мэдлэг мэдээллээр ханган ажилладаг.
                  </p>
                  <p>
                    Бид улсын нэр хүндтэй их сургуулиудын хамтын ажиллагааны хүрээнд үйлдвэрлэлийн процессийн судалгааг явуулж харилцагчдын үйлдвэрлэлийн үр ашиг, тогтвортой ажиллагаа болон зардлыг бууруулах бодит үнэ цэнийг бүтээхэд чиглэнэ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Mission, Vision, and Partnerships */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Эрхэм зорилго */}
            <div className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-6 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0b1e33] mb-4 tracking-tight">
                Эрхэм зорилго
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light">
                “Бид уул уурхайн үйлдвэрлэлийн тасралтгүй, аюулгүй ажиллагааг хангах зорилгоор чанартай бүтээгдэхүүн, найдвартай түншлэлээр үнэ цэнийг бүтээнэ.”
              </p>
            </div>

            {/* Алсын хараа */}
            <div className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-6 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0b1e33] mb-4 tracking-tight">
                Алсын хараа
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light">
                Монголын уул уурхайн хөгжилд чанартай, найдвартай бүтээгдэхүүн, инновацын шийдлээр хувь нэмэр оруулан, салбарын тэргүүлэх нийлүүлэгч байна.
              </p>
            </div>

            {/* Хамтын ажиллагаа, түншлэл */}
            <div className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group">
              <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-6 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0b1e33] mb-4 tracking-tight">
                Хамтын ажиллагаа, түншлэл
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light">
                Хими Консалтинг ХХК нь Qualitet , Shandong Benxin Chemical ,Twenty 5 зэрэг олон улсын нэр хүндтэй үйлдвэрлэгчидтэй хамтын ажиллагаатай бөгөөд, зам, барилга уул уурхайн салбарт ашиглагддаг нэмэлт бүтээгдэхүүн, материал, уул уурхайн реагентуудыг дотоодын зах зээлд ханган нийлүүлж байна.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
