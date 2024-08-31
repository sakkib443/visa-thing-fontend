const Form = () => {
  return (
    <div className="max-w-[600px] flex flex-col items-center justify-center h-screen">
      <h1 className="font-yeseva font-bold text-[28px] mb-20">
        Send us your Feedback
      </h1>
      {/* Form */}
      <form className="font-lato text-sm w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px] ">
        {/* <!-- Text input --> */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full block border border-slate-500    py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* <!-- Email input --> */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full block border border-slate-500    py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* <!-- Subject input --> */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full block border border-slate-500    py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* <!-- Message --> */}
        <div className="mb-4 w-full">
          <label className="text-[#687279]" htmlFor="message">
            Message
          </label>
          <textarea
            type="password"
            id="message"
            rows="4"
            className="w-full block border border-slate-500    py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        {/* <!-- Submit Button --> */}
        <button
          type="submit"
          className="font-montserrat  flex gap-5 items-center justify-center text-xl bg-[#FFCD05]  w-full h-[50px] p-2 mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
