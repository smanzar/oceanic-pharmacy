import Accordion, { Item } from "./accordion";
import data from "@/data";


const Faq = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl font-literata text-[#1c1a1d] md:text-5xl mb-12 text-center">
          Frequently Asked Questions
          </h2>
        <Accordion items={data?.faqs} />
        {/* multiple open */}
        {/* <Accordion items={data} allowMultiple /> */}
      </div>
    </>
  )
}
export default Faq;