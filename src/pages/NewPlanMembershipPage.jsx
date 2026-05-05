import React from 'react'
import PlanBenefits from '../common-components/PlanBenefits'
import DetailCardSection from '../common-components/DetailCardSection'
import HeroSection from './new-plan-membership-page-components/HeroSection'

const NewPlanMembershipPage = () => {
    return (
        <>
            <HeroSection />

            <PlanBenefits />
            <DetailCardSection />
        </>
    )
}

export default NewPlanMembershipPage