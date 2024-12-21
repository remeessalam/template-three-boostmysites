import ScrollToTop from "./app/elements/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import Loader from "./app/elements/loader";
import { Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RootLandingLayout from "./layouts/LandingLayout";

function App() {
  const [isLoading, setLoading] = useState(false);
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      {isLoading && <Loader />}
      <ScrollToTop />
      <Toaster position="top-center" />
      {pathname.includes("web-development") ||
      pathname.includes("app-development") ? (
        <RootLandingLayout setLoading={setLoading} />
      ) : (
        <RootLayout setLoading={setLoading} />
      )}
    </Suspense>
  );
}

export default App;
