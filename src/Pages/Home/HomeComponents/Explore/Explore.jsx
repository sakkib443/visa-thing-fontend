import "./explore.css";
const Explore = () => {
  return (
    <div className="w-11/12 mx-auto my-10 ">
      <div>
        <h1 className="text-4xl   text-center py-5  font-bold">
          Explore Your Visa
        </h1>
      </div>
      <div className="grid grid-cols-5 my-10 gap-5">
        <div className="flex items-center hover:bg-[#447ddf] hover:text-white rounded cursor-pointer transition duration-500 bg-[#f3f3f3] py-5 px-2 justify-center">
          <div>
            <h1 className="text-xl">Visa Free</h1>
            <p className="text-center">(12 country)</p>
          </div>
        </div>

        <div className="flex items-center hover:bg-[#447ddf] hover:text-white rounded cursor-pointer transition duration-500 bg-[#f3f3f3] py-5 px-2 justify-center">
          <div>
            <h1 className="text-xl">E-Visa </h1>
            <p className="text-center">(12 country)</p>
          </div>
        </div>
        <div className="flex items-center hover:bg-[#447ddf] hover:text-white rounded cursor-pointer transition duration-500 bg-[#f3f3f3] py-5 px-2 justify-center">
          <div>
            <h1 className="text-xl">Visa on Arrival</h1>
            <p className="text-center">(12 country)</p>
          </div>
        </div>
        <div className="flex items-center hover:bg-[#447ddf] hover:text-white rounded cursor-pointer transition duration-500 bg-[#f3f3f3] py-5 px-2 justify-center">
          <div>
            <h1 className="text-xl">Flexible Submission</h1>
            <p className="text-center">(12 country)</p>
          </div>
        </div>
        <div className="flex items-center hover:bg-[#447ddf] hover:text-white rounded cursor-pointer transition duration-500 bg-[#f3f3f3] py-5 px-2 justify-center">
          <div>
            <h1 className="text-xl">In-person Submission</h1>
            <p className="text-center">(12 country)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
