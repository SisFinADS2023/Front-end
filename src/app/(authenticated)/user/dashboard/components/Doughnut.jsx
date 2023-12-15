'use client'

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Doughnut = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      const newChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.labels,
          datasets: [
            {
              data: data.values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                // Add more colors as needed
              ],
            },
          ],
        },
      });
    // Store the new chart instance in the ref
    chartRef.current.chart = newChartInstance;

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
        if(chartRef != null){
            if (chartRef.current) {
                chartRef.current.chart.destroy();
            }
        }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default function DoughnutChart() {

    const chartData = {
        labels: ['Roupas', 'Alimentação', 'Transporte'],
        values: [25, 20, 25],
      };

    return (
        <>
        <div className=" p-5 relative h-[30vh] rounded-md bg-white py-4 px-4 overflow-hidden shadow" >
            <div className='flex justify-between mb-5 px-4'>
                <h2 className="text-xl text-secondary-900 font-semibold ">Gastos por categoria</h2>
            </div>
            <div className=' h-5/6 overflow-y-scroll rolagem content p-3 m-5'>
                <Doughnut data={chartData}/>
            </div>
        </div>
        </>
    )
};