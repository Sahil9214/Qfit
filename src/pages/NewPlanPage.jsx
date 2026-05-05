import React from 'react'
import HeroSection from './new-plan-page-components/HeroSection'

import OurPlanSection from './new-plan-page-components/OurPlanSection'
import ComparePlanSection from '../common-components/ComparePlanSection'
import WhyChooseUsSection from './new-plan-page-components/WhyChooseUsSection'
import ComparisonAndDifferent from './new-plan-page-components/ComparisonAndDifferent'
// import OurBestsellers from '../common-components/OurBestsellers'
import HowItWorks from '../common-components/HowItWorks'
import Testimonials from '../common-components/Testimonials'
import DiscountCard from './new-plan-page-components/DiscountCard'
import FAQSection from '../common-components/FAQSection'
import { TitleDescriptionData, CardData, OurPlans, HowItWorkDescriptionData, HowItWorksData, faqsData, TitleDescripComparePlanData } from '../static-data/plan-page-static-data'
import ReviewSection from './new-plan-page-components/ReviewSection'
import { planName } from '../static-data/global-static-data'
import OurBestsellers from './new-plan-page-components/OurBestsellers'

const NewPlanPage = () => {

  return (
    <>
      <HeroSection />
      <OurPlanSection OurPlans={OurPlans} />
      <ComparePlanSection TitleDescripComparePlanData={TitleDescripComparePlanData} planName={planName} />
      <WhyChooseUsSection />
      <ComparisonAndDifferent />
      <OurBestsellers />
      {/* <OurBestsellers TitleDescriptionData={TitleDescriptionData} CardData={CardData} /> */}
      <HowItWorks HowItWorkDescriptionData={HowItWorkDescriptionData} HowItWorksData={HowItWorksData} />
      <ReviewSection />
      {/* <Testimonials /> */}
      <DiscountCard />
      <FAQSection />
    </>
  )
}

export default React.memo(NewPlanPage)