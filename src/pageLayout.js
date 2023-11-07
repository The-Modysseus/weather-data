import { Outlet } from "react-router-dom";
import { Navbar } from './navBar';

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}