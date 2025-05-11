import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router";

//components
import Home from "./pages/Home";
import AboutCompany from "./pages/About/AboutCompany";
import OurMission from "./pages/About/OurMission";
import FAQs from "./pages/About/FAQs";
import ClientReviews from "./pages/About/ClientReviews";
import BecomeOurAgent from "./pages/About/BecomeOurAgent";
import Careers from "./pages/About/Careers";
import IndustriesMain from "./pages/Industries/IndustriesMain";
import Pricing from "./pages/Pricing/Pricing";
import PricingTwo from "./pages/Pricing/PricingTwo";
import ContactUs from "./pages/ContactUs";
// import CostCalculator from "./pages/Pricing/CostCalculator";

// Industries
import FinanceAndFintech from "./pages/Industries/FinanceAndFintech";
import TravelAndHospitality from "./pages/Industries/TravelAndHospitality";
import Education from "./pages/Industries/Education";
import RealEstateAndConstruction from "./pages/Industries/RealEstateAndConstruction";
import TransportationAndLogistics from "./pages/Industries/TransportationAndLogistics";
import RetailAndEcommerce from "./pages/Industries/RetailAndEcommerce";
import HealthAndWellness from "./pages/Industries/HealthAndWellness";

// Services
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import ServicesMain from "./pages/Services/ServicesMain";
import WebDevelopment from "./pages/Services/WebDevelopment";
import MobileAppDevelopment from "./pages/Services/MobileAppDevelopment";
import UiUxDesign from "./pages/Services/UiUxDesign";
import ECommerce from "./pages/Services/ECommerce";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import LowCode from "./pages/Services/LowCode";
import TestingAndQA from "./pages/Services/TestingAndQA";
import MVPDev from "./pages/Services/MVPDev";
import DevOps from "./pages/Services/DevOps";
import ProfessionalServices from "./pages/Industries/ProfessionalServices";
import MediaAndEntertainment from "./pages/Industries/MediaAndEntertainment";
import Manufacturing from "./pages/Industries/Manufacturing";
import Telecommunications from "./pages/Industries/Telecommunications";
import SaasProducts from "./pages/Services/SaasProducts";
import ItConsulting from "./pages/Services/ItConsulting";

// Soutions
import ERP from "./pages/Solutions/ERP";
import CRM from "./pages/Solutions/CRM";
import HRMS from "./pages/Solutions/HRMS";
import CMS from "./pages/Solutions/CMS";
import Ecommerce from "./pages/Solutions/Ecommerce";
import Fleet from "./pages/Solutions/Fleet";
import OTT from "./pages/Solutions/OTT";
import WebPortals from "./pages/Solutions/WebPortals";
import SupplyChainManagement from "./pages/Solutions/SupplyChainManagement";
import HospitalManagementSystem from "./pages/Solutions/HospitalManagementSystem";
import OperationsManagementSystem from "./pages/Solutions/OperationsManagementSystem";
import FinancialManagement from "./pages/Solutions/FinancialManagement";
import ProjectManagementSystem from "./pages/Solutions/ProjectManagementSystem";
import ELearning from "./pages/Solutions/Elearning";
import SolutionsMain from "./pages/Solutions/SolutionsMain";

//Pricing
import Step1 from "./pages/Pricing/Steps/Step1";
import Step2 from "./pages/Pricing/Steps/Step2";
import Step3 from "./pages/Pricing/Steps/Step3";
import Step4 from "./pages/Pricing/Steps/Step4";
import Step5 from "./pages/Pricing/Steps/Step5";
import Step6 from "./pages/Pricing/Steps/Step6";
import Step7 from "./pages/Pricing/Steps/Step7";
import ThankYou from "./pages/Pricing/ThankYou";
import AstroHoroscope from "./pages/Industries/AstroHoroscope";
import Insurance from "./pages/Industries/Insurance";
import Banking from "./pages/Industries/Banking";
import Automotive from "./pages/Industries/Automotive";
import OilGas from "./pages/Industries/OilGas";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import AiMl from "./pages/Services/AiMl";
import Terms from "./pages/Footer/Terms";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import Disclaimer from "./pages/Footer/Disclaimer";
import RefundPolicy from "./pages/Footer/RefundPolicy";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* About Section */}
          <Route path="about">
            <Route path="company" element={<AboutCompany />} />
            <Route path="mission" element={<OurMission />} />
            <Route path="reviews" element={<ClientReviews />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="become-agent" element={<BecomeOurAgent />} />
          </Route>

          {/* Services */}
          <Route path="services">
            <Route
              path="software-development"
              element={<SoftwareDevelopment />}
            />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="app-development" element={<MobileAppDevelopment />} />
            <Route path="mvp-development" element={<MVPDev />} />
            <Route path="ui-ux-design" element={<UiUxDesign />} />
            <Route path="e-commerce" element={<ECommerce />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="low-code" element={<LowCode />} />
            <Route path="devOps-consultation" element={<DevOps />} />
            <Route
              path="testing-and-quality-assurance"
              element={<TestingAndQA />}
            />
            <Route path="saas-products" element={<SaasProducts />} />
            <Route path="it-consulting" element={<ItConsulting />} />
            <Route path="aiml-services" element={<AiMl />} />
            <Route path="all-services" element={<ServicesMain />} />
          </Route>

          {/* Industries */}
          <Route path="industries">
            <Route path="finance-and-fintech" element={<FinanceAndFintech />} />
            <Route
              path="travel-and-hospitality"
              element={<TravelAndHospitality />}
            />
            <Route path="education" element={<Education />} />
            <Route
              path="real-estate-and-construction"
              element={<RealEstateAndConstruction />}
            />
            <Route path="health-and-wellness" element={<HealthAndWellness />} />
            <Route
              path="transportation-and-logistics"
              element={<TransportationAndLogistics />}
            />
            <Route
              path="retail-and-ecommerce"
              element={<RetailAndEcommerce />}
            />
            <Route
              path="professional-services"
              element={<ProfessionalServices />}
            />
            <Route
              path="media-and-entertainment"
              element={<MediaAndEntertainment />}
            />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="telecommunications" element={<Telecommunications />} />
            <Route
              path="astrology-and-horoscope"
              element={<AstroHoroscope />}
            />
            <Route path="insurance" element={<Insurance />} />
            <Route path="banking" element={<Banking />} />
            <Route path="automotive" element={<Automotive />} />
            <Route path="oil-and-gas" element={<OilGas />} />
            <Route path="all-industries" element={<IndustriesMain />} />
          </Route>

          {/* Solutions */}
          <Route path="solutions">
            <Route path="erp" element={<ERP />} />
            <Route path="crm" element={<CRM />} />
            <Route path="cms" element={<CMS />} />
            <Route path="ott" element={<OTT />} />
            <Route path="e-learning" element={<ELearning />} />
            <Route
              path="operations-management-system"
              element={<OperationsManagementSystem />}
            />
            <Route path="e-commerce" element={<Ecommerce />} />
            <Route
              path="supply-chain-management"
              element={<SupplyChainManagement />}
            />
            <Route path="web-portals" element={<WebPortals />} />
            <Route path="ott" element={<OTT />} />
            <Route path="fleet-management" element={<Fleet />} />
            <Route
              path="financial-management"
              element={<FinancialManagement />}
            />
            <Route
              path="project-management"
              element={<ProjectManagementSystem />}
            />
            <Route path="hrms" element={<HRMS />} />
            <Route
              path="hospital-management-system"
              element={<HospitalManagementSystem />}
            />
          </Route>

          {/* Pricing */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-2" element={<PricingTwo />} />
          {/* <Route path="/cost-calculator/*" element={<CostCalculator />} /> */}
          <Route path="/cost-calculator/1" element={<Step1 />} />
          <Route path="/cost-calculator/2" element={<Step2 />} />
          <Route path="/cost-calculator/3" element={<Step3 />} />
          <Route path="/cost-calculator/4" element={<Step4 />} />
          <Route path="/cost-calculator/5" element={<Step5 />} />
          <Route path="/cost-calculator/6" element={<Step6 />} />
          <Route path="/cost-calculator/7" element={<Step7 />} />
          <Route path="/cost-calculator/thank-you" element={<ThankYou />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/terms-and-conditions" element={<Terms/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/disclaimer" element={<Disclaimer/>} />
          <Route path="/refund-policy" element={<RefundPolicy/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
