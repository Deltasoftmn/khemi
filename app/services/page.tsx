import { Metadata } from "next";
import { Package, ShieldCheck, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Үйлчилгээ - Khimi Consulting",
  description: "Манай үйлчилгээнүүд",
};

const services = [
  {
    id: "trade",
    title: "Химийн бодисын худалдаа",
    icon: Package,
  },
  {
    id: "safety",
    title: "Химийн бодисын аюулгүй хэрэглээ, хадгалалт, агуулахын менежментийн зөвлөгөө",
    icon: ShieldCheck,
  },
  {
    id: "research",
    title: "“Уул уурхайн үйлдвэрлэлийн технологийн чиглэлээр лабораторийн судалгаа, шинжилгээг зохион байгуулах”",
    icon: FlaskConical,
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Navy Banner Header Section */}
      <section className="bg-[#0b1e33] pt-40 pb-24 text-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#2ecc71]/5 rounded-full blur-2xl pointer-events-none -ml-24 -mb-24" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Үйлчилгээ
            </h1>
            <div className="w-12 h-1.5 bg-[#2ecc71] rounded-full mb-6" />
            <p className="text-slate-350 text-lg md:text-xl leading-relaxed font-light">
              Бид уул уурхай болон химийн салбарт мэргэжлийн түвшинд ажиллаж, дараах үйлчилгээнүүдийг үзүүлдэг.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section (3-Column Grid) */}
      <section className="py-20 bg-white text-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  id={service.id}
                  className="bg-white border border-slate-100 hover:border-emerald-500/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-start group min-h-[280px] justify-between scroll-mt-36"
                >
                  <div className="w-full">
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-[#2ecc71]/10 flex items-center justify-center border border-[#2ecc71]/20 text-[#2ecc71] mb-8 group-hover:bg-[#2ecc71] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Service Description */}
                    <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
                      {service.title}
                    </p>
                  </div>

                  {/* Visual bottom indicator */}
                  <div className="w-8 h-1 bg-[#2ecc71]/30 rounded-full mt-6 group-hover:w-16 group-hover:bg-[#2ecc71] transition-all duration-350" />
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
