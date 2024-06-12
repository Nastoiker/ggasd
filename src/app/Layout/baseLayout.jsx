import { Header } from "../../components/header/ui/header";
import { Outlet } from 'react-router-dom';
import { Footer } from "../../components/footer/ui/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}