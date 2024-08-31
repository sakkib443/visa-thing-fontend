import AnimatedNumber from "react-animated-numbers";

const Counter = () => {
  const transitionTween = (index) => ({
    type: "tween",
    duration: index + 1,
    damping: 10,
    mass: 1,
  });

  const staff = 185;
  const offices = 1000;
  const projects = 3.2;

  return (
    <div className="relative flex items-center justify-center h-full font-yeseva">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-slate-400 shadow-lg  px-4 py-8 text-center drop-shadow-lg">
                <dt className="order-last text-2xl font-medium text-white">
                  Countries Visa Information
                </dt>

                <div className="flex justify-center items-center gap-2 text-6xl font-extrabold text-[#FFCD05]">
                  <AnimatedNumber
                    transitions={() => transitionTween(1)}
                    includeComma
                    animateToNumber={staff}
                    locale="en-US"
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                  <p className="text-3xl">+</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-slate-400 shadow-lg  px-4 py-8 text-center drop-shadow-lg">
                <dt className="order-last text-2xl font-medium text-white">
                  Organization Relying on Us
                </dt>
                <div className="flex justify-center items-center gap-2 text-6xl font-extrabold text-[#FFCD05]">
                  <AnimatedNumber
                    includeComma
                    animateToNumber={offices}
                    transitions={() => transitionTween(2)}
                    locale="en-US"
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                      { mass: 1, tension: 180, friction: 135 },
                      { mass: 1, tension: 260, friction: 100 },
                      { mass: 1, tension: 210, friction: 180 },
                    ]}
                  />
                  <p className="text-3xl">+</p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg bg-slate-400 shadow-lg  px-4 py-8 text-center drop-shadow-lg">
                <dt className="order-last text-2xl font-medium text-white">
                  Travelers Served from Bangladesh
                </dt>
                <div className="flex justify-center items-center text-6xl font-extrabold text-[#FFCD05] gap-2">
                  <AnimatedNumber
                    includeComma
                    animateToNumber={projects}
                    transitions={() => transitionTween(3)}
                    locale="en-US"
                    configs={[
                      { mass: 1, tension: 220, friction: 100 },
                      { mass: 1, tension: 180, friction: 130 },
                      { mass: 1, tension: 280, friction: 90 },
                    ]}
                  />
                  <p className="text-3xl">M+</p>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Counter;
