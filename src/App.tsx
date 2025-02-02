import Navbar from "@components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NTCPage from "./pages/NTC";
import NeogangPage from "./pages/Neogang";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<NTCPage />} />
          <Route path="/neogang" element={<NeogangPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
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
