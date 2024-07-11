import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: () => import("@/pages/DashboardPage.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue")
  },
  {
    path: "/return-refund",
    name: "ReturnRefund",
    component: () => import("@/pages/ReturnRefund.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue")
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import("@/pages/TermOfUse.vue")
  },
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/pages/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/pages/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/pages/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/reset-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/pages/auths/ResetPasswordPage.vue')
  },
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/pages/auths/EmailVerificationPage.vue')
  },
  {
    path: "/basic-details",
    name: "BasicDetails",
    component: () => import('@/pages/profile/BasicDetails.vue')
  },
  {
    path: "/connect-details",
    name: "ConnectDetails",
    component: () => import('@/pages/profile/ConnectDetails.vue')
  },
  {
    path: "/overview-details",
    name: "OverviewDetails",
    component: () => import('@/pages/profile/OverviewDetails.vue')
  },
  {
    path: "/worktime-details",
    name: "WorktimeDetails",
    component: () => import('@/pages/profile/WorktimeDetails.vue')
  },
  {
    path: "/businesstype-details",
    name: "BusinessTypeDetails",
    component: () => import('@/pages/profile/BusinessTypeDetails.vue')
  },
  {
    path: "/branding-details",
    name: "BrandingDetails",
    component: () => import('@/pages/profile/BrandingDetails.vue')
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: () => import('@/pages/profile/ProductList.vue')
  },
  {
    path: "/create-product",
    name: "CreateProduct",
    component: () => import('@/pages/profile/CreateProduct.vue')
  },
  {
    path: "/collection-list",
    name: "CollectionList",
    component: () => import('@/pages/profile/CollectionList.vue')
  },
  {
    path: "/gallery-details",
    name: "GalleryDetails",
    component: () => import('@/pages/profile/GalleryDetails.vue')
  },
  {
    path: "/rewards-details",
    name: "RewardsDetails",
    component: () => import('@/pages/profile/RewardsDetails.vue')
  },
  {
    path: "/supporters-details",
    name: "SupportersDetails",
    component: () => import('@/pages/profile/SupportersDetails.vue')
  },
  // {
  //   path: "/fameset-details",
  //   name: "FamesetDetails",
  //   component: () => import('@/pages/profile/FamesetDetails.vue')
  // },
  {
    path: "/category-details",
    name: "CategoryDetails",
    component: () => import('@/pages/profile/CategoryDetails.vue')
  },
  {
    path: "/bank-details",
    name: "BankDetails",
    component: () => import('@/pages/profile/BankDetails.vue')
  },
  {
    path: "/social-details",
    name: "SocialDetails",
    component: () => import('@/pages/profile/SocialDetails.vue')
  },
  {
    path: "/trade-detail/:id",
    name: "TradeFairPage",
    component: () => import('@/pages/TradeFairPage.vue')
  },
  {
    path: "/trade-fair",
    name: "TradeFairDetailPage",
    component: () => import('@/pages/TradeFairDetailPage.vue')
  },
  {
    path: "/honeymoon-tour",
    name: "HoneymoonTour",
    component: () => import('@/pages/HoneymoonTour.vue')
  },
  {
    path: "/domestic-tour",
    name: "DomesticTour",
    component: () => import('@/pages/DomesticTour.vue')
  },
  {
    path: "/international-tour",
    name: "InternationalTour",
    component: () => import('@/pages/InternationalTour.vue')
  },
  {
    path: "/educational-tour",
    name: "EducationalTour",
    component: () => import('@/pages/EducationalTour.vue')
  },
  {
    path: "/flight-services",
    name: "FlightServices",
    component: () => import('@/pages/FlightServices.vue')
  },
  {
    path: "/visa-services",
    name: "VisaServices",
    component: () => import('@/pages/VisaServices.vue')
  },
  {
    path: "/other-services",
    name: "OtherServices",
    component: () => import('@/pages/OtherServices.vue')
  },
  {
    path: "/faqs-page",
    name: "faqs-page",
    component: () => import('@/pages/faqs-page.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
