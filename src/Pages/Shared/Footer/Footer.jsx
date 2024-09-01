import logo from "../../../../public/7bfeedd.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#0F172A] text-gray-300  p-10 text-[16px] ">
        <aside className="">
          <img src={logo} alt="" />
          <p className="lg:w-[520px] text-justify">
            Due to the periodic changes of information/ requirement/ document,
            VISAThing doesn’t provide any confirmation, guarantee or
            representation, express or implied, that the information contained
            or referenced herein is completely accurate or final. VISAThing also
            doesn’t assure the grant of visa for its ‘Visa logistics support’.
            Visa grant is the distinct decision of embassy or consulate of the
            respective countries.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center  bg-base-300 text-base-content rounded px-10 py-4">
        <div>
          <p className="text-[16px] uppercase">
            Copyright © {new Date().getFullYear()} - VisaPro Consultancy & Migration</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
