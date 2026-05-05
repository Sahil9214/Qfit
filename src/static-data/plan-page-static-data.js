import { plans } from "../utils/new-plan";

export const OurPlans = [
  {
    id: 'kavach',
    packageId: plans[131767].packageId,
    name: plans[131767].name,
    desc: "Start your family's health coverage without stretching your budget. Kavach gives you unlimited doctor consultations and hospicash support so routine health needs never become a financial burden.",
    benefits: [
      "Unlimited doctor consultations for 4 members",
      "₹1,699 health check-up wallet",
      "Hospicash: ₹1,000/day on hospitalisation"
    ],
    oldPrice: plans[131767].oldPrice,
    price: plans[131767].price,
    rating: "4.3",
    users: "2.5k",
    badge: "BESTSELLER",
    badgeStyles: "bg-[linear-gradient(95.47deg,#C97703_-0.22%,#DD9318_10.66%,#FEC936_26.65%,#FEC936_78.95%,#E39C1E_93%,#FBC63A_97.24%)]",
    cardBg: "bg-[#E1EFFF]", // Light blue tint
    hoverBorder: "hover:border-[#E5A020]"
  },
  {
    id: 'super',
    packageId: plans[131768].packageId,
    name: plans[131768].name,
    desc: "The most balanced plan for growing families. Super adds an OPD wallet on top of unlimited consultations, so your everyday medical expenses are covered — not just the big ones.",
    benefits: [
      "Unlimited consultations + ₹1,000 OPD wallet",
      "₹1,699 health check-up wallet",
      "Hospicash: ₹1,000/day + up to 50% off on labs"
    ],
    oldPrice: plans[131768].oldPrice,
    price: plans[131768].price,
    rating: "4.6",
    users: "2k",
    badge: "RECOMMENDED",
    badgeStyles: "bg-[linear-gradient(95.47deg,#34CA8D_-0.22%,#27B37A_10.66%,#2CB77E_26.65%,#149D65_53.61%,#1BEC96_93%,#1CAB71_97.24%)] text-white", // Emerald green
    cardBg: "bg-[#F1E9FF]", // Light purple tint
    hoverBorder: "hover:border-[#34CA8D]"
  },
  {
    id: 'light',
    packageId: plans[131769].packageId,
    name: plans[131769].name,
    desc: "Built for families that actually use their health coverage. Light bundles OPD, lab tests, and pharmacy benefits under one plan for up to 6 members, with Day 1 access to everything.",
    benefits: [
      "Unlimited consultations for 6 members",
      "₹2,000 OPD + ₹2,500 lab + ₹1,000 pharmacy",
      "EMI protect up to ₹5,000"
    ],
    oldPrice: plans[131769].oldPrice,
    price: plans[131769].price,
    rating: "4.5",
    users: "3.2k",
    badge: "MOST POPULAR",
    badgeStyles: "bg-[#5E34B0] text-white", // Deep purple
    cardBg: "bg-[#E5FCFF]", // Light cyan tint
    hoverBorder: "hover:border-[#5528A9]"
  },
  {
    id: 'essential',
    packageId: plans[131770].packageId,
    name: plans[131770].name,
    desc: "For families who want complete protection, not just basic coverage. Essential adds high-value wallets for OPD, labs, and pharmacy, plus critical illness and accident cover for real financial security.",
    benefits: [
      "₹4,000 OPD + ₹6,000 lab + ₹2,000 pharmacy",
      "₹3,398 health check-up wallet",
      "Critical illness ₹50,000 + EMI protect ₹10,000"
    ],
    oldPrice: plans[131770].oldPrice,
    price: plans[131770].price,
    rating: "4.3",
    users: "2.8k",
    badge: "BESTSELLER",
    badgeStyles: "bg-[linear-gradient(95.47deg,#C97703_-0.22%,#DD9318_10.66%,#FEC936_26.65%,#FEC936_78.95%,#E39C1E_93%,#FBC63A_97.24%)]",
    cardBg: "bg-[#DEFFF8]", // Light green tint
    hoverBorder: "hover:border-[#E5A020]"
  },
  {
    id: 'max',
    packageId: plans[131771].packageId,
    name: plans[131771].name,
    desc: "The most comprehensive plan QFit offers. Max combines maximum wallet benefits with critical illness, accident, and cyber protection — complete peace of mind for your entire family, starting Day 1.",
    benefits: [
      "₹6,000 OPD + ₹8,000 lab + ₹3,000 pharmacy",
      "Critical illness ₹1,00,000 + EMI protect ₹15,000",
      "Cyber protect ₹50,000 + PA cover ₹15 lakh"
    ],
    oldPrice: plans[131771].oldPrice,
    price: plans[131771].price,
    rating: "4.8",
    users: "4.4k",
    badge: "RECOMMENDED",
    badgeStyles: "bg-[linear-gradient(95.47deg,#34CA8D_-0.22%,#27B37A_10.66%,#2CB77E_26.65%,#149D65_53.61%,#1BEC96_93%,#1CAB71_97.24%)] text-white", // Emerald green,
    cardBg: "bg-[#FFF3F3]", // Light rose/pink tint
    hoverBorder: "hover:border-[#34CA8D]"
  }
];

export const TitleDescriptionData = {
    badge: "Our Bestsellers",
    title: "Most Chosen by Families Like Yours",
    description: "Three plans that hit the sweet spot between price and coverage."

};

export const CardData = [
    {
        packageId: plans[131767].packageId,
        id: 1,
        title: 'QFit Kavach',
        badge: 'Starter Pick',
        badgeStyles: 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900',
        desc: 'Start protecting your family today without overspending',
        oldPrice: plans[131767].oldPrice,
        discount: plans[131767].discount,
        newPrice: plans[131767].price,
        // isActive: true, // Highlights the first card like in Figma
    },
    {
        packageId: plans[131768].packageId,
        id: 2,
        title: 'QFit Super',
        badge: 'Most Popular',
        badgeStyles: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
        desc: 'The plan most families choose when they want real value.',
        oldPrice: plans[131768].oldPrice,
        discount: plans[131768].discount,
        newPrice: plans[131768].price,
        isActive: false,
    },
    {
        packageId: plans[131769].packageId,
        id: 3,
        title: 'QFit Light',
        badge: 'Family Favorite',
        badgeStyles: 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white',
        desc: 'OPD, labs, pharmacy, and more — for families that use healthcare regularly.',
        oldPrice: plans[131769].oldPrice,
        discount: plans[131769].discount,
        newPrice: plans[131769].price,
        isActive: false,
    }
];

export const TitleDescripComparePlanData = {
    title: "Compare Plans Side by Side",
    description: "Not sure which plan fits your family? Here's everything laid out so you can decide in 60 seconds."
};

export const HowItWorkDescriptionData = {
    badge: "How It Works",
    title: "Three Steps. That's It.",
    description: "Get started in minutes and unlock complete health benefits."

};

export const HowItWorksData = [
  {
    id: 1,
    title: 'Pick Your Plan',
    desc: 'Choose based on your family size and how often you use healthcare. Takes under 2 minutes.',
    bgColor: 'bg-[#f4efff]', // Light purple background
    borderColor: 'border-[#a881e6]', // Purple border for image container
    imgSrc: '/new-img/webp/HowItWorks-1.webp',
  },
  {
    id: 2,
    title: 'Get Instant Access',
    desc: 'No waiting, no paperwork review. Your benefits activate the moment payment goes through.',
    bgColor: 'bg-[#e6fbf9]', // Light cyan/mint background
    borderColor: 'border-[#4ade80]', // Green border for image container
    imgSrc: '/new-img/webp/HowItWorks-2.webp',
  },
  {
    id: 3,
    title: 'Use It Whenever You Need',
    desc: 'Book a doctor, redeem pharmacy benefits, or file for hospicash — all through the platform. Your family, your terms.',
    bgColor: 'bg-[#eaf2ff]', // Light blue background
    borderColor: 'border-[#60a5fa]', // Blue border for image container
    imgSrc: '/new-img/webp/HowItWorks-3.webp',
  }
];


export const homePageTestimonialsData = [
  {
    id: 1,
    name: "Priya M.",
    image: "/new-img/svg/Testimonials-1.svg",
    rating: 5,
    review: "My parents needed three doctor visits in one month. With QFit, I didn't think twice about the cost. Worth every rupee.",
    location: "Bengaluru",
    age: 32
  },
  {
    id: 2,
    name: "Rahul S.",
    image: "/new-img/svg/Testimonials-2.svg",
    rating: 5,
    review: "I kept delaying getting health coverage because it seemed complicated. QFit took 5 minutes to set up and my family was covered the same day.",
    location: "Pune",
    age: 27
  },
  {
    id: 3,
    name: "Deepa K.",
    image: "/new-img/svg/Testimonials-3.svg",
    rating: 5,
    review: "The pharmacy wallet alone has saved us more than what we paid for the plan. We use it almost every week.",
    location: "Hyderabad",
    age: 44
  },
  {
    id: 4,
    name: "Ram Gopal",
    image: "/new-img/svg/Testimonials-4.svg",
    rating: 5,
    review: "Got this for my parents Smooth experience with doctors and tests",
    location: "Indore",
    age: 32
  },
  {
    id: 5,
    name: "Reshmi Sahara",
    image: "/new-img/svg/Testimonials-5.svg",
    rating: 5,
    review: "I started using QFit Kavach mainly for fitness, but the doctor consultations and health benefits were a huge bonus. It’s like having complete health support in one plan.",
    location: "Indore",
    age: 32
  },
  {
    id: 5,
    name: "Rekha Sharma",
    image: "/new-img/svg/Testimonials-6.svg",
    rating: 5,
    review: "I started using QFit Kavach mainly for fitness, but the doctor consultations and health benefits were a huge bonus. It’s like having complete health support in one plan.",
    location: "Indore",
    age: 32
  }
];



export const faqsData = [
  {
    id: 1,
    question: "Which plan is right for my family?",
    answer: "It depends on your family size and how much healthcare coverage you want. All QFit plans cover unlimited doctor consultations and include a health wallet you can spend on checkups and OPD visits. The difference is in how large that wallet is and what additional benefits come with it. If you are unsure, use the comparison table on this page to see plans side by side."
  },
  {
    id: 2,
    question: "When does my coverage actually start?",
    answer: "From the day you buy. There is no waiting period for wellness or insurance benefits across any QFit plan. Pre-existing conditions are also covered from Day 1 under the Hospicash benefit, which is something most standard insurance policies do not offer."
  },
  {
    id: 3,
    question: "Who all can use the plan under my family?",
    answer: "Wellness benefits, including unlimited doctor consultations and the health wallet, extend to your entire enrolled family. The insurance component, like Hospicash, applies to the primary member aged between 18 and 65 years. Members above 65 can still use all wellness services without restriction." 
  },
  {
    id: 4,
    question: "What happens if I need to see a doctor at midnight?",
    answer: "That is exactly what QFit is built for. All plans include unlimited tele and video consultations with General Physicians available 24 hours a day, 7 days a week. You can also consult across 22+ specialties. No appointments, no queues, no waiting until morning."
  },
  {
    id: 5,
    question: "These plans are powered by MediBuddy. Can I not just buy directly from them?",
    answer: "No. These five QFit plans are exclusive to this platform and are not available on MediBuddy's retail platform or anywhere else. MediBuddy's retail products are sold as individual services, not as bundled plans like these. What you get here is a curated package at a price that would cost significantly more if you tried to piece it together on your own."
  }
];