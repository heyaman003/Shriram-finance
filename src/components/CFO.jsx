import React from "react";
import "./Chairman.css";

const CFO = () => {
  return (
    <div className="container-margin">
      <h1 className=" text-[#0098b6]  font-bold mb-8 title-page lg:text-6xl">
        Message from WTD & CFO
      </h1>

      <div className="chairman-message   flex  gap-16 md:flex-row sm:flex-col mt-4">
        <img 
          className=" rounded-full bg-slate-100 chairman sm:m-auto"
          src="/src/assets/CFO.webp"
          alt="Chairman"
        />

        <text className=" text-[#0098b6]  pt-16 subtitle-page lg:text-2xl">
          <img
            className="pb-6  "
            src="/src/assets/quote.svg"
            alt="quote mark"
          />
          We, at Shriram Housing Finance Limited, have always sought to help
          customers with housing finance solutions and overcome any barriers
          they might face in this journey, especially first time homeowners. Our
          vision of ‘Housing for All’ continues to guide us, as we stay true to
          our values and build a strong organization.
          <div>
            <br />
            <h2 className="font-bold text-xl text-[#0098b6] ">
              Gauri Shankar Agarwal
            </h2>
            <p className="text-lg text-[#575756]">
              Whole Time Director & Chief Financial Officer
            </p>
          </div>
        </text>
      </div>
      <br />

      <p className="font-bold  text-[#0098b6]  text-2xl mb-4">Dear Shareholders</p>
      <section className="text-[#575756]">
        <div className="text-xl">
          <p>
            With immense pleasure and satisfaction, I present to you the major
            highlights of the preceding financial year. Though the outcome of
            endearing values and results of focused vision cannot be fully
            captured by numbers alone, it is important to assess the progress,
            communicate the results, and establish our position in the
            marketplace.
          </p>
          <br />
          <p>
            Home-ownership is a source of pride and one of the first steps
            toward achieving long-term stability. We, at Shriram Housing Finance
            Limited, have always sought to help customers with housing finance
            solutions and overcome any barriers they might face in this journey,
            especially first-time homeowners who are mostly self-employed. Our
            vision of ‘Housing for All’ continues to guide us, as we stay true
            to our values and build a strong organization.
          </p>
          <br />
          <p>
            We have consistently adopted a customer-centric approach, with a
            clear aim to bridge the credit gap in the largely untapped
            affordable housing segment. Our mission remains to serve underserved
            customers, particularly in Tier-2 and Tier-3 cities, where the need
            for affordable housing is most acute.
          </p>
          <br />
          <p>
            As the third largest Affordable Housing Finance Company in India, we
            are also the fastest-growing in this sector. Our asset under
            management (AUM) has seen a substantial increase, reaching ₹13,762
            Crores, up from ₹8,047 Crores in March ‘23. Extensive branches and a
            dedicated workforce have significantly contributed to this number,
            alongside the addition of diversified lenders to the portfolio. The
            71% growth in AUM reflects our effective strategy and the impact of
            our investments in expanding our distribution network, which also
            led to an 83% rise in disbursals year-on-year, amounting to ₹7,591
            Crores.
          </p>
          <br />
          <p>
            Our financial performance is a well-refined demonstration of our
            growth trajectory. The Company has reported a Profit After Tax of
            ₹217.4 Crores, marking a 58% year-on-year increase, while our Profit
            before Tax surged by 71% to ₹290.3 Crores. Additionally, our Net
            Interest Margin improved to 7.7%, up from 6.9% in FY’23, reflecting
            our efficient fund management and operational excellence.
          </p>
          <br />
          <p>
            The quality of our portfolio continues to be a testament to our
            rigorous underwriting standards and proactive collection strategies.
            Our Gross and Net Stage 3 assets remain minimal at 1.03% and 0.79%,
            respectively. Our consistent high collection efficiency throughout
            the year in the range of 98-99% further highlights our strong credit
            risk management practices.
          </p>
          <br />
          <p>
            Our strong leadership team has been pivotal in driving quality
            business growth. Our prudent risk management, coupled with effective
            operational strategies, has significantly improved our bottom line,
            creating enhanced value for our shareholders. Our return on equity
            stands at 15.1%, reflecting our commitment to deliver sustainable
            growth.
          </p>
          <br />
          <text className=" text-[#0098b6]  pt-10 text-2xl">
            <img
              className="pb-6  "
              src="/src/assets/quote.svg"
              alt="quote mark"
            />
            Our financial performance is a well-refined demonstration of our
            growth trajectory The Company has reported a Profit After Tax of
            H217.4 Crores, marking a 58% year-on-year increase, while our Profit
            Before Tax surged by 71% to ₹290.3 Crores.
          </text>
          <br /> <br />
          <p>
            A healthy mix of customers, with 22% as salaried employees and 78%
            of our loan portfolio as self-employed consumers, has allowed us to
            build a niche, high-quality portfolio. Our average ticket size of
            ~₹18 Lakhs indicates the affordability and accessibility of our
            financial products, catering to the consistent spending habits of
            our customer base.
          </p>
          <br />
          <p>
            Despite macroeconomic challenges, our stringent underwriting process
            has maintained high asset quality. Loans sourced since January 2019
            show a significantly low 90+ days past due, thanks to our
            disciplined approach to credit underwriting and focused collection
            strategies.
          </p>
          <br />
          <p>
            In conclusion, our ongoing efforts to build a strong liability
            franchise, augmented by high credit ratings, ensure we continue to
            meet the housing finance needs of our customers while delivering
            strong financial performance. We remain committed to our vision of
            enabling affordable housing for all, driving inclusive growth across
            the nation.
          </p>
          <br />
          <p>
            Finally, I would like to thank our stakeholders, lenders, and
            investors for their continuous support. To achieve our objectives in
            the coming years, we will require your continued guidance. I express
            our sincere gratitude towards all our customers for their precious
            trust and for allowing us to serve them. Finally, I would like to
            thank our dedicated employees for their unwavering commitment
            towards making Shriram Housing Finance a Great Place to Work.
          </p>
          
        </div>
      </section>
      <br />
      <p className="text-lg text-[#0098b6]  font-extrabold">
        Gauri Shankar Agarwal
      </p>
      <p className="text-lg text-[#575756]">
        Whole Time Director & Chief Financial Officer
      </p>
    </div>
  );
};

export default CFO;
