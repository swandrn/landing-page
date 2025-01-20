function Checkmark(): JSX.Element {
  return (
    <svg
      className="checkmark inline-block"
      xmlns="http://www.w3.org/2000/svg"
      height="25"
      width="25"
      viewBox="0 0 100 100"
    >
      <line
        x1="50"
        y1="80"
        x2="90"
        y2="30"
        stroke="#2DAA3B"
        strokeWidth="16"
      />
      <line
        x1="25"
        y1="50"
        x2="50"
        y2="70"
        stroke="#2DAA3B"
        strokeWidth="16"
      />
    </svg>
  );
}

function LandingPage(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl bg-yellow-400 mb-10 p-2">Sitemap Generator</h1>
      <div className="w-full h-3/4 flex flex-row flex-wrap justify-around items-start">
        <div className="free min-w-80 h-full bg-beige p-4 m-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
          <div className="plan w-full flex flex-col items-center">
            <div className="group w-52 overflow-hidden relative cursor-default">
              <div className="default h-full w-full relative">
                <h2 className="text-2xl text-center transition-all duration-200 ease-linear group-hover:text-beige z-10 relative">
                  Free
                </h2>
                <div className="line w-full h-px bg-[#4B3C33] absolute bottom-0 transition-all duration-300 ease-out group-hover:h-full">
                </div>
              </div>
            </div>
            <h2 className="text-[30px]">
              <b>
                $0<sub className="text-[12px]">/month</sub>
              </b>
            </h2>
            <p className="self-start text-[14px]">
              Great for small projects
            </p>
          </div>
          <ul>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              <span>
                30 page limit per sitemap
              </span>
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              1 project at a time
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Community support
            </li>
          </ul>
          <div className="w-full h-16 absolute bottom-20 left-0 flex items-center justify-center">
            <button className="flex items-center justify-center bg-[#FAFAFA] border-2 border-[#4B3C33] font-sans font-semibold text-base h-12 min-w-[140px] px-4 py-0 cursor-pointer transition-all duration-300 focus:outline-none hover:text-[#CAA01E] hover:border-[#CAA01E] active:border-[#F3E3B1] md:min-w-[170px]">
              Buy Now
            </button>
          </div>
        </div>
        <div className="personal w-80 h-full bg-beige p-4 m-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
          <div className="plan w-full flex flex-col items-center">
            <div className="group w-52 overflow-hidden relative cursor-default">
              <div className="default h-full w-full relative">
                <h2 className="text-2xl text-center transition-all duration-200 ease-linear group-hover:text-beige z-10 relative">
                  Personal
                </h2>
                <div className="line w-full h-px bg-[#4B3C33] absolute bottom-0 transition-all duration-300 ease-out group-hover:h-full">
                </div>
              </div>
            </div>
            <h2 className="text-[30px]">
              <b>
                $9.99<sub className="text-[12px]">/month</sub>
              </b>
            </h2>
            <p className="self-start text-[14px]">
              Ideal for professionals and small teams
            </p>
          </div>
          <ul>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              2,000 page limit per sitemap
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Up to 5 projects
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Email support
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Premium design templates
            </li>
          </ul>
          <div className="w-full h-16 absolute bottom-20 left-0 flex items-center justify-center">
            <button className="flex items-center justify-center bg-[#FAFAFA] border-2 border-[#4B3C33] font-sans font-semibold text-base h-12 min-w-[140px] px-4 py-0 cursor-pointer transition-all duration-300 focus:outline-none hover:text-[#CAA01E] hover:border-[#CAA01E] active:border-[#F3E3B1] md:min-w-[170px]">
              Buy Now
            </button>
          </div>
        </div>
        <div className="enterprise w-80 h-full bg-beige p-4 m-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
          <div className="plan w-full flex flex-col items-center">
            <div className="group w-52 overflow-hidden relative cursor-default">
              <div className="default h-full w-full relative">
                <h2 className="text-2xl text-center transition-all duration-200 ease-linear group-hover:text-beige z-10 relative">
                  Enterprise
                </h2>
                <div className="line w-full h-px bg-[#4B3C33] absolute bottom-0 transition-all duration-300 ease-out group-hover:h-full">
                </div>
              </div>
            </div>
            <h2 className="text-[30px]">
              <b>
                $29.99<sub className="text-[12px]">/month</sub>
              </b>
            </h2>
            <p className="self-start text-[14px]">
              Perfect for enterprises handling large projects
            </p>
          </div>
          <ul>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              100,000 page limit per sitemap
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Unlimited projects
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Priority email and phone support
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Premium design templates
            </li>
            <li className="tier-item ml-4 mt-5 mb-5 flex items-center">
              <Checkmark />
              Enhanced sitemap features
            </li>
          </ul>
          <div className="w-full h-16 absolute bottom-20 left-0 flex items-center justify-center">
            <button className="flex items-center justify-center bg-[#FAFAFA] border-2 border-[#4B3C33] font-sans font-semibold text-base h-12 min-w-[140px] px-4 py-0 cursor-pointer transition-all duration-300 focus:outline-none hover:text-[#CAA01E] hover:border-[#CAA01E] active:border-[#F3E3B1] md:min-w-[170px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export { LandingPage };
