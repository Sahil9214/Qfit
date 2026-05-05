import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import { Navbar, Footer } from './components/layout'
import ErrorBoundary from './components/common/ErrorBoundary'
import LoadingSpinner from './components/common/LoadingSpinner'
import ScrollToTop from './components/common/ScrollToTop'
import PersonalDetailsForm from './pages/new-plan-membership-page-components/components/PersonalDetailsForm'
import AddressForm from './pages/new-plan-membership-page-components/components/AddressForm'
import NomineeAndReview from './pages/new-plan-membership-page-components/components/NomineeAndReview'
import NewFooter from './common-components/NewFooter'

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'))
const PlansPage = lazy(() => import('./pages/PlansPage'))
const PlanDetailPage = lazy(() => import('./pages/PlanDetailPage'))
const PlanCheckoutPage = lazy(() => import('./pages/PlanCheckoutPage'))
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))


// New pages
const NewPlanPage = lazy(() => import('./pages/NewPlanPage'))
const NewPlanDetailPage = lazy(() => import('./pages/NewPlanDetailPage'));
const NewPlanMembershipPage = lazy(() => import('./pages/NewPlanMembershipPage'));
// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="xl" />
  </div>
)

// function App() {
//   return (
//     <ErrorBoundary>
//       <Router>
//         <div className="min-h-screen">
//           <ScrollToTop />
//           <Navbar />
//           <main>
//             <Suspense fallback={<PageLoader />}>
//               <Routes>
//                 <Route path="/" element={<LandingPage />} />
//                 <Route path="/plans" element={<PlansPage />} />
//                 {/* Consolidated plan detail routes */}
//                 <Route path="/plans/:planId" element={<PlanDetailPage />} />
//                 <Route path="/checkout/:planId" element={<PlanCheckoutPage />} />
//                 <Route path="/terms-conditions" element={<TermsAndConditionsPage />} />
//                 <Route path="/contact-us" element={<ContactUsPage />} />
//                 <Route path="/about" element={<AboutUsPage />} />

//                 {/* New Page */}
//                 <Route path="/new-plan" element={<NewPlanPage />} />
//                 <Route path="/new-plan/:planId" element={<NewPlanDetailPage />} />
//                 <Route path="/new-plan/membership/:planId" element={<NewPlanMembershipPage />} />
//                 {/* <Routes> */}
//                   <Route
//                     path="/new-plan/membership/:planId"
//                     element={<NewPlanMembershipPage />}
//                   >
//                     <Route index element={<Navigate to="step-1" />} />
//                     <Route path="step-1" element={<PersonalDetailsForm />} />
//                     <Route path="step-2" element={<AddressForm />} />
//                     <Route path="step-3" element={<NomineeAndReview />} />
//                   </Route>
//                 {/* </Routes>; */}
//               </Routes>
//             </Suspense>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </ErrorBoundary>
//   )
// }


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* New Page */}
                <Route path="/plans" element={<NewPlanPage />} />
                <Route path="/plans/:planId" element={<NewPlanDetailPage />} />
                <Route path="/plans/membership/:planId" element={<NewPlanMembershipPage />} />
                {/* <Routes> */}
                  <Route
                    path="/plans/membership/:planId"
                    element={<NewPlanMembershipPage />}
                  >
                    <Route index element={<Navigate to="step-1" />} />
                    <Route path="step-1" element={<PersonalDetailsForm />} />
                    <Route path="step-2" element={<AddressForm />} />
                    <Route path="step-3" element={<NomineeAndReview />} />
                  </Route>
                {/* </Routes>; */}


                <Route path="/terms-conditions" element={<TermsAndConditionsPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="/about" element={<AboutUsPage />} />

                
              </Routes>
            </Suspense>
          </main>
          {/* <NewFooter /> */}
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
