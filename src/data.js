const data = {
  products: [
    { 
      id: 1, 
      slug: 'mulmax-multivitamin-mineral',
      name: 'Mulmax', 
      category: ['Multivitamin', 'Mineral'],
      description: 'Mutivitamin s anutritonal supplerment ontaining blend of mutiple vitamins, oftn ncluding cietary minerals and trace elements. Irs designed to help indtviduals maintain optinal utrentlevels in thlir bodies and may be used to address vitamin deficiencies or support overallheath.',
      price: 29.99,
      indication: 'Generalweakness,Pre &e postsurgery.Tirecdness, Pregnancy & lactation Patient Recovery period inadequate diet',
      images: ['mulmax-1.jpg', 'mulmax-2.jpg', 'mulmax-3.jpg'],
      dosage: 'One tablet daly or as drected by heheatcare advise,'
    },
    { 
      id: 2, 
      slug: 'd-light-vitamin-d',
      name: 'D-Light', 
      category: ['Vitamin-D'],
      description: 'CALCIUM & MTAMIN D3 prevents and teats ow calcium and iamin D3 levelsin your body. Vitamin D3 and calcium help build and maintain the health of your bones. Vitamin D3 also plays an importantrole in supporting your immune system and brain health.',
      price: 29.99,
      indication: 'Osteoporosis, Osteopenia, Rickets, Bones and Joints, Rheumatoid Arthritis, Pregnancy & Lactation',
      images: ['dlight-1.jpg', 'dlight-2.jpg', 'dlight-3.jpg'],
      dosage: 'One or Two tablet daily or as directed by the healthcare adviser'
    },
    { 
      id: 3, 
      slug: 'maxilight-calcium-vitamin-zinc',
      name: 'Maxilight', 
      category: ['Calcium', 'Vitamin', 'Zinc'],
      description: 'Cholecalciferol (vitamin D3) is in a class of medications called vitamin D analogs. Cholecalciferol is needed by the body for healthy bones, muscles, nerves, and to support the immune system.',
      price: 29.99,
      indication: 'Osteoporosis Hypoparathyroidism (Rickets) Osteomalacia Hypophosphatemia',
      images: ['maxlight-1.jpg', 'maxlight-2.jpg', 'maxlight-3.jpg'],
      dosage: 'As per directed by the healthcare adviser'
    },
    { 
      id: 4, 
      slug: 'maxmove',
      name: 'Max Move', 
      category: ['Calcium', 'Vitamin', 'Zinc'],
      description: `
        Max move collagen is beneficial for bone and  skin health. Research suggests that fish collagen peptides can:
        - Improve Skin Elasticity: Increase skin elasticity and hydration, reducing wrinkles and fine lines.
        - Boost Collagen Production: Stimulate collagen production, improving skin's structure and firmness.
        - Reduce Signs of Aging: Decrease age-related changes in skin, such as dryness and loss of elasticity.

        Max move Fish Collagen and Carbohydrates:
        Fish collagen itself is a protein and doesn't directly impact carbohydrate metabolism. However, some studies suggest that collagen peptides may:
        - Reduce Appetite: Help with weight management by promoting feelings of fullness and reducing hunger.
        - Improve Insulin Sensitivity: Potentially improve insulin sensitivity, although more research is needed.

        Max move Fish Collagen and Bone Health:
        Max move Fish collagen may also benefit bone health by:
        - Stimulating Collagen Production: Promoting collagen production in bones, which can improve bone density.
        - Supporting Bone Mineralization: Helping to mineralize bones, potentially reducing the risk of osteoporosis.
        - Aiding Fracture Healing: Supporting fracture healing by promoting collagen synthesis and bone growth.

        Overall, Max move fish collagen is a valuable supplement for skin, hair, and bone health, and may have additional benefits for overall well-being.
      `,
      price: 29.99,
      indication: '-',
      images: ['maxmove-1.jpg', 'maxmove-2.jpg', 'maxmove-3.jpg'],
      dosage: 'As per directed by the healthcare adviser'
    },
  ],
  faqs: [
    {
      id: 0,
      question: "What is Oceanic Pharma?",
      answer: 'Oceanic Pharma is a health and wellness company dedicated to providing high-quality multivitamins and bone care supplements. Our mission is to promote better living through science-based nutrition and trusted formulations.'
    },
    {
      id: 1,
      question: "Do your supplements have any side effects?",
      answer: 'When used as directed, our supplements are generally safe and well-tolerated. However, if you have specific medical conditions or are taking other medications, we recommend consulting your doctor before use.'
    },
    {
      id: 2,
      question: "Can I take multivitamins and bone supplements together?",
      answer: 'Yes. Our formulations are designed to complement each other, providing complete support for bone strength and overall health. Always follow the dosage instructions provided on the packaging or by your healthcare professional.'
    },
    {
      id: 3,
      question: "Where can I purchase Oceanic Pharma products?",
      answer: 'You can purchase our products through authorized pharmacies, healthcare stores, and our official website. Always ensure you are buying from trusted sources to guarantee product authenticity.'
    },
  ],

}

export default data;