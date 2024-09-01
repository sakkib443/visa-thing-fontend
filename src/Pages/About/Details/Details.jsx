import Counter from "../../../components/Counter/Counter";
import Appointment from "../Appointment/Appointment";

const Details = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-semibold italic">Visa Processing Center in Bangladesh</h2>

                <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
                    Visa processing is a very difficult thing when you are thinking of going abroad. There are not a lot of opportunities to get a visa from Bangladesh smoothly. But now you have VISAThing, the country&apos;s number one visa processing support center in Bangladesh. Get all of your visa-related solutions in one place. VISAThing provides 99+ country visa processing support from Bangladesh and also gives 198+ country visa processing guidelines in Bangladesh.
                </p>
                {/* Counter */}
                <Counter />
                {/* Appointment */}
                <Appointment />
            </div>
        </section>
    );
};

export default Details;