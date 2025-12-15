import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import healthTipsHero from "@/assets/health-tips-hero.jpg";

gsap.registerPlugin(ScrollTrigger);

const HealthTips = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.from(bannerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (blogsRef.current) {
      gsap.from(blogsRef.current.querySelectorAll(".blog-card"), {
        scrollTrigger: {
          trigger: blogsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  const blogs = [
    {
      title: "Health & Wellness: Empowering You to Live Your Best Life",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      category: "Wellness",
      image: '/images/blog2.jpg',
      content: `
        In today’s fast-paced world, health and wellness have become fundamental to leading a fulfilling and productive life. At Oceanic Pharma, we recognize that true wellness is a holistic balance of physical, mental, and emotional well-being. Our scientifically formulated supplements are designed to support you on this journey, providing essential nutrition that helps you maintain vitality and strength every day.
        
        <strong>Understanding Health & Wellness</strong>
        
        Health and wellness go beyond merely avoiding illness. They encompass nurturing your body, mind, and spirit through balanced nutrition, regular physical activity, and mindful lifestyle choices. Proper nutrition plays a critical role in this balance, and our range of supplements is created to fill nutritional gaps, ensuring your body receives the key vitamins and minerals it needs to thrive.

        <strong>Oceanic Pharma Supplements:</strong> Your Trusted Wellness Partner

        <strong>Multivitamins:</strong> A carefully balanced blend of essential vitamins and minerals to support immune function, energy production, and overall health.

        <strong>Calcium & Vitamin D3:</strong> Designed to promote strong bones and healthy muscle function, helping prevent bone-related issues and support daily mobility.

        <strong>Cholecalciferol (Vitamin D3):</strong> Vital for immune health, nervous system function, and maintaining mood balance.

        <strong>The Role of Nutrition in a Wellness Routine</strong>

        Exercise and lifestyle habits are important pillars of wellness, but without adequate nutrition, they cannot reach their full potential. Our supplements are especially beneficial for individuals with busy lifestyles who may struggle to meet their nutritional needs through diet alone. By incorporating Oceanic Pharma’s products into your daily routine, you can enhance your energy levels, improve focus, and maintain overall well-being.

        <strong>Simple Tips to Enhance Your Health & Wellness</strong>

        1. Stay hydrated by drinking plenty of water daily.


        2. Follow a balanced diet rich in fruits, vegetables, lean proteins, and healthy fats.


        3. Engage in at least 30 minutes of physical activity each day, such as walking or yoga.


        4. Manage stress through meditation, deep breathing, or other relaxation techniques.


        5. Support your nutrition with trusted supplements from Oceanic Pharma.

        <strong>Conclusion</strong>

        Wellness is a continuous journey shaped by everyday choices. Oceanic Pharma is committed to being your reliable partner in this journey by offering high-quality, science-backed supplements tailored to support your health goals. Prioritize your well-being, choose the right nutrition, and embrace a healthier, more energized lifestyle.
      `,
    },
    {
      title: "Understanding Calcium: The Cornerstone of Strong Bones and Overall Health",
      author: "Dr. Michael Chen",
      date: "January 10, 2025",
      category: "Nutrition",
      image: '/images/blog1.jpg',
      content: `
        Calcium is one of the most important minerals your body needs to function optimally. From building strong bones and teeth to supporting muscle contractions and nerve function, calcium plays a crucial role in maintaining overall health and wellness. At Oceanic Pharma, we are dedicated to providing high-quality supplements, including calcium combined with vitamin D3, to help you meet your daily nutritional needs and support lifelong health.

        <strong>What Is Calcium and Why Is It Essential?</strong>

        Calcium is the most abundant mineral in the human body, with approximately 99% stored in bones and teeth, providing structural support and strength. However, calcium’s role extends far beyond the skeletal system:

        <strong>Muscle Function:</strong> Calcium is necessary for muscle contractions, including the heart.

        <strong>Nerve Transmission:</strong> It facilitates communication between nerve cells.

        <strong>Blood Clotting:</strong> Calcium helps blood to clot properly after injury.

        <strong>Hormone Secretion</strong>: It supports the release of hormones and enzymes important for bodily functions.

        Because calcium is so vital, your body maintains tight control over its blood levels. If dietary calcium is insufficient, the body will draw calcium from bones to maintain necessary functions, potentially weakening bones over time.

        <strong>How Much Calcium Do You Need?</strong>

        Calcium requirements vary depending on age, gender, and life stage. The following are recommended daily intakes according to health authorities:

        <strong>Age / Group	Recommended Daily Intake</strong>

        Children 1-3 years	700 mg
        Children 4-8 years	1,000 mg
        Teens 9-18 years	1,300 mg
        Adults 19-50 years	1,000 mg
        Women 51+ and Men 71+	1,200 mg
        Pregnant and Lactating Women	1,000-1,300 mg


        Ensuring adequate intake is especially important during periods of rapid growth, pregnancy, lactation, and older age, when bone loss tends to increase.

        <strong>The Role of Vitamin D3 in Calcium Absorption</strong>

        Vitamin D3, often called the "sunshine vitamin," plays an indispensable role in helping your body absorb calcium from food and supplements. Without sufficient vitamin D3, even a calcium-rich diet might not meet your body's needs, because calcium absorption in the gut is limited.

        Oceanic Pharma’s Calcium & Vitamin D3 supplement combines these two nutrients in scientifically balanced proportions to ensure your bones and muscles get the support they need for strength and function.

        <strong>Dietary Sources of Calcium</strong>

        The best way to get calcium is through a balanced diet rich in calcium-containing foods, including:

        Dairy products such as milk, cheese, and yogurt

        Leafy green vegetables like kale and broccoli

        Fortified foods such as cereals and plant-based milk alternatives

        Fish with edible bones, such as sardines and salmon

        However, busy lifestyles, dietary restrictions, or medical conditions can make it difficult to meet calcium needs through diet alone, making high-quality supplements an effective and convenient option.

        Why Choose Oceanic Pharma’s Calcium & Vitamin D3 Supplement?

        Oceanic Pharma’s supplement is carefully formulated to:

        Provide Optimal Dosage: Each tablet contains the right amount of calcium and vitamin D3 to support daily needs without excess.

        Enhance Absorption: The inclusion of vitamin D3 ensures your body absorbs calcium efficiently.

        Maintain Bone Density: Helps prevent bone thinning and reduces the risk of osteoporosis and fractures, especially important for postmenopausal women and older adults.

        Support Muscle and Nerve Health: Beyond bones, calcium aids in muscle contractions and nerve signaling, contributing to overall vitality.

        Assure Quality and Safety: Manufactured under strict quality control standards to ensure purity, potency, and safety.


        <strong>Signs You Might Need More Calcium</strong>

        While calcium deficiency is not always obvious, symptoms to watch for include:

        Frequent muscle cramps or spasms

        Weak or brittle nails

        Tooth decay or gum problems

        Tingling or numbness in fingers

        Increased risk of bone fractures

        If you experience any of these symptoms, it is important to consult your healthcare professional and consider reviewing your calcium intake.

        Risks of Calcium Deficiency and How to Avoid Them

        Prolonged calcium deficiency can lead to:

        <strong>Osteoporosis:</strong> A condition characterized by weak, porous bones prone to fractures.

        <strong>Rickets (in children):</strong> Softening and weakening of bones due to poor mineralization.

        <strong>Hypocalcemia:</strong> Low blood calcium levels causing muscle spasms, tingling, or abnormal heart rhythms.


        Avoiding these conditions means proactively managing calcium intake through diet and supplementation when needed.

        <strong>Safe Supplementation Practices</strong>

        While supplements are beneficial, it is essential to follow recommended guidelines:

        Do not exceed the daily recommended dose: Excessive calcium can cause kidney stones and other health issues.

        Take supplements with meals: This improves absorption, especially for calcium carbonate.

        Space doses if taking large amounts: Absorption is better when calcium is taken in smaller amounts (usually ≤500 mg) multiple times a day.

        Consult healthcare providers: Especially if you have kidney disease, certain medications, or other health concerns.

        Incorporating Calcium Into Your Wellness Routine

        To maximize bone health and overall wellness:

        1. Eat a balanced diet rich in calcium and vitamin D3.

        2. Engage in regular weight-bearing exercise such as walking or resistance training to strengthen bones.

        3. Avoid smoking and excessive alcohol consumption, which can weaken bones.

        4. Take Oceanic Pharma Calcium & Vitamin D3 supplements as directed to fill nutritional gaps.

        5. Schedule regular check-ups with your healthcare provider to monitor bone health.

        <strong>Conclusion:</strong> 
        Invest in Your Bone Health Today

        Calcium is an essential mineral that supports many critical functions in the body, most notably the strength and structure of your bones. Given the challenges of meeting daily calcium needs through diet alone, especially for certain populations, high-quality supplementation plays a vital role.

        Oceanic Pharma’s Calcium & Vitamin D3 supplement offers a scientifically formulated, trusted solution to support your health journey. Prioritize your bone and overall wellness by choosing a supplement that delivers quality, safety, and efficacy because a stronger, healthier you starts with strong foundations.
      `,
    },
    {
      title: "Max Move Fish Collagen: A Powerful Supplement for Skin, Bone, and Overall Wellness",
      author: "Dr. Michael Chen",
      date: "January 10, 2025",
      category: "Nutrition",
      image: '/images/blog4.jpg',
      content: `
        At Oceanic Pharma, we are committed to developing science-backed wellness solutions that support your health from the inside out. One of our most valued formulations, Max Move Fish Collagen, is designed to enhance skin vitality, strengthen bones, and contribute to overall well-being. Derived from high-quality fish collagen peptides, this advanced supplement offers a range of clinically supported benefits that make it an essential part of daily nutrition.

        1. Skin Health Benefits of Max Move Fish Collagen

        Fish collagen has gained strong recognition in dermatology and aesthetic wellness due to its superior absorption and bioavailability. Max Move Fish Collagen from Oceanic Pharma is especially beneficial for individuals looking to maintain youthful, radiant, and hydrated skin.

        Improves Skin Elasticity

        Research indicates that fish collagen peptides significantly enhance skin elasticity, helping the skin appear firmer and more resilient. This can be particularly beneficial as natural collagen production begins to decline with age.

        Enhances Hydration

        Fish collagen helps the skin retain moisture, reducing dryness and dullness. Regular supplementation can promote a smoother, more hydrated complexion.

        Reduces Wrinkles and Fine Lines

        By boosting collagen levels in the dermal layers, Max Move Fish Collagen can visibly reduce the appearance of wrinkles, fine lines, and age-related sagging.
      `,
    },
    {
      title: "Four Great Supplements You Can Start Taking Today | Oceanic Pharma",
      author: "Dr. Michael Chen",
      date: "January 10, 2025",
      category: "Nutrition",
      image: '/images/blog5.jpg',
      content: `
        In today’s demanding lifestyle, maintaining optimal health through diet alone is often difficult. At *Oceanic Pharma, we are committed to delivering **science-backed, quality-driven nutraceutical solutions* that help support everyday wellness. Our carefully formulated supplements are designed to bridge nutritional gaps, support long-term health, and complement a balanced lifestyle.

        In this comprehensive guide, we highlight *four essential supplements* you can start taking today to support skin, bone, joint, and overall health—featuring trusted Oceanic Pharma products.

        <strong>1. Multivitamins & Minerals (Mulmax)</strong>

        A daily multivitamin is the foundation of good health. *Mulmax by Oceanic Pharma* is a balanced formulation of essential vitamins and minerals designed to support overall vitality and nutritional balance.

        <strong>Why Multivitamins Matter</strong>

        Modern diets, stress, and lifestyle habits can lead to micronutrient deficiencies, affecting energy levels, immunity, and general well-being. Mulmax helps provide consistent daily nutritional support.

        <strong>Key Benefits:</strong>

        * Helps fulfill daily vitamin and mineral requirements
        * Supports immune system function
        * Aids energy metabolism and reduces fatigue
        * Supports overall physical and mental performance

        <strong>Ideal For:</strong>

        * Individuals with busy lifestyles
        * Those with dietary restrictions
        * Adults seeking comprehensive daily nutritional support

        <strong>2. Vitamin D Supplement (D-Light)</strong>

        Vitamin D plays a critical role in bone health, immunity, and muscle function. *D-Light by Oceanic Pharma* provides reliable Vitamin D supplementation to help address widespread Vitamin D deficiency.

        <strong>Importance of Vitamin D</strong>

        Limited sun exposure, indoor lifestyles, and dietary insufficiency contribute to low Vitamin D levels, which may impact bone strength and immune health.

        <strong>Key Benefits:</strong>

        * Supports calcium absorption
        * Helps maintain strong bones and teeth
        * Supports immune system health
        * Contributes to normal muscle function

        <strong>Ideal For:</strong>

        * Individuals with limited sun exposure
        * Adults concerned about bone and immune health
        * Elderly individuals and office-based professionals


        <strong>3. Calcium with Vitamin & Zinc (Maxilight)</strong>

        Strong bones require more than calcium alone. *Maxilight by Oceanic Pharma* combines calcium with essential vitamins and zinc to support comprehensive bone health.

        <strong>Why Calcium Combinations Work Better</strong>

        Calcium works synergistically with vitamins and minerals to support bone mineralization and skeletal strength.

        <strong>Key Benefits:</strong>

        * Supports bone density and strength
        * Helps maintain healthy teeth
        * Supports muscle and nerve function
        * Useful as adjunct nutritional support in individuals with low bone mass

        <strong>Ideal For:</strong>

        * Women, especially post-menopausal
        * Elderly individuals
        * Adults with increased calcium needs

        <strong>4. Fish Collagen Supplement (Max Move Fish Collagen)</strong>

        Collagen is a key structural protein for skin, joints, bones, hair, and nails. *Max Move Fish Collagen by Oceanic Pharma* is formulated using high-quality fish collagen peptides for superior absorption and effectiveness.

        <strong>Benefits of Fish Collagen</strong>

        Fish collagen is known for its high bioavailability, making it an excellent choice for supporting connective tissue health.

        <strong>Key Benefits:</strong>

        * Improves skin elasticity and hydration
        * Helps reduce the appearance of fine lines and wrinkles
        * Supports joint flexibility and mobility
        * Supports healthy hair and nails

        <strong>Ideal For:</strong>

        * Individuals experiencing age-related collagen decline
        * People with joint stiffness due to aging or physical activity
        * Those seeking skin and beauty-from-within support

        <strong>Why Choose Oceanic Pharma? </strong>

        At Oceanic Pharma, quality, safety, and scientific integrity are at the core of everything we do. Our supplements are developed using carefully selected ingredients, manufactured under strict quality standards, and designed to meet modern wellness needs.

        <strong>Our Commitment:</strong>

        * Science-backed formulations
        * Quality-controlled manufacturing
        * Consumer-focused wellness solutions

        <strong>Final Thoughts</strong>

        Incorporating the right supplements into your daily routine can play a valuable role in supporting long-term health and well-being. With *Oceanic Pharma’s trusted range of supplements*, you can take a proactive approach to wellness—starting today.

        *Disclaimer: Nutritional supplements are not intended to diagnose, treat, cure, or prevent any disease. Always consult a healthcare professional before starting any new supplement.
      `,
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
          src={healthTipsHero}
          alt="Health Tips"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-literata text-[#1c1a1d] mb-4">Health Tips & Insights</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Expert advice and evidence-based information for your wellness journey
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      {/* ref={blogsRef}  */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {blogs.map((blog, index) => (
              <article key={index} className="blog-card">
                <Card className="hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[400px]"
                    // object-cover
                  />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{blog.author}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">{blog.title}</h2>

                    <div className="prose prose-lg max-w-none">
                      <div className="whitespace-pre-line text-muted-foreground">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                        {/* {blog.content} */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthTips;
