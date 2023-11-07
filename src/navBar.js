import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/weathercity" >
        WeatherCity
      </NavLink>
      <NavLink to="/zipandcountry" >
        ZipAndCountry
      </NavLink>
      <NavLink to="/geo" >
        Geo from browser
      </NavLink>
    </nav>
  );
}