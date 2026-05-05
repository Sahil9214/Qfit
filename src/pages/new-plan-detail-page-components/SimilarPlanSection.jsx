import React from 'react'
import SimilarPlansCard from '../../common-components/SimilarPlansCard';
import { useParams } from 'react-router-dom';

const SimilarPlanSection = () => {
    const { planId } = useParams();

    return (
        <>
            <section className="w-full py-16 lg:py-[60px] bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">

                    {/* Section Header */}
                    <div className="text-start mb-[60px]">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                            Explore Similar Plans
                        </h2>
                        <p className="text-gray-500 text-m max-w-2xl tracking-[1px]">
                            Compare and find the plan that fits your needs best
                        </p>
                    </div>

                    {/* Pricing Cards Grid */}
                    <SimilarPlansCard />

                </div>
            </section>
        </>
    )
}

export default SimilarPlanSection