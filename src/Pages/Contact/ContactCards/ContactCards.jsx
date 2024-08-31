import ContactCard from "../../../components/ContactCard/ContactCard";

const ContactCards = () => {
  return (
    <div className="py-5">
      <h1 className="font-yeseva font-bold text-3xl my-5 text-center">
        Find Us Here
      </h1>
      <div className="grid md:grid-cols-2 gap-5  p-5 max-w-5xl">
        <ContactCard
          icon={"office"}
          title={"Head Office Address"}
          description={" 1st Floor, Homestead Gulshan Link Tower, DCC TA-99, Gulshan-Badda, Link Road, Gulshan-1, Dhaka-1212"}
        />
        <ContactCard
          icon={"tree"}
          title={"Work Hours"}
          description={"Sunday to Thursday: 10am– 7pm Weekend: Operational"}
        />
        <ContactCard
          icon={"phone"}
          title={"Phone Numbers"}
          description={"Tel: +880 1967 777788 (Hotline)"}
        />
        <ContactCard
          icon={"mail"}
          title={"Email us at"}
          description={"cr@visathing.com"}
        />
      </div>
    </div>
  );
};

export default ContactCards;
