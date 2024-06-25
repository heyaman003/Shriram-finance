import React from 'react';
import Marquee from 'react-fast-marquee';
import './Highlights.css';

const callouts = [
  { id: 1, title: '13+ ', text: 'Years in existence' },
  { id: 2, title: '155 ', text: 'Branches' },
  { id: 3, title: '16 ', text: 'States' },
  { id: 4, title: 'AA+/Stable ', text: 'Credit Rating' },
  { id: 5, title: '₹3,232', text: 'Personnel' },
  { id: 6, title: '2,10,000+', text: 'Customers served' },
  { id: 7, title: '₹13,762 crore', text: 'Asset Under Management (AUM) \u000aAs of 31st March 2024 \u000a 71% Y-o-Y growth' },
  { id: 8, title: '₹7,591 crore', text: 'Disbursals in FY24 \u000a 83% Y-o-Y growth' },
  { id: 9, title: '₹1,429.60 crore', text: 'Total Revenue \u000a 82.4% Y-o-Y growth' },
  { id: 10, title: '₹217.40 crore', text: 'Profit after Tax for FY 24 \u000a 58% Y-o-Y growth' },
  { id: 11, title: '₹1,924 crore', text: 'Net Worth \u000a48% Y-o-Y growth1' },
  { id: 12, title: '3rd largest ', text: 'Affordable Housing \u000aFinance company in India' },
  { id: 13, title: 'Fastest ', text: 'growing AHFC in the \u000acountry' },
  { id: 14, title: 'Strong ', text: 'leadership team driving\u000a quality business growth' },
  { id: 15, title: 'Dominant ', text: 'in Gujarat, Tamil Nadu, Andhra\u000a Pradesh, Telangana and Karnataka' },
  { id: 16, title: 'Great Place \u000ato Work', text: 'For the 3rd time in a row' },
  { id: 17, title: 'Top 50 Best Workplaces \u000ain BFSI (GPTW)', text: 'For the 2nd consecutive year' },
];


const MHighlights = () => {
  return (
    <div className="marquee text-white py-4">
      <h1 className="high-head">Major Highlights of FY24</h1>
      <Marquee gradient={false}>
        {callouts.map((callout, index) => (
          <div key={index} className="mx-8 marquee-content-box">
            <h1 className="font-bold marquee-content-h1">{callout.title}</h1>
            <p className='marquee-content-p'>{callout.text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MHighlights;
