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
      title: "5 Ways to Boost Your Immune System Naturally",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      category: "Wellness",
      image: healthTipsHero,
      content: `
        A strong immune system is your body's best defense against illness. Here are five evidence-based ways to naturally boost your immune function:

        1. **Prioritize Quality Sleep**: Getting 7-9 hours of quality sleep each night allows your body to repair and regenerate. During sleep, your immune system releases cytokines, proteins that help fight infection and inflammation.

        2. **Eat a Rainbow of Fruits and Vegetables**: Different colored fruits and vegetables contain various antioxidants and vitamins. Aim for at least 5 servings daily, focusing on vitamin C-rich foods like citrus fruits, berries, and leafy greens.

        3. **Stay Physically Active**: Regular moderate exercise, such as 30 minutes of brisk walking daily, can boost your immune system by promoting good circulation, which allows immune cells to move through your body more effectively.

        4. **Manage Stress Levels**: Chronic stress weakens immune function. Practice stress-reduction techniques like meditation, yoga, or deep breathing exercises for at least 10 minutes daily.

        5. **Stay Hydrated**: Water helps your body produce lymph, which carries white blood cells and other immune system cells. Aim for 8-10 glasses of water daily, more if you're active or in hot weather.

        Remember, building a strong immune system is a lifestyle choice that requires consistency. These habits work together to create a foundation for optimal health.
      `,
    },
    {
      title: "The Importance of Vitamin D for Overall Health",
      author: "Dr. Michael Chen",
      date: "January 10, 2025",
      category: "Nutrition",
      image: healthTipsHero,
      content: `
        Vitamin D, often called the "sunshine vitamin," plays a crucial role in numerous bodily functions. Despite its importance, vitamin D deficiency is surprisingly common, affecting nearly 1 billion people worldwide.

        **Why Vitamin D Matters:**

        1. **Bone Health**: Vitamin D is essential for calcium absorption. Without adequate vitamin D, your body can't effectively absorb calcium, leading to weakened bones and increased risk of osteoporosis.

        2. **Immune Function**: Vitamin D helps regulate immune responses, making it crucial for fighting infections. Research shows that adequate vitamin D levels may reduce the risk of respiratory infections.

        3. **Mental Health**: Studies have linked vitamin D deficiency to depression and seasonal affective disorder (SAD). Maintaining healthy levels may support mood regulation.

        4. **Heart Health**: Vitamin D helps regulate blood pressure and may reduce the risk of cardiovascular disease.

        **How to Get Enough Vitamin D:**

        - **Sunlight**: Spend 10-30 minutes in midday sun several times per week (without sunscreen, which blocks vitamin D production).
        - **Diet**: Include fatty fish (salmon, mackerel), egg yolks, and fortified foods.
        - **Supplements**: If you can't get enough from sun and food, consider a vitamin D3 supplement (consult your healthcare provider for dosage).

        The recommended daily intake is 600-800 IU for most adults, but some people may need more. Ask your doctor about testing your vitamin D levels.
      `,
    },
    {
      title: "Understanding Omega-3 Fatty Acids and Their Benefits",
      author: "Dr. Emily Rodriguez",
      date: "January 5, 2025",
      category: "Nutrition",
      image: healthTipsHero,
      content: `
        Omega-3 fatty acids are essential fats that your body can't produce on its own, making dietary intake crucial. These powerful nutrients offer numerous health benefits backed by extensive scientific research.

        **Types of Omega-3s:**

        1. **EPA (Eicosapentaenoic Acid)**: Found primarily in fish, EPA is particularly beneficial for heart health and reducing inflammation.

        2. **DHA (Docosahexaenoic Acid)**: Critical for brain health, DHA makes up a significant portion of the brain's structure.

        3. **ALA (Alpha-Linolenic Acid)**: Found in plant sources, ALA can be converted to EPA and DHA, though inefficiently.

        **Health Benefits:**

        - **Heart Health**: Omega-3s reduce triglycerides, lower blood pressure, and decrease the risk of heart disease.
        - **Brain Function**: DHA supports cognitive function, memory, and may reduce the risk of Alzheimer's disease.
        - **Joint Health**: Anti-inflammatory properties help reduce joint pain and stiffness.
        - **Mental Health**: May help alleviate symptoms of depression and anxiety.
        - **Eye Health**: DHA is a structural component of the retina, supporting visual development and function.

        **Best Food Sources:**

        - Fatty fish (salmon, mackerel, sardines, herring): 2-3 servings per week
        - Walnuts and flaxseeds (ALA source)
        - Chia seeds
        - Fish oil supplements (consult your healthcare provider)

        **Recommended Intake:**

        The American Heart Association recommends at least two servings of fatty fish per week. For those who don't eat fish, algae-based omega-3 supplements provide a vegetarian option.

        Consider talking to your healthcare provider about whether omega-3 supplementation is right for you, especially if you have heart disease risk factors.
      `,
    },
    {
      title: "Stress Management Techniques for Better Health",
      author: "Dr. Sarah Johnson",
      date: "December 28, 2024",
      category: "Mental Health",
      image: healthTipsHero,
      content: `
        Chronic stress affects every system in your body, from your immune system to your cardiovascular health. Learning effective stress management techniques is essential for maintaining overall wellness.

        **Understanding Stress:**

        Stress triggers the release of cortisol and adrenaline, preparing your body for "fight or flight." While this response is helpful in emergencies, chronic activation can lead to:
        - Weakened immune system
        - Digestive problems
        - Sleep disorders
        - Cardiovascular issues
        - Mental health challenges

        **Effective Stress Management Techniques:**

        1. **Mindfulness Meditation**: Practice being present in the moment. Even 10 minutes daily can significantly reduce stress levels.

        2. **Progressive Muscle Relaxation**: Systematically tense and relax muscle groups to release physical tension.

        3. **Deep Breathing Exercises**: The 4-7-8 technique (breathe in for 4, hold for 7, exhale for 8) activates the parasympathetic nervous system.

        4. **Regular Physical Activity**: Exercise reduces stress hormones and stimulates endorphin production.

        5. **Social Connection**: Maintain strong relationships and don't hesitate to seek support when needed.

        6. **Time Management**: Prioritize tasks, set realistic goals, and learn to say no.

        7. **Hobbies and Recreation**: Engage in activities you enjoy to provide mental breaks from stressors.

        **Creating Your Stress Management Plan:**

        - Identify your stress triggers
        - Choose 2-3 techniques that resonate with you
        - Practice consistently, even when not feeling stressed
        - Monitor your progress and adjust as needed

        Remember, seeking professional help from a therapist or counselor is a sign of strength, not weakness. If stress is significantly impacting your daily life, consider reaching out to a mental health professional.
      `,
    },
    {
      title: "The Role of Probiotics in Digestive Health",
      author: "Dr. Michael Chen",
      date: "December 20, 2024",
      category: "Digestive Health",
      image: healthTipsHero,
      content: `
        Your gut contains trillions of microorganisms that play a crucial role in your overall health. Probiotics—beneficial bacteria—can help maintain a healthy gut microbiome and support various bodily functions.

        **What Are Probiotics?**

        Probiotics are live microorganisms that provide health benefits when consumed in adequate amounts. They're found naturally in fermented foods and are also available as supplements.

        **Health Benefits of Probiotics:**

        1. **Digestive Health**: Probiotics help maintain the balance of good bacteria in your gut, which can:
           - Reduce symptoms of irritable bowel syndrome (IBS)
           - Prevent and treat diarrhea
           - Improve symptoms of inflammatory bowel disease

        2. **Immune Function**: About 70% of your immune system resides in your gut. Probiotics support immune health by:
           - Enhancing the gut barrier
           - Producing compounds that fight harmful bacteria
           - Modulating immune responses

        3. **Mental Health**: The gut-brain connection means probiotics may influence mood and cognitive function, potentially helping with:
           - Depression
           - Anxiety
           - Stress management

        4. **Other Benefits**: Research suggests probiotics may also help with:
           - Skin health
           - Weight management
           - Heart health
           - Allergies

        **Best Food Sources:**

        - Yogurt with live cultures
        - Kefir
        - Sauerkraut
        - Kimchi
        - Kombucha
        - Miso
        - Tempeh

        **Choosing a Probiotic Supplement:**

        If considering supplements, look for:
        - Multiple strains of bacteria
        - At least 1 billion CFUs (colony-forming units)
        - Products that specify strains (e.g., Lactobacillus acidophilus)
        - Third-party testing certification

        **Important Considerations:**

        - Probiotics are generally safe for most people
        - Those with compromised immune systems should consult a healthcare provider
        - Different strains serve different purposes
        - Consistency is key—benefits may take several weeks to appear

        Pair probiotics with prebiotics (fiber-rich foods that feed good bacteria) for optimal gut health. Foods like bananas, onions, garlic, and whole grains are excellent prebiotic sources.
      `,
    },
    {
      title: "Sleep Hygiene: Tips for Better Rest and Recovery",
      author: "Dr. Emily Rodriguez",
      date: "December 15, 2024",
      category: "Sleep Health",
      image: healthTipsHero,
      content: `
        Quality sleep is fundamental to physical health, mental well-being, and overall quality of life. Yet many people struggle with sleep issues. Good sleep hygiene—habits and practices that promote consistent, quality sleep—can make a significant difference.

        **Why Sleep Matters:**

        During sleep, your body:
        - Repairs tissues and builds muscle
        - Consolidates memories
        - Regulates hormones
        - Strengthens the immune system
        - Processes emotions

        Chronic sleep deprivation increases risks of obesity, diabetes, cardiovascular disease, and mental health issues.

        **Essential Sleep Hygiene Practices:**

        1. **Maintain a Consistent Schedule**: Go to bed and wake up at the same time every day, even on weekends. This regulates your body's internal clock.

        2. **Create a Relaxing Bedtime Routine**: Wind down 30-60 minutes before bed with calming activities:
           - Reading
           - Gentle stretching
           - Meditation or deep breathing
           - Taking a warm bath

        3. **Optimize Your Sleep Environment**:
           - Keep your bedroom cool (60-67°F/15-19°C)
           - Use blackout curtains or an eye mask
           - Minimize noise with earplugs or white noise
           - Invest in a comfortable mattress and pillows

        4. **Limit Screen Time**: Blue light from devices suppresses melatonin production. Stop using screens 1-2 hours before bed, or use blue light filters.

        5. **Watch Your Diet**:
           - Avoid caffeine after 2 PM
           - Don't eat large meals close to bedtime
           - Limit alcohol (it may help you fall asleep but disrupts sleep quality)
           - Stay hydrated but not right before bed

        6. **Exercise Regularly**: Physical activity promotes better sleep, but avoid vigorous exercise within 3 hours of bedtime.

        7. **Manage Stress**: Practice relaxation techniques and address worries before bedtime through journaling or meditation.

        8. **Use Your Bed Only for Sleep**: This strengthens the mental association between your bed and sleep.

        **When to Seek Help:**

        Consult a healthcare provider if you:
        - Regularly take more than 30 minutes to fall asleep
        - Wake frequently during the night
        - Feel tired despite adequate sleep duration
        - Snore loudly or gasp during sleep (possible sleep apnea)
        - Experience unusual movements or behaviors during sleep

        Remember, improving sleep takes time. Be patient and consistent with your new habits, and you'll likely see improvements within 2-4 weeks.
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
                    className="w-full h-[400px] object-cover"
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
                        {blog.content}
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        Disclaimer: This article is for informational purposes only and should not
                        replace professional medical advice. Always consult with a healthcare
                        provider before making changes to your health regimen.
                      </p>
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
