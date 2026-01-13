import { Button } from "@/components/ui/button";
import weServeData from "@/data/weServeData";

const WeServe = () => {
  return (
    <div className="min-h-screen bg-white text-[#333] font-sans py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h1 className="sr-only">We Serve</h1>

        {weServeData.map((item, index) => {
          // Even index: Image Right (Text Left)
          // Odd index: Image Left (Text Right)
          // Wait, reference says "ZigZag".
          // Row 1: Image Left, Text Right (Odd in 1-based, 0 in 0-based means... let's stick to reference visual.)
          // Actually, let's just alternate.

          const isImageLeft = index % 2 === 0;

          return (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 md:py-16 border-b border-gray-100 last:border-0">

              {/* Image Column */}
              <div className={`w-full md:w-1/3 flex justify-center ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-gray-100 shadow-sm group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className={`w-full md:w-2/3 space-y-4 ${isImageLeft ? 'md:order-2' : 'md:order-1 text-right md:text-left'}`}>
                {/* Re-align text to left always for readability? Reference usually has text aligned to direction or left. 
                    Let's check "Text Left/Image Right" usually text is left aligned. 
                    "Image Left/Text Right" text is left aligned.
                    So text always left aligned. order-1/order-2 handles position.
                 */}
                <div className="flex flex-col items-start">
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-black mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-justify mb-6 text-[15px]">
                    {item.description}
                  </p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-2 uppercase text-xs font-bold tracking-widest transition-all"
                  >
                    Read More
                  </Button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeServe;
