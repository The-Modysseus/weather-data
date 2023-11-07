import Navbar from "./navBar";
import { Outlet } from "react-router-dom";


export default function PageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}