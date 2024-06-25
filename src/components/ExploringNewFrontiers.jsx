import React from "react";

const ExploringNewFrontiers = () => {
  return (
    <div className="mt-10 w-full">
      <div>
        <h1 className=" text-center text-[#0098b6]  font-bold  text-4xl">
          Exploring New Frontiers through our Myriad Offerings
        </h1>

        <p className="paragraph pt-6 font-medium text-2xl text-[#0098b6] ">
          We are dedicated to helping families to have their own homes through
          our affordable and customisable financing options. With our
          competitive prices and flexible terms, we ensure that every customer
          can secure their financial stability. We aim to foster community
          growth and empowerment through homeownership.
        </p>
      </div>
      <div className="flex sm:flex-col sm:gap-20 md:gap-20 md:flex-row mt-10">
        <div>
          <img width={820} src="/src/assets/Graph3.png"></img>
        </div>
        <div>
          <img width={600} src="/src/assets/HomeLoan.png"></img>
        </div>
      </div>
    </div>
  );
};

export default ExploringNewFrontiers;
