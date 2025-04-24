import React from "react";

export const CareerAspirationForm: React.FC<{ onContinue: () => void }> = ({
  onContinue,
}) => {
  return (
    <div className="self-stretch pt-40 pb-9 my-auto font-medium min-w-60 w-[458px] max-md:pt-24 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex flex-col w-full leading-none h-[415px] max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <label className="text-base text-white max-md:max-w-full">
                *Select Career Aspirations
              </label>
              <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-4 w-full text-base text-indigo-300 rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:max-w-full">
                <div>Select your college</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9?placeholderIfAbsent=true"
                  className="object-contain shrink-0 my-auto aspect-[1.55] w-[17px]"
                  alt="Dropdown arrow"
                />
              </div>
            </div>
          </div>
          <h2 className="self-start mt-12 text-3xl tracking-tight leading-10 text-center text-white max-md:mt-10 max-md:max-w-full">
            What are your top 3 preferred career focuses?
          </h2>
          <div className="mt-12 w-full text-base text-indigo-300 max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 w-full text-white rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:max-w-full">
              <div>Data Engineer (Highly Recommended)</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b9149760592d45d7599b59188f75085d79cf369d?placeholderIfAbsent=true"
                className="object-contain shrink-0 my-auto aspect-[1.55] w-[17px]"
                alt="Selected option"
              />
            </div>
            <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-4 w-full rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:max-w-full">
              <div>Select Career Focus</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9?placeholderIfAbsent=true"
                className="object-contain shrink-0 my-auto aspect-[1.55] w-[17px]"
                alt="Dropdown arrow"
              />
            </div>
            <div className="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-4 w-full rounded-md shadow-[0px_1px_30px_rgba(69,42,124,0.1)] max-md:max-w-full">
              <div>Select Career Focus</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6764a8bc52ff472aa18147d84536ab6a/b780c6a227a0e47eb6f6716773e3fe4be6a5c5b9?placeholderIfAbsent=true"
                className="object-contain shrink-0 my-auto aspect-[1.55] w-[17px]"
                alt="Dropdown arrow"
              />
            </div>
          </div>
        </div>
        <button
          onClick={onContinue}
          className="overflow-hidden px-16 py-3 mt-20 w-full text-base leading-none text-center text-white bg-blue-700 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          Exciting! <span className="font-semibold">Let's go</span>
        </button>
      </div>
    </div>
  );
};
