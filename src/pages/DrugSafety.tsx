import { ShieldCheck, Activity, FileText, AlertTriangle, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DrugSafety = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-700">

      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-primary mb-6">
            Drug Safety
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600">
            Ensuring Patient Well-being Through Pharmacovigilance
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-4xl">
        <p className="text-lg leading-relaxed text-justify mb-8">
          At Oceanic Pharma, <strong>Drug Safety—also known as Pharmacovigilance</strong>—is a fundamental component of our commitment to patient well-being. Pharmacovigilance encompasses the scientific processes and activities related to the detection, evaluation, understanding, and prevention of adverse effects or any other medicine-related issues. Our objective is to ensure that the benefits of our medicinal products consistently outweigh any potential risks.
        </p>

        {/* Commitment Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="text-primary w-6 h-6" />
            Our Commitment to Patient Safety
          </h2>
          <p className="mb-4 text-justify">
            Oceanic Pharma is dedicated to upholding the highest standards of patient safety across the entire product lifecycle, from research and development to post-marketing surveillance. We operate in full compliance with applicable local and international regulatory requirements and continuously enhance our safety systems to protect patients and healthcare professionals.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Our commitment includes:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                <span>Prioritizing patient safety in all operational decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                <span>Maintaining robust pharmacovigilance systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                <span>Ensuring timely and transparent safety communication</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Safety Monitoring Activities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity className="text-primary w-6 h-6" />
            Safety Monitoring Activities
          </h2>
          <p className="mb-6">The Oceanic Pharma Drug Safety team actively performs the following pharmacovigilance activities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Adverse Event Monitoring", desc: "Continuous collection, analysis, and medical assessment of adverse events and adverse drug reactions." },
              { title: "Risk Management", desc: "Identification and mitigation of potential safety risks through structured risk management plans." },
              { title: "Post-Marketing Surveillance", desc: "Ongoing evaluation of product safety following market authorization to detect rare or long-term effects." },
              { title: "Regulatory Reporting", desc: "Accurate and timely submission of safety reports to relevant health authorities in accordance with regulatory guidelines." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Monitor */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="text-primary w-6 h-6" />
            What We Monitor
          </h2>
          <p className="mb-6">Oceanic Pharma systematically monitors:</p>
          <ul className="space-y-4">
            <li className="bg-blue-50/50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900">Adverse Drug Reactions (ADRs)</h4>
              <p className="text-sm text-blue-800">Unintended and harmful responses associated with the use of medicinal products.</p>
            </li>
            <li className="bg-blue-50/50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900">Adverse Events (AEs)</h4>
              <p className="text-sm text-blue-800">Any unfavorable medical occurrence reported during treatment, regardless of causality.</p>
            </li>
            <li className="bg-blue-50/50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900">Special Safety Situations</h4>
              <p className="text-sm text-blue-800">Including medication errors, overdose, misuse, abuse, off-label use, pregnancy exposure, and product quality complaints with potential safety implications.</p>
            </li>
          </ul>
        </div>

        {/* Reporting Adverse Events - Call to Action */}
        <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <AlertTriangle className="text-yellow-400 w-8 h-8" />
                Reporting Adverse Events
              </h2>
              <p className="text-gray-300 max-w-xl">
                Oceanic Pharma encourages healthcare professionals, patients, distributors, and partners to report any suspected adverse events or safety concerns related to our products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
              <ExternalLink className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Online Reporting</h4>
              <p className="text-sm text-gray-300 mb-4">Use our secure online form to submit a report instantly.</p>
              <Button variant="outline" className="w-full border-white/20 text-green-800 hover:bg-white hover:text-gray-900">Report Online</Button>
            </div>
            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Direct Contact</h4>
              <p className="text-sm text-gray-300 mb-4">Contact the Oceanic Pharma Drug Safety Department.</p>
              <Button variant="outline" className="w-full border-white/20 text-green-800 hover:bg-white hover:text-gray-900">Contact Us</Button>
            </div>
            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Regulatory Bodies</h4>
              <p className="text-sm text-gray-300 mb-4">Report directly to local regulatory authorities where applicable.</p>
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-400 text-center italic">
            Timely reporting enables continuous evaluation and improvement of the safe use of our medicines.
          </p>
        </div>

        {/* Why it Matters & Conclusion */}
        <div className="mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Drug Safety Matters</h2>
          <p className="text-justify mb-8 text-gray-600">
            While clinical trials provide essential safety data, they are conducted under controlled conditions with limited patient populations. Continuous pharmacovigilance allows Oceanic Pharma to monitor real-world use and maintain an up-to-date benefit–risk profile for each product.
          </p>

          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
            <h3 className="text-xl font-bold text-primary mb-3">Conclusion</h3>
            <p className="text-gray-700 italic">
              "Oceanic Pharma remains firmly committed to protecting public health through strong pharmacovigilance practices, regulatory compliance, and ethical responsibility. By continuously monitoring the safety of our products and engaging transparently with stakeholders, we strive to deliver safe, effective, and high-quality medicines worldwide."
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default DrugSafety;
