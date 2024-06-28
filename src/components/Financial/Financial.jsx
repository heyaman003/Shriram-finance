import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Financial.css'
import ReadMoreButton from '../ReadMore/ReadMoreButton';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSets = [
  { label: 'Asset Under Management(AUM)(₹ in Crore)', data: [2305, 3929, 5355, 8047, 13762], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Total Disbursement(₹ in Crore)', data: [1127, 2195, 2739, 4146, 7591], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Net Worth(₹ in Crore)', data: [513, 576, 1158, 1299,1924], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Total Revenue(₹ in Crore)', data: [353, 410, 526, 784, 1430], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Yield on Assets(in %)', data: [18.0, 16.3, 13.8, 13.8, 15.7], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Net Interest Margin(in %)', data: [9.7, 8.1, 6.5, 6.9,7.7], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'PAT(₹ in Crore)', data: [47, 62, 80, 138, 217], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Cost to Income Ratio(in %)', data: [53.1, 48.7, 51.3, 51.6, 53.6], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'ROA(in %)', data: [2.4, 2.5, 2.1, 2.4, 2.4], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'ROE(in %)', data: [9.6, 11.6, 8.5, 11.2,15.1], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Gross Stage 3 Assets (NPA)(in %)', data: [2.4, 1.9, 1.7,0.9, 1.0], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
  { label: 'Net Stage 3 Assets (NPA)(in %)', data: [1.9, 1.5, 1.3, 0.7, 0.8], years: ['FY2020', 'FY2021', 'FY2022', 'FY2023', 'FY2024'] },
];

const Financial = () => {
  const renderCharts = () => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => i >= 3 ? (i === 3 ? 'rgba(77,189,200,1)' : 'rgba(0,152,182,1)') : 'rgba(203,223,223,1)'),
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.6)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            borderRadius: 10, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 18, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the y-axis labels
            },
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
          x: {
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 40,
            bottom:35,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '10px'  }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='container-margin'>
      <h2 className='text-center text-5xl font-bold text-[#0098b6] py-8'>Financial Performance</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        {renderCharts()}
      </Carousel>
        <div className='mb-4'>
            <a href="Progress"><ReadMoreButton/></a>
        </div>
    </div>
  );
};

export default Financial;
