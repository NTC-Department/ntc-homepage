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
    <div className="min-h-screen flex flex-col w-screen overflow-x-hidden">
      <header>
        <div className="w-screen">
          <Navbar />
        </div>
      </header>
      <main className="flex-grow">
        <div className="w-screen">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="w-screen">{/* <Footer /> */}</div>
      </footer>
    </div>
  );
}
