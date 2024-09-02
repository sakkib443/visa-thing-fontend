/* eslint-disable react/prop-types */
const PassportTypes = ({ passportTypes }) => {
  return (
    <div>
      <h3 className="text-2xl my-5 bg-slate-300 p-2 font-semibold mb-3">
        Passport Types
      </h3>
      <ul className="list-disc list-inside text-gray-700">
        {passportTypes?.map((passport) => (
          <li key={passport.id}>{passport.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default PassportTypes;
