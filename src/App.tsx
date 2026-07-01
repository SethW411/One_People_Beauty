import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "./routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageTransition from "./components/layout/PageTransition";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Part 1 of the load-in: cream overlay fades out once on first paint */}
      <div className="page-overlay" aria-hidden />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              {routes.map(({ path, element: Element }) => (
                <Route key={path} path={path} element={<Element />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
