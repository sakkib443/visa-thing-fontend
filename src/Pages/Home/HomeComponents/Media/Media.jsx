const Media = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <h1 className="text-4xl   text-center py-10  font-bold">
          Media Library
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5 justify-between">
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pakistan E-Visa | VISAThing</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pakistan E-Visa | VISAThing</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pakistan E-Visa | VISAThing</h2>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="text-center primary-gredient ">Load more</button>
      </div>
    </div>
  );
};

export default Media;
