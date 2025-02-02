import Navbar from "@components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NTCPage from "@pages/NTC";
import NeogangPage from "@pages/Neogang";
import useTrackWebContent from "@hooks/useTrackWebContent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<NTCPage />} />
          <Route path="/neogang" element={<NeogangPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function BaseLayout() {
  useTrackWebContent();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
}
