import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productsHero from "@/assets/products-hero.jpg";
import ProductCard from "@/components/ProductCard";
import data from "@/data";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.from(bannerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

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

      {/* Related Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-literata text-[#1c1a1d] text-center mb-12 text-foreground">
            Our Products
          </h2>
          <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {data.products} */}
            {data.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
