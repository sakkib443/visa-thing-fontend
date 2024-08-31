import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#2B2D42]  text-white flex justify-center md:justify-around gap-5  px-5">
      <div className=" py-2 text-center font-semibold  font-poppins flex gap-5">
        <Link to="#">
          <FaFacebook />
        </Link>
        <Link to="#">
          <FaSquareXTwitter />
        </Link>
        <Link to="#">
          <FaInstagram />
        </Link>
        <Link to="#">
          <FaLinkedin />
        </Link>
        <Link to="#">
          <FaYoutube />
        </Link>
      </div>
      <div className="font-palanquin text-sm hidden md:flex  gap-5 ">
        <div className="flex gap-2 justify-center items-center">
          <MdOutlineEmail />
          <p>cr@visathing.com</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <MdOutlinePhoneInTalk />
          <p>+880 196 777 7788 (Hotline)</p>
        </div>
      </div>
    </div>
  );
};

export default Header;