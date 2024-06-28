import React from "react";
import "./Chairman.css";

const RobustProcess = () => {
  return (
    <div className="container-margin mt-8 mb-8">
      <div>
        <h1 className="  text-[#0098b6]  font-bold title-page lg:text-6xl sm:text-4xl pt-8">
          Robust Underwriting Process
        </h1>

        <p className="paragraph pt-8 font-medium subtitle-page lg:text-2xl sm:text-xl text-[#0098b6] mb-4">
          Our watertight underwriting process has been instrumental in
          maintaining high asset quality. SHFL has rigorous credit evaluation
          and proactive collection. Despite portfolio growth, this prudent
          approach has resulted in improvement in delinquency metrics. Our
          strong credit underwriting and focused collection strategies have led
          to low 90+ DPD.
        </p>
        <p className="paragraph text-[#575756] lg:text-xl">
          A well-managed in-house collection system that uses customised tactics
          for every collecting bucket, including telemarketing and app-based
          reminders, is in place. With a focus on digital collections, we want
          to offer our customers seamless experiences that further demonstrate
          our dedication to providing excellent customer service.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="font-bold  text-[#000000] text-xl mb-4">
          Despite growth in book, prudent underwriting and sustained collection
          efforts led to improvement in delinquency metrics across buckets
        </h2>

        <img src="./Page-image/Metrics.png"></img>
      </div>

      <div  className="mt-8">
        <h2 className="font-bold text-[#0098b6] text-3xl">
          Credit assessment mechanism
        </h2>
        <p className="paragraph text-[#575756] lg:text-xl">
          We maintain a rigorous and structured approach for credit
          underwriting. We select credit managers with proven success in secured
          underwriting and providing extensive training.
        </p>
        <p className="paragraph text-[#575756] lg:text-xl">
          Our branch teams are empowered to make their own underwriting
          decisions, enhancing operational efficiency and our portfolio quality.
          To ensure informed decisions, we conduct policy tests. Credit
          underwriters who pass this test are only authorized to appraise
          customers. A stringent four-eye principle for approval adds another
          layer of scrutiny. Technological tools further bolster control and
          efficiency, while local credit teams, well-versed in market dynamics,
          analyse customers’ cash flows. This comprehensive strategy not only
          safeguards portfolio quality but also fosters a culture of
          accountability, ensuring that our credit decisions align with our
          commitment to build a strong portfolio. To check the legitimacy and
          authenticity of the data we receive, our underwriting procedure
          includes several verifications. Our vendors electronically update the
          report in our Loan Origination System (LOS) app; and we leverage
          digital tools, for the various checks.
        </p>
      </div>
      
      <div className="mt-8 mb-4 ">
            <p className="text-[#7cc4a9] text-2xl font-bold">Checking Procedure</p>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                  <div>
                        <img src="./Page-image/CheckingProcedure.png" alt="" />
                  </div>
                  <div className="lg:text-xl">
                        <p>We maintain the highest standards of due diligence and guarantee the validity and correctness of the information gathered by undertaking this extensive underwriting process.</p>
                        <p className="text-[#0098b6] text-2xl py-4 font-bold">Verification and oversight</p>
                        <p>With six levels of independent verification and several control points that add an extra level of oversight, our credit function is decentralised. Our underwriting decisions are supported by thorough analytics that we obtain in partnership with bureaus. Additionally, our branch teams own the underwriting process, which has maintained good turnaround times and produced a portfolio of superior quality.</p>
                  </div>
            </div>
      </div>
    </div>
  );
};

export default RobustProcess;
