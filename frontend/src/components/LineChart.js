import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ csv }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart = null;

    const fetchData = async () => {
      try {
        const csvFile = `${csv}.csv`;
        const response = await fetch(`https://raw.githubusercontent.com/Harizibam7/dataset/main/${csvFile}`);
        const data = await response.text();

        // Parse the CSV data
        const rows = data.split('\n');
        const xValues = [];
        const yValues = [];

        for (let i = 1; i < rows.length; i++) {
          const columns = rows[i].split(',');
          const xValue = columns[2]; // Third column as x value
          const yValue = columns[columns.length - 1]; // Last column as y value

          xValues.push(xValue);
          yValues.push(yValue);
        }

        const canvas = document.createElement('canvas');
        chartRef.current.innerHTML = '';
        chartRef.current.appendChild(canvas);

        // Initialize Chart.js
        chart = new Chart(canvas, {
          type: 'line',
          data: {
            labels: xValues,
            datasets: [
              {
                label: csv,
                data: yValues,
                borderColor: 'rgba(75, 192, 192, 1)', // Customize line color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize fill color
              },
            ],
          },
          options: {
            // Customize chart options as needed
          },
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };

    fetchData();

    // Cleanup function to destroy the chart instance
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [csv]);

  return <div ref={chartRef}></div>;
};

export default LineChart;
