import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Award, Users, Globe, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";

export default function EnglishHome() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Industrial factory with silver pipes"
            fill
            className="object-cover"
            priority
          />
          {/* Custom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We value quality, reliability and efficiency.
            </h1>

            <Link href="/en/about" className="inline-flex items-center gap-3 group">
              <span className="text-[#2ecc71] text-2xl font-semibold tracking-wide group-hover:text-[#27ae60] transition-colors">
                About Us
              </span>
              <div className="w-10 h-10 rounded-full border-2 border-[#2ecc71] flex items-center justify-center group-hover:bg-[#2ecc71]/10 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#2ecc71]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="relative mb-8">
                <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] -z-10" />
                <h2 className="text-4xl font-bold text-slate-800">About Us</h2>
                <div className="w-12 h-1.5 bg-[#2ecc71] rounded-full mt-4" />
              </div>

              <div className="space-y-6 text-slate-650 leading-relaxed font-light">
                <p>
                  We offer solutions tailored to the specifics of the production process, not just as a supplier. 
                  Based on the knowledge and experience of our professional team, we advise on the optimal use of reagents and products, and provide occupational safety knowledge and information.
                  In the framework of cooperation with national universities, we conduct research on production processes, aiming to create real value in improving production efficiency, stable operations, and reducing costs for our clients.
                </p>
              </div>
            </div>

            {/* Right Content - Our Mission Card */}
            <div className="relative">
              <div className="absolute -left-6 top-2/3 w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] z-10" />
              <div className="absolute -right-10 top-10 w-20 h-20 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,1)] -z-10" />
              
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-[1.5rem] p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
                <div className="absolute top-6 right-6 w-8 h-1.5 bg-[#2ecc71] rounded-full opacity-60" />
                
                <div className="w-16 h-16 mb-8 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#2ecc71] opacity-20" />
                  <div className="absolute inset-2 rounded-full border-2 border-[#2ecc71] opacity-50" />
                  <div className="absolute inset-4 rounded-full border-2 border-[#2ecc71]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]" />
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We will create value through quality products and reliable partnerships to ensure the continuous and safe operation of the mining industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-600">Our Company Advantages</h2>
            <div className="flex items-center flex-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] mr-1.5" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] relative z-10" />
              <div className="h-[2px] bg-[#2ecc71] flex-1 -ml-1" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Card 1: Quality */}
            <div className="bg-slate-55 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Award className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Quality</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We supply certified products that meet customer requirements and international standards.
                </p>
              </div>
            </div>

            {/* Card 2: Reliability (Active) */}
            <div className="bg-slate-50 rounded-xl p-8 shadow-[0_15px_40px_rgba(46,204,113,0.15)] border-2 border-[#2ecc71] relative pt-14 pb-10 transform lg:scale-105 z-10 h-full min-h-[360px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Users className="w-20 h-20 text-[#2ecc71] mb-6 stroke-[1.5]" />
                <h3 className="text-2xl font-bold text-[#2ecc71] mb-4">Reliability</h3>
                <p className="text-sm text-slate-650 leading-relaxed">
                  We value customer-centricity. We understand user needs and suggest the most suitable solutions.
                </p>
              </div>
            </div>

            {/* Card 3: Innovation */}
            <div className="bg-slate-55 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Globe className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Innovation</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We always seek innovative ideas and introduce truly effective operations in our field.
                </p>
              </div>
            </div>

            {/* Card 4: Safe Operations */}
            <div className="bg-slate-55 rounded-xl p-8 shadow-sm border border-slate-200 relative pt-12 h-full min-h-[340px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-[#2ecc71] rounded-b-md" />
              <div className="flex flex-col items-center text-center">
                <Shield className="w-16 h-16 text-slate-400 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-slate-500 mb-4">Safety</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We continuously develop our knowledge and skills, providing a workplace with transparent occupational safety and health standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="pt-24 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-slate-650">Mission & Vision</h2>
            <div className="flex items-center flex-1 ml-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] mr-1.5" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ecc71] relative z-10" />
              <div className="h-[2px] bg-[#2ecc71] flex-1 -ml-1" />
            </div>
          </div>
        </div>

        {/* Content Banner */}
        <div className="relative w-full overflow-hidden py-20">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/Featured.png')] bg-cover bg-center" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[450px]">
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-0 h-full pt-4">
              {/* Vision Circle */}
              <div className="relative md:-mr-8 w-[420px] h-[420px] rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-10 text-center z-20 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-3xl font-bold text-[#2ecc71] mb-6">Vision</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  We will contribute to the development of Mongolian mining with quality, reliable products and innovative solutions, and be the leading supplier in the industry.
                </p>
              </div>

              {/* Cooperation Circle */}
              <div className="relative w-[520px] h-[520px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-14 text-center z-30 transition-transform duration-300 hover:-translate-y-2 mt-8 md:mt-0">
                <h3 className="text-4xl font-bold text-[#2ecc71] mb-6">Cooperation & Partnership</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-light">
                  Khimi Consulting LLC cooperates with internationally renowned manufacturers such as Qualitet, Shandong Benxin Chemical, and Twenty 5, and supplies additives, materials, and mining reagents used in the road, construction, and mining sectors to the domestic market.
                </p>
              </div>
            </div>

            <div className="absolute right-[8%] bottom-4 w-32 h-32 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,1)] z-40" />
          </div>
        </div>
      </section>

      {/* Impact & Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <p className="text-2xl md:text-[28px] text-slate-700 leading-normal font-medium">
              We actively support educational initiatives, environmental restoration projects, and national sustainability programs to create a collective impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Mining Company</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={30} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Processing Plant</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={20} suffix="+" />
              </span>
              <span className="text-xl text-slate-600">Partners</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-[6rem] font-bold text-[#42b883] mb-4 tracking-tighter">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="text-xl text-slate-600">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
