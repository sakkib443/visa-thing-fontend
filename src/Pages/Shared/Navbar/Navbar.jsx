import { Link } from "react-router-dom";
import logo from "../../../../public/7bfeedd.png";

const Navbar = () => {
  const navOption = (
    <>
      {/* Home */}
      <li>
        <Link>Home</Link>
      </li>


      {/* Our Services */}
      <li>
        <details>
          <summary>Our Services</summary>
          <ul className="p-2 w-44">

            <li>
              <Link to="#">Visa Processing</Link>
            </li>

            <li>
              <Link to="#">Air Ticketing</Link>
            </li>

            <li>
              <Link to="#">Hotel Booking</Link>
            </li>

            <li>
              <Link to="#">Package Tours</Link>
            </li>

            <li>
              <Link to="#">Study Abroad</Link>
            </li>

          </ul>
        </details>
      </li>
      {/* Other Services */}
      <li>
        <details>
          <summary>Other Services</summary>
          <ul className="p-2 w-44">
            <li>
              <Link>Tour Guide Booking</Link>
            </li>
            <li>
              <Link>Cruise Trip Booking</Link>
            </li>
            <li>
              <Link>Hajj and Umrah Booking</Link>
            </li>
            <li>
              <Link>Tourist Car Booking</Link>
            </li>
            <li>
              <Link>International Bus and Train Ticket</Link>
            </li>
            <li>
              <Link>Medical Visa Processing</Link>
            </li>
            <li>
              <Link>Visa Access From Bangladesh</Link>
            </li>
          </ul>
        </details>
      </li>

      {/* About */}
      <li>
        <Link to="/about">About</Link>
      </li>
      {/* Contact */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>

    </>
  );
  return (
    <div className="w-[80%] mx-auto relative z-50">
      <div className="navbar bg-base-100 flex ">
        <div className="navbar-start">
          
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end flex justify-center items-center">
          <div className="flex items-center justify-center text-[15px] font-bold">
            <Link to={'/login'}><button className="px-4 mr-4 border-stone-400">
              Login
            </button></Link>
            <Link to={'/register'}><button>
              Register
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
