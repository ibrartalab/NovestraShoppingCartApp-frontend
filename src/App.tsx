import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./components/Loader";
import { store } from "./store/store";
import { Provider } from "react-redux";
import SearchContextProvider from "./context/SearchContext";
import SliderControllerContext from "./context/SiderContext";
import CartToggleContextProvider from "./context/CartToggleContext";
// import { useAppSelector } from "./hooks/redux/reduxHooks";
// import { Navigate } from "react-router-dom";

// This is the main application file where we set up routing and lazy loading of components
// The Suspense component is used to handle loading states for lazy-loaded components
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const SignupPage = lazy(() => import("./pages/Signup"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));

function App() {
  // const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  //   const userName = useAppSelector((state) => state.auth.userName);

  //   if (!userName) {
  //     return <Navigate to="/" replace />;
  //   }

  //   return <>{children}</>;
  // };

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <SliderControllerContext>
            <CartToggleContextProvider>
            <SearchContextProvider>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                    path="/admin/dashboard"
                    element={
                      // <PrivateRoutes>
                      <AdminDashboard />
                      // </PrivateRoutes>
                    }
                  />
                </Routes>
              </Suspense>
            </SearchContextProvider>
            </CartToggleContextProvider>
          </SliderControllerContext>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
