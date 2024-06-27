// Financial.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataSets = [
  { label: 'Chart 1', data: [10, 20, 30, 40, 50], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 2', data: [15, 25, 35, 45, 55], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 3', data: [20, 30, 40, 50, 60], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 4', data: [25, 35, 45, 55, 65], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 5', data: [30, 40, 50, 60, 70], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 6', data: [35, 45, 55, 65, 75], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 7', data: [40, 50, 60, 70, 80], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 8', data: [45, 55, 65, 75, 85], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 9', data: [50, 60, 70, 80, 90], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 10', data: [55, 65, 75, 85, 95], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 11', data: [60, 70, 80, 90, 100], years: ['2019', '2020', '2021', '2022', '2023'] },
  { label: 'Chart 12', data: [65, 75, 85, 95, 105], years: ['2019', '2020', '2021', '2022', '2023'] },
];

const Financial = () => {
  const renderCharts = () => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.6)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: dataset.data,
            barThickness: 20, // Adjust bar thickness for spacing
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
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false,
        aspectRatio: 1, // Adjust this ratio as needed
      };

      return (
        <div key={index} style={{ padding: '10px', height: '400px' }}> {/* Adjust height as needed */}
          <Bar data={data} options={options} />
        </div>
      );
    });
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="carousel-container"
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
          items: 4,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
      style={{ width: '80%' }}  // Adjust the width as needed
    >
      {renderCharts()}
    </Carousel>
  );
};

export default Financial;
