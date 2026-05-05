
import React from 'react'

// Direct imports (no lazy)
import HeroSection from './new-plan-detail-page-components/HeroSection'
import PlanBenefits from '../common-components/PlanBenefits'
import PlanDetails from './new-plan-detail-page-components/PlanDetails'
import WhyChooseUs from './new-plan-detail-page-components/WhyChooseUs'
import HowItWorks from '../common-components/HowItWorks'
import ComparePlanSection from '../common-components/ComparePlanSection'
import CarouselSection from './new-plan-detail-page-components/CarouselSection'
import Testimonials from '../common-components/Testimonials'
import DetailCardSection from '../common-components/DetailCardSection'
import FAQSection from '../common-components/FAQSection'
import { HowItWorkDescriptionData, HowItWorksData, TitleDescripComparePlanData } from '../static-data/plan-detail-page-static-data'
import { planName } from '../static-data/global-static-data'
import ReviewSection from './new-plan-detail-page-components/ReviewSection'
import SimilarPlanSection from './new-plan-detail-page-components/SimilarPlanSection'

const NewPlanDetailPage = () => {
  return (
    <>
      <HeroSection />
      
      <SimilarPlanSection />
      
      <PlanBenefits />  
      
      <PlanDetails />

      <WhyChooseUs />

      <HowItWorks HowItWorkDescriptionData={HowItWorkDescriptionData} HowItWorksData={HowItWorksData} />

      <ComparePlanSection TitleDescripComparePlanData={TitleDescripComparePlanData} planName={planName} />

      <CarouselSection />

      <ReviewSection />
      {/* <Testimonials /> */}
      <DetailCardSection />
      <FAQSection />
    </>
  )
}

export default NewPlanDetailPage