import { lazy } from "react";
import { RoutePath } from "./RoutePaths";

const LoginPage = lazy(() => import("../Pages/AuthPages/LoginPage/LoginPage"));
const VerifyCodePage = lazy(() => import("../Pages/AuthPages/VerifyCodePage/VerifyCodePage"));
const RegisterPage = lazy(() => import("../Pages/AuthPages/RegisterPage/RegisterPage"));
const ProfilePage = lazy(() => import("../Pages/ProfilePage/ProfilePage"));
const ChangePasswordPage = lazy(() => import("../Pages/ChangePasswordPage/ChangePasswordPage"));
const ForgotPasswordPage = lazy(() => import("../Pages/AuthPages/ForgotPasswordPage/ForgotPasswordPage"));
const PrivacyPolicyPage = lazy(() => import("../Pages/PrivacyPolicyPage/PrivacyPolicyPage"));
const DesktopMessagesPage = lazy(() => import("../Pages/MessagesPage/DesktopMessagesPage"));
const MobileMessagesPage = lazy(() => import("../Pages/MessagesPage/MobileMessagesPage"));
const MobileMessagesDetailPage = lazy(() => import("../Pages/MessagesPage/MobileMessagesDetailPage"));
const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const PropertyPage = lazy(() => import("../Pages/PropertyPage/PropertyPage"));
const MembershipPlanPage = lazy(() => import("../Pages/MembershipPlanPage/MembershipPlanPage"));
const ContactUsPage = lazy(() => import("../Pages/ContactUsPage/ContactUsPage"));
const PageNotFound = lazy(() => import("../Pages/NotFoundPage/NotFoundPage"));
const AddPropertyPage = lazy(() => import("../Pages/AddPropertyPage/AddPropertyPage"));
const Protected = lazy(() => import("./Protected"));

export const AppRoutes = [
  {
    path: RoutePath.RegisterPage,
    component: RegisterPage,
    hideNavbar: true,
  },
  {
    path: RoutePath.LoginPage,
    component: LoginPage,
    hideNavbar: true,
  },
  {
    path: RoutePath.VerifyCodePage,
    component: VerifyCodePage,
    hideNavbar: true,
  },
  {
    path: RoutePath.ForgotPasswordPage,
    component: ForgotPasswordPage,
    hideNavbar: true,
  },
  {
    path: RoutePath.ProfilePage,
    component: ProfilePage,
  },
  {
    path: RoutePath.ChangePasswordPage,
    component: ChangePasswordPage,
  },
  {
    path: RoutePath.PrivacyPolicyPage,
    component: PrivacyPolicyPage,
  },
  {
    path: RoutePath.DesktopMessagesPage,
    component: DesktopMessagesPage,
    hideFooter: true,
    // wrapper: Protected,
  },
  {
    path: RoutePath.MobileMessagesPage,
    component: MobileMessagesPage,
    hideFooter: true,
    // wrapper: Protected,
  },
  {
    path: RoutePath.MobileMessagesDetailPage,
    component: MobileMessagesDetailPage,
    hideFooter: true,
    hideNavbar: true,
    // wrapper: Protected,
  },
  {
    path: RoutePath.HomePage,
    component: HomePage,
    // wrapper: Protected,
  },
  {
    path: RoutePath.PropertyPage,
    component: PropertyPage,
  },
  {
    path: RoutePath.MembershipPlanPage,
    component: MembershipPlanPage,
    // wrapper: Protected,
  },
  {
    path: RoutePath.ContactUsPage,
    component: ContactUsPage,
  },
  {
    path: RoutePath.AddPropertyPage,
    component: AddPropertyPage,
    // wrapper: Protected,
  },
  {
    path: RoutePath.PageNotFound,
    component: PageNotFound,
  },
];
