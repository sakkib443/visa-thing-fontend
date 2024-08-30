import { Link } from "react-router-dom";
import logo from "../../../../public/7bfeedd.png";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <details>
          <summary>Our Media</summary>
          <ul className="p-2 w-44">
            <li>
              <Link>Youtube Video</Link>
            </li>
            <li>
              <Link>Facebook Video</Link>
            </li>
            <li>
              <Link>Reels Video</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Our Service</summary>
          <ul className="p-2 w-44">
            <li>
              <Link>Visa Processing Consultancy</Link>
            </li>
            <li>
              <Link>Visa Processing in Bangladesh</Link>
            </li>
            <li>
              <Link>Visa Processing in India</Link>
            </li>
            <li>
              <Link>E-Visa Processing</Link>
            </li>
            <li>
              <Link>One Way Collection</Link>
            </li>
            <li>
              <Link>Document Legalization</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="w-9/12 mx-auto relative z-50">
      <div className="navbar bg-base-100 flex flex-col lg:flex-row">
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
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end flex justify-center items-center">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow " placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="flex">
            <Link to={'/login'}><button className="px-4 border-r-2  mr-4 border-stone-400">
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
