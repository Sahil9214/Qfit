import { plans } from "../utils/new-plan";


export const HowItWorkDescriptionData = {
    badge: "How It Works",
    title: "Three Steps. That's It.",
    description: "Get started in minutes and unlock your health benefits instantly"
};

export const HowItWorksData = [
    {
        id: 1,
        title: 'Choose & Buy the Plan',
        desc: 'Select the plan that fits your needs and complete the purchase online in a few simple steps.',
        bgColor: 'bg-[#f4efff]', // Light purple background
        borderColor: 'border-[#a881e6]', // Purple border for image container
        imgSrc: '/new-img/webp/HowItWorks-1.webp',
    },
    {
        id: 2,
        title: 'Activate & Access Benefits',
        desc: 'Get instant activation and start using consultations, check-ups, and other services from Day 1.',
        bgColor: 'bg-[#e6fbf9]', // Light cyan/mint background
        borderColor: 'border-[#4ade80]', // Green border for image container
        imgSrc: '/new-img/webp/HowItWorks-2.webp',
    },
    {
        id: 3,
        title: 'Use Benefits When Needed',
        desc: 'Book doctors, tests, or avail hospitalization support anytime through the platform.',
        bgColor: 'bg-[#eaf2ff]', // Light blue background
        borderColor: 'border-[#60a5fa]', // Blue border for image container
        imgSrc: '/new-img/webp/HowItWorks-3.webp',
    }
];

export const TitleDescripComparePlanData = {
    title: "Plan Comparison",
    description: "Compare our signature QFit medical coverage tiers. Our editorial curation helps you identify the surgical precision of each plan’s benefits."
};

export const HeroSectionPlanDetailData = {

    131767: {
        "image_gallery": [
            "/new-img/png/QFit_Kavach_1.png",
            "/new-img/png/QFit_Kavach_2.png",
            "/new-img/png/QFit_Kavach_3.png",
            "/new-img/png/QFit_Kavach_4.png",
            "/new-img/png/Qfit_Kavach_5.png",
            "/new-img/png/QFit_Kavach_6.png",
        ],
        "name": plans[131767].name,
        "tagline": "Affordable Health Protection Plan",
        "description": "A comprehensive health and wellness plan designed for families, offering unlimited consultations, health checkups, and essential financial support during hospitalization.",

        "rating": {
            "img": [''],
            "score": "4.8 Rating",
            "reviews": " 2000+ Users",
        },

        "pricing": {
            "price": plans[131767].price,
            "oldPrice": plans[131767].oldPrice,
            "discount": plans[131767].discount,
        },

        "benefits_total_value": "₹1,699",

        "benefits": [
            {
                "name": "GP & Specialist Consultations",
                "details": "Unlimited, 24/7 tele/video  ·  All 4 family members  ·  22+ specialities",
                "value": "Unlimited",
                "img": "/new-img/svg/doctor_icon.svg"
            },
            {
                "name": "Health Check-up Wallet",
                "details": "Covers diagnostic tests and health check-ups on the MediBuddy platform.",
                "value": "₹1,699",
                "img": "/new-img/svg/Wallet.svg"
            },
            {
                "name": "Hospicash Insurance*",
                "details": "₹1,000/day normal hospitalisation  ·  ₹2,000/day ICU  ·  Zero deductible",
                "value": "Up to 30 days",
                "img": "/new-img/svg/Insurance.svg"
            },
        ],

        "payment_summary": {
            "you_pay_per_year": "₹1,699",
            "per_month": "₹142",
            "per_day": "₹7.4",
            "family_size": "for the whole family",
            "estimated_savings_note": "High savings through free consultations and health check-up coverage",
        },

        "highlight_section": {
            "title": "Healthcare That Actually Saves You Money",
            "description": "From doctor consultations to emergency support - get everything covered without high costs.",
            "cards": [
                {
                    "title": "Unlimited Doctor Access",
                    "description": "No per-visit charges talk to doctors anytime you need",
                    "img": "/new-img/svg/stethoscope.svg"
                },
                {
                    "title": "Smarter Medical Spending",
                    "description": "Cut down on healthcare costs with one simple plan",
                    "img": "/new-img/svg/disscount.svg"
                }
            ]
        },
    },

    // ----------------------------------------------------

    131768: {
        "image_gallery": [
            "/new-img/png/QFit_Super_1.png",
            "/new-img/png/Qfit_Super_2.png",
            "/new-img/png/Qfit_Super_3.png",
            "/new-img/png/Qfit_Super_4.png",
            "/new-img/png/Qfit_Super_5.png",    
        ],
        "name": plans[131768].name,
        "tagline": "Best Value Health Protection Plan",
        "description": "Most health plans make you choose between convenience and coverage. QFit Super gives you both. Unlimited tele-consultations, a health check-up wallet, and an OPD wallet for physical visits. Everything your family needs, nothing they don't.",

        "rating": {
            "img": [''],
            "score": "4.8 Rating",
            "reviews": " 2,000+ families protected | Powered by MediBuddy",
        },

        "pricing": {
            "price": plans[131768].price,
            "oldPrice": plans[131768].oldPrice,
            "discount": plans[131768].discount,
        },

        "benefits_total_value": "₹2,699",

        "benefits": [
            {
                "name": "GP & Specialist Consultations",
                "details": "Unlimited, 24/7 tele/video · All 4 family members · 22+ specialities",
                "value": "Unlimited",
                "img": "/new-img/svg/doctor_icon.svg"
            },
            {
                "name": "Health Check-up Wallet",
                "details": "Covers diagnostic tests and health check-ups on the MediBuddy platform.",
                "value": "₹1,699",
                "img": "/new-img/svg/Wallet.svg"
            },
            {
                "name": "OPD Wallet",
                "details": "In-clinic consultations · 1.25 lakh+ doctors on panel · Reimbursement available",
                "value": "₹1,000",
                "img": "/new-img/svg/OPD_Wallet.svg"
            },
            {
                "name": "Hospicash Insurance*",
                "details": "₹1,000/day normal hospitalisation  ·  ₹2,000/day ICU  ·  Zero deductible",
                "value": "Up to 30 days",
                "img": "/new-img/svg/Insurance.svg"
            },
        ],

        "payment_summary": {
            "you_pay_per_year": "₹2,499",
            "per_month": "₹208",
            "per_day": "₹6.8",
            "family_size": "for a family of 4",
            "estimated_savings_note": "You're getting ₹200 more in direct benefits than what you paid. Plus unlimited consultations on top.",
        },

        "highlight_section": {
            "title": "Healthcare That Actually Saves You Money",
            "description": "From doctor consultations to OPD Wallet - get everything covered without high costs.",
            "cards": [
                {
                    "title": "Unlimited Doctor Access",
                    "description": "Talk to any GP or specialist, 24/7, via call or video. For all 4 family members. No extra charges, ever.",
                    "img": "/new-img/svg/stethoscope.svg"
                },
                {
                    "title": "OPD Wallet for In-Clinic Visits",
                    "description": "Use your ₹1,000 OPD wallet for physical consultations at 1.25 lakh+ doctors on panel. Or get reimbursed if your preferred doctor isn't listed.",
                    "img": "/new-img/svg/disscount.svg"
                }
            ]
        },
    },

    // -------------------------------------------------------------------------------------------------------

    131769: {
        "image_gallery": [
             "/new-img/png/Qfit_Light_1.png",
             "/new-img/png/Qfit_Light_2.png",
             "/new-img/png/Qfit_Light_3.png",
             "/new-img/png/Qfit_Light_4.png",
             "/new-img/png/Qfit_Light_5.png",  
        ],
        "name": plans[131769].name,
        "tagline": "Best Value Health Protection Plan",
        "description": "Most health plans make you choose between convenience and coverage. QFit Super gives you both. Unlimited tele-consultations, a health check-up wallet, and an OPD wallet for physical visits. Everything your family needs, nothing they don't.",

        "rating": {
            "img": [''],
            "score": "4.8 Rating",
            "reviews": " 2,000+ families protected | Powered by MediBuddy",
        },

        "pricing": {
            "price": plans[131769].price,
            "oldPrice": plans[131769].oldPrice,
            "discount": plans[131769].discount,
        },

        "benefits_total_value": "₹7,199",

        "benefits": [
            {
                "name": "GP & Specialist Consultations",
                "details": "Unlimited, 24/7 tele/video · All 6 family members · 22+ specialities",
                "value": "Unlimited",
                "img": "/new-img/svg/doctor_icon.svg"
            },
            {
                "name": "OPD Wallet",
                "details": "In-clinic consultations · 1.25 lakh+ doctors on panel · Reimbursement available",
                "value": "₹2,000",
                "img": "/new-img/svg/OPD_Wallet.svg"
            },
            {
                "name": "Pharmacy Wallet",
                "details": "For prescribed medicines · 99% PIN code coverage via NetMeds, 1mg, and more",
                "value": "₹1,000",
                "img": "/new-img/svg/Pharmacy_Wallet.svg"
            },
            {
                "name": "Health Check-up Wallet",
                "details": "Covers diagnostic tests and health check-ups on the MediBuddy platform.",
                "value": "₹1,699",
                "img": "/new-img/svg/Insurance.svg"
            },

            {
                "name": "Hospicash Insurance*",
                "details": "₹1,000/day normal hospitalisation  ·  ₹2,000/day ICU  ·  Zero deductible",
                "value": "Up to 30 days",
                "img": "/new-img/svg/Hospicash_Insurance.svg"
            },
            {
                "name": "Personal Accident Cover*",
                "details": "Death, total/partial disability · Covers primary member aged 18-65",
                "value": "₹5 Lakh",
                "img": "/new-img/svg/Personal_Accident_Cover.svg"
            },
            {
                "name": "EMI Protect*",
                "details": "EMI coverage during hospitalisation · Pre-existing diseases covered",
                "value": "Up to ₹5,000",
                "img": "/new-img/svg/EMI_Protect.svg"
            },
        ],

        "payment_summary": {
            "you_pay_per_year": "₹6,999",
            "per_month": "₹583",
            "per_day": "₹19.2",
            "family_size": "for a family of 6",
            "estimated_savings_note": "You're getting ₹200 more in direct benefits than what you paid. Plus unlimited consultations, accident cover, and EMI protection on top.",
        },

        "highlight_section": {
            "title": "Healthcare That Actually Covers Your Whole Family",
            "description": "From doctor visits to medicines to lab tests, get every family member covered under one plan.",
            "cards": [
                {
                    "title": "Unlimited Doctor Access",
                    "description": "Talk to any GP or specialist, 24/7, via call or video. For all 6 family members. No extra charges, ever.",
                    "img": "/new-img/svg/stethoscope.svg"
                },
                {
                    "title": "Pharmacy Wallet for Medicines",
                    "description": "Use your ₹1,000 wallet for prescribed medicines. Covers 99% of PIN codes via NetMeds, 1mg, and Flipkart Pharmacy.",
                    "img": "/new-img/svg/disscount.svg"
                }
            ]
        },
    },

    // -------------------------------------------------------------------------------------------------------

    131770: {
        "image_gallery": [
            "/new-img/png/Qfit_Essential_1.png",
            "/new-img/png/Qfit_Essential_2.png",
            "/new-img/png/Qfit_Essential_3.png",
            "/new-img/png/Qfit_Essential_4.png",
            "/new-img/png/Qfit_Essential_5.png",
            "/new-img/png/Qfit_Essential_6.png",
           
           
        ],
        "name": plans[131770].name,
        "tagline": "Smart Health Protection That Grows With Your Family",
        "description": "Most families start lean and grow. Essential starts smarter. Double the wallets, real insurance teeth, and coverage that actually moves with you. Same six family members, way more breathing room.",

        "rating": {
            "img": [''],
            "score": "4.8 Rating",
            "reviews": " 2,000+ families protected | Powered by MediBuddy",
        },

        "pricing": {
            "price": plans[131770].price,
            "oldPrice": plans[131770].oldPrice,
            "discount": plans[131770].discount,
        },

        "benefits_total_value": "₹15,699",

        "benefits": [
            {
                "name": "GP & Specialist Consultations",
                "details": "Unlimited, 24/7 tele/video · All 6 family members · 22+ specialities",
                "value": "Unlimited",
                "img": "/new-img/svg/doctor_icon.svg"
            },
            {
                "name": "OPD Wallet",
                "details": "In-clinic consultations · 1.25 lakh+ doctors on panel · Reimbursement available",
                "value": "₹4,000",
                "img": "/new-img/svg/OPD_Wallet.svg"
            },
            {
                "name": "Lab & Imaging Wallet",
                "details": "Pathology and radiology tests · 95%+ lab network coverage · No approval needed",
                "value": "₹6,000",
                "img": "/new-img/svg/Lab_Imaging_Wallet.svg"
            },
            {
                "name": "Pharmacy Wallet",
                "details": "For prescribed medicines · 99% PIN code coverage via NetMeds, 1mg, and more",
                "value": "₹2,000",
                "img": "/new-img/svg/Pharmacy_Wallet.svg"
            },
            {
                "name": "Health Check-up Wallet",
                "details": "Covers diagnostics and health check-ups on the MediBuddy platform",
                "value": "₹3,398",
                "img": "/new-img/svg/Insurance.svg"
            },
            {
                "name": "Hospitalization Insurance*",
                "details": "₹1,000/day normal hospitalisation · ₹2,000/day ICU · Zero deductible",
                "value": "Up to 30 days",
                "img": "/new-img/svg/Hospicash_Insurance.svg"
            },
            {
                "name": "Critical Illness Cover*",
                "details": "36 conditions covered · Covers pre-existing diseases",
                "value": "₹50,000",
                "img": "/new-img/svg/Critical_Illness.svg"
            },
            {
                "name": "Personal Accident Cover*",
                "details": "Death, total/partial disability · Covers primary member aged 18-65",
                "value": "₹10 Lakh",
                "img": "/new-img/svg/Personal_Accident_Cover.svg"
            },
            {
                "name": "EMI Protect*",
                "details": "EMI coverage during hospitalisation · Pre-existing diseases covered",
                "value": "Up to ₹10,000",
                "img": "/new-img/svg/EMI_Protect.svg"
            }
        ],

        "payment_summary": {
            "you_pay_per_year": "₹14,999",
            "per_month": "₹1,249",
            "per_day": "₹41.6",
            "family_size": "for a family of 6",
            "estimated_savings_note": "You're getting ₹15,699 more in direct benefits than what you paid.",
        },

        "highlight_section": {
            "title": "Healthcare That Actually Protects Your Whole Family",
            "description": "From routine checkups to serious illness to emergency hospitalisation, every family member stays covered under one smart plan.",
            "cards": [
                {
                    "title": "Pharmacy Wallet for Medicines",
                    "description": "Use your ₹2,000 wallet for prescribed medicines. Covers 99% of PIN codes via NetMeds, 1mg, and Flipkart Pharmacy.",
                    "img": "/new-img/svg/medicine.svg"
                },
                {
                    "title": "When Serious Happens",
                    "description": "Hospitalisation up to 30 days, critical illness (₹50,000), and accident cover (₹10 Lakh). You're actually prepared.",
                    "img": "/new-img/svg/happy_person.svg"
                }
            ]
        },
    },

    // -------------------------------------------------------------------------------------------------------

    131771: {
        "image_gallery": [
            "/new-img/png/Qfit_Max_1.png",
            "/new-img/png/Qfit_Max_2.png",
            "/new-img/png/Qfit_Max_3.png",
            "/new-img/png/Qfit_Max_4.png",
            "/new-img/png/Qfit_Max_5.png",
            "/new-img/png/Qfit_Max_6.png",
        ],
        "name": plans[131771].name,
        "tagline": "Maximum Health Protection for Every Family",
        "description": "Most plans make you choose between coverage and value. Max gives you both at their highest. The biggest wallets, real insurance teeth, and cyber protection no other plan offers. For families who want nothing left uncovered.",

        "rating": {
            "img": [''],
            "score": "4.8 Rating",
            "reviews": " 2,000+ families protected | Powered by MediBuddy",
        },

        "pricing": {
            "price": plans[131771].price,
            "oldPrice": plans[131771].oldPrice,
            "discount": plans[131771].discount,
        },

        "benefits_total_value": "₹20,398",

        "benefits": [
            {
                "name": "GP & Specialist Consultations",
                "details": "Unlimited, 24/7 tele/video · All 6 family members · 22+ specialities",
                "value": "Unlimited",
                "img": "/new-img/svg/doctor_icon.svg"
            },
            {
                "name": "OPD Wallet",
                "details": "In-clinic consultations · 1.25 lakh+ doctors on panel · Reimbursement available",
                "value": "₹6,000",
                "img": "/new-img/svg/OPD_Wallet.svg"
            },
            {
                "name": "Lab & Imaging Wallet",
                "details": "Pathology and radiology tests · 95%+ lab network coverage · No approval needed",
                "value": "₹8,000",
                "img": "/new-img/svg/Lab_Imaging_Wallet.svg"
            },
            {
                "name": "Pharmacy Wallet",
                "details": "For prescribed medicines · 99% PIN code coverage via NetMeds, 1mg, and more",
                "value": "₹3,000",
                "img": "/new-img/svg/Pharmacy_Wallet.svg"
            },
            {
                "name": "Health Check-up Wallet",
                "details": "Covers diagnostics and health check-ups on the MediBuddy platform",
                "value": "₹3,398",
                "img": "/new-img/svg/Insurance.svg"
            },
            {
                "name": "Hospitalization Insurance*",
                "details": "₹2,000/day normal hospitalisation · ₹4,000/day ICU · Zero deductible",
                "value": "Up to 30 days",
                "img": "/new-img/svg/Hospicash_Insurance.svg"
            },
            {
                "name": "Critical Illness Cover*",
                "details": "36 conditions covered · Covers pre-existing diseases",
                "value": "₹1,00,000",
                "img": "/new-img/svg/Critical_Illness.svg"
            },
            {
                "name": "Personal Accident Cover*",
                "details": "Death, total/partial disability · Covers primary member aged 18-65",
                "value": "₹15 Lakh",
                "img": "/new-img/svg/Personal_Accident_Cover.svg"
            },
            {
                "name": "Cyber Protect*",
                "details": "Identity theft, online fraud, cyber extortion, unauthorized transactions covered",
                "value": "₹50,000",
                "img": "/new-img/svg/Cyber_Protect.svg"
            },
            {
                "name": "EMI Protect*",
                "details": "EMI coverage during hospitalisation · Pre-existing diseases covered",
                "value": "Up to ₹15,000",
                "img": "/new-img/svg/EMI_Protect.svg"
            }
        ],

        "payment_summary": {
            "you_pay_per_year": "₹19,999",
            "per_month": "₹1,667",
            "per_day": "₹54.8",
            "family_size": "for a family of 6",
            "estimated_savings_note": "₹399 more in direct value than you paid. Plus consultations, CI cover, cyber protection, and EMI protect on top.",
        },

        "highlight_section": {
            "title": "Healthcare That Actually Protects Your Whole Family",
            "description": "From routine check-ups to serious illness to emergency hospitalisation and online fraud, every family member stays covered under one plan.",
            "cards": [
                {
                    "title": "Pharmacy Wallet for Medicines",
                    "description": "Use your ₹3,000 wallet for prescribed medicines. Covers 99% of PIN codes via NetMeds, 1mg, and Flipkart Pharmacy.",
                    "img": "/new-img/svg/medicine.svg"
                },
                {
                    "title": "When Serious Happens",
                    "description": "Hospitalisation up to 30 days, critical illness cover (₹1,00,000), accident cover (₹15 Lakh), and cyber protection. You're fully prepared.",
                    "img": "/new-img/svg/happy_person.svg"
                }
            ]
        },
    },
}