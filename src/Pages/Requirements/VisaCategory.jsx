/* eslint-disable react/prop-types */
const VisaCategory = ({ vCategory }) => {
  return (
    <div>
      <h3 className="text-2xl my-10 bg-slate-300 p-2 font-semibold mb-3">
        Visa Category
      </h3>
      <p>
        <span className="font-bold">Name:</span> {vCategory?.name}
      </p>

      <p>
        <span className="font-bold">Details:</span> {vCategory?.short_details}
      </p>
    </div>
  );
};
export default VisaCategory;
