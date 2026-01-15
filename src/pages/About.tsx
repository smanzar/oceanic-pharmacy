import { useRef } from "react";
import { Globe, Target, Heart, Award, Check } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg"; // Keeping the asset
import aboutData from "@/data/aboutData";

// Removed GSAP animations to ensure exact design replication without unauthorized behavior changes.

const About = () => {
  const manufacturing = aboutData.sections.find(s => s.type === 'manufacturing');
  const mantra = aboutData.sections.find(s => s.type === 'mantra');
  const culture = aboutData.sections.find(s => s.type === 'culture');
  const social = aboutData.sections.find(s => s.type === 'social');

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans pt-20">

      {/* 1. HERO BANNER */}
      <section className="relative h-[200px] md:h-[250px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">{aboutData.hero.title}</h1>
          <div className="mt-2 text-sm font-medium text-gray-200">
            <span>Home</span> / <span className="text-primary">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Text Column */}
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm border-b-2 border-primary inline-block pb-1">
              {aboutData.hero.subtitle}
            </h4>
            <div className="space-y-4 text-[15px] leading-7 text-gray-600">
              <p className="italic font-medium text-gray-800">
                {aboutData.intro.quote}
              </p>
              {aboutData.intro.content.map((p, i) => (
                <p key={i} className="text-justify">
                  {p}
                </p>
              ))}
            </div>
          </div>
          {/* Image Column */}
          <div className="h-full min-h-[300px] bg-gray-100 border border-gray-200 flex items-center justify-center">
            {/* Placeholder for the exact image from the reference site */}
            <Globe className="w-16 h-16 text-gray-300" />
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 uppercase mb-2">
              {aboutData.philosophy.title}
            </h3>
            <p className="text-gray-600 italic">
              {aboutData.philosophy.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <h4 className="text-lg font-bold text-primary uppercase">
                    {val.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION / MISSION / AIM */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="bg-primary/5 p-8 border-l-4 border-primary">
            <h4 className="text-xl font-bold text-primary mb-3 uppercase">Vision</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {aboutData.visionMission.vision}
            </p>
          </div>
          {/* Mission */}
          <div className="bg-primary/5 p-8 border-l-4 border-primary">
            <h4 className="text-xl font-bold text-primary mb-3 uppercase">Mission</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {aboutData.visionMission.mission}
            </p>
          </div>
          {/* Aim */}
          <div className="bg-primary/5 p-8 border-l-4 border-primary">
            <h4 className="text-xl font-bold text-primary mb-3 uppercase">Aim</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {aboutData.visionMission.aim}
            </p>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING FACILITY */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
              {manufacturing?.title}
            </h3>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 leading-7 text-justify text-[15px]">
              {manufacturing?.content}
            </p>
          </div>
          {/* Image */}
          <div className="h-[300px] bg-gray-100 border border-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Commitment Image</span>
          </div>
        </div>
      </section>

      {/* 6. OUR MANTRA */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-5xl">
          <h3 className="text-2xl font-bold text-primary uppercase mb-2">
            {mantra?.title}
          </h3>
          {/* <p className="text-lg italic text-gray-600 mb-6 font-serif">
            {mantra?.quote}
          </p> */}
          <p className="text-gray-600 leading-7 text-[15px]">
            {mantra?.content}
          </p>
        </div>
      </section>

      {/* 7. CULTURE & SOCIAL */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Culture */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
              {culture?.title}
            </h3>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 leading-7 text-justify text-[15px]">
              {culture?.content}
            </p>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
              {social?.title}
            </h3>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 leading-7 text-justify text-[15px]">
              {social?.content}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
