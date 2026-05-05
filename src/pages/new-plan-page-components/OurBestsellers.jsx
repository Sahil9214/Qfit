import React from 'react'
import { useParams } from 'react-router-dom';
import SimilarPlansCard from '../../common-components/SimilarPlansCard';

const OurBestsellers = () => {
    const { planId } = useParams();

    return (
        <>
            <section className="w-full py-16 lg:py-[60px] bg-white tracking-[1px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">

                    {/* Section Header */}
                    <div className="text-center mb-[60px]">

                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-[#5528A9] text-[12px] font-medium mb-4">
                            Our Bestsellers
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                            Most Chosen by Families Like Yours
                        </h2>
                        <p className="text-gray-500 text-m max-w-2xl mx-auto]">
                            Three plans that hit the sweet spot between price and coverage.
                        </p>
                    </div>

                    <SimilarPlansCard />

                </div>
            </section>
        </>
    )
}

export default OurBestsellers