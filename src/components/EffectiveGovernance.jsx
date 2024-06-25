import React from "react";
import "./Chairman.css";

const EffectiveGovernance = () => {
  return (
    <div className="w-full mt-10">
      <h1 className=" text-center text-[#0098b6]  font-bold  text-4xl">
        Effective Governance in Letter and Spirit
      </h1>
      <p className="paragraph pt-6 font-medium text-2xl text-[#0098b6] ">
        We foster a culture of responsible corporate governance to ensure our
        sustained growth. Our Board of Directors not only offers us the right
        strategic direction but also ascertains that the best interests of all
        our stakeholders are safeguarded.
      </p>
      <br />
      <h2 className="font-bold text-[#0098b6] text-xl">Building a diverse board</h2>
      <p className="text-[#575756]">
        We have made diligent efforts to realise our organisational objectives.
        One such effort includes constituting a diverse Board of Directors. This
        ensures that we benefit from a breadth of insights and guidance on
        various matters, mitigating over-reliance on any single sector or
        individual. Additionally, our management team possesses over two decades
        of individual experience across functions, facilitating informed
        decisions that can meet both organisational objectives and stakeholder
        expectations effectively.
      </p>
      <br />
      <div>
        <h1 className="text-[#7cc4a9] font-extrabold text-2xl">
          <span className="text-5xl">20+ </span>years
        </h1>
        <div className="callout-line"></div>
        <p className="text-[#575756]">
          Of individual experience of
          <br /> Directors across functions
        </p><br />
      </div>
      <div className="flex  md:flex-row sm:flex-col mt-4 items-center justify-center">

        <div className="">
          <h2 className="font-bold text-[#0098b6] text-xl">
            Enforcing robust governance policies
          </h2>
          <p className="text-[#575756]">
            Strong policies pertaining to corporate governance, anti-money
            laundering (AML), whistleblowers, prevention of sexual harassment
            (POSH) and our Code of Conduct help us cultivate a work culture that
            upholds the values of transparency and accountability. We consider
            these policies to be essential for maintaining ethical business
            conduct and promptly resolving instances of misbehaviour.
          </p>  <br />
          <div>
        <h2 className="font-bold text-[#0098b6] text-xl">Dedicated board committees</h2>
        <p className="text-[#575756]">
          To oversee various aspects of our operations, we have established
          several committees, such as the Nomination and Remuneration committee,
          Audit Committee, Risk Management Committee, CSR Committee, IT Strategy
          Committee, Stakeholder Relationship Committee. With each committee
          dedicated to a particular area of expertise, they work together to
          guarantee risk detection, assessment and management, as well as
          regulatory compliance. Under the direction of these committees, we
          adhere to strict guidelines, strengthening our business resilience and
          operational integrity while efficiently meeting all regulatory
          requirements.
        </p>
        <br />
      </div>
         
        </div>
        <img
          className="ml-4 w-96"
          src="/src/assets/Effective.webp"
          alt="Governance"
        />

      </div>
    </div>
  );
};

export default EffectiveGovernance;
