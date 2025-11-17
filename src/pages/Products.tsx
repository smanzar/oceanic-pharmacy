import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productsHero from "@/assets/products-hero.jpg";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const productDetailRef = useRef<HTMLDivElement>(null);
  const howToUseRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [productsHero, productsHero, productsHero];

  useEffect(() => {
    if (bannerRef.current) {
      gsap.from(bannerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (productDetailRef.current) {
      gsap.from(productDetailRef.current.querySelectorAll(".detail-item"), {
        scrollTrigger: {
          trigger: productDetailRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    if (howToUseRef.current) {
      gsap.from(howToUseRef.current.querySelectorAll(".step-item"), {
        scrollTrigger: {
          trigger: howToUseRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const howToUseSteps = [
    {
      step: 1,
      title: "Read Instructions",
      description: "Carefully read all product instructions and warnings before use.",
      image: productsHero,
    },
    {
      step: 2,
      title: "Proper Dosage",
      description: "Take the recommended dosage as prescribed by your healthcare provider.",
      image: productsHero,
    },
    {
      step: 3,
      title: "Regular Schedule",
      description: "Maintain a consistent schedule for optimal effectiveness.",
      image: productsHero,
    },
    {
      step: 4,
      title: "Store Properly",
      description: "Keep in a cool, dry place away from direct sunlight.",
      image: productsHero,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section
        ref={bannerRef}
        className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary/20 to-accent/20"
      >
        <img
          src={productsHero}
          alt="Products"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-literata text-[#1c1a1d] mb-4">Our Products</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Premium pharmaceutical products for your health and wellness
          </p>
        </div>
      </section>

      {/* Product Detail Section */}
      <section ref={productDetailRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Slider */}
            <div className="detail-item">
              <div className="relative">
                <img
                  src={productImages[currentImageIndex]}
                  alt="Product"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent opacity-50"
                    }`}
                  >
                    <img
                      src={productImages[index]}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="detail-item space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-literata text-[#1c1a1d] mb-4">Premium Immune Boost</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-primary">$29.99</span>
                  <span className="text-muted-foreground line-through">$39.99</span>
                </div>
              </div>

              <div className="prose prose-lg">
                <p className="text-muted-foreground">
                  Our Premium Immune Boost is a scientifically formulated supplement designed to
                  strengthen your body's natural defenses. Made with the highest quality natural
                  ingredients, it provides comprehensive immune system support.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Key Benefits:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Strengthens immune system function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Rich in essential vitamins and minerals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Made from natural, safe ingredients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Scientifically tested and proven effective</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section ref={howToUseRef} className="py-20 textured-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-literata text-[#1c1a1d] text-center mb-16">How to Use This Product</h2>
          <div className="space-y-20">
            {howToUseSteps.map((step, index) => (
              <div
                key={step.step}
                className={`step-item grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-semibold font-literata">
                      {step.step}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-literata text-[#1c1a1d]">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-literata text-[#1c1a1d] text-center mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div className="product-card hover-btn" key={item}>
                <div className="product-card-img">
                  <span className="text-4xl">💊</span>
                  <div className="overlay"></div>
                </div>
                <div className="product-card-content">
                  <h6 className="text-xl font-semibold">Product Name {item}</h6>
                  <p className="text-sm">Supplements</p>
                  <p className="price mt-3">$24.99 <del>$200.00</del></p>
                </div>
                <span className="for-border"></span>
              </div>
              // <Card key={item} className="hover:shadow-xl transition-shadow">
              //   <CardContent className="p-6">
              //     <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
              //     <h3 className="font-bold text-xl mb-2">Product Name {item}</h3>
              //     <p className="text-muted-foreground mb-4">Supplements</p>
              //     <p className="text-2xl font-bold text-primary mb-4">$24.99</p>
              //     <Button className="w-full">View Details</Button>
              //   </CardContent>
              // </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
