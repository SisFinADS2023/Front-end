import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Cria o gráfico quando o componente é montado
        const ctx = chartRef.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: [
                            '#9CA3AF',
                            '#11D17E',
                            '#8DBE24',
                            '#0E0E76',
                            
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '50%', // Define a porcentagem de corte no centro do gráfico
                elements: {
                    arc: {
                        borderWidth: 5, // Largura da borda das fatias
                    },
                },
                rotation: 180,
            },
        });

        // Limpa o gráfico ao desmontar o componente
        return () => {
            myChart.destroy();
        };
    }, [data, labels]);

    return (
        <div className='h-[205px]'>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

const ExpenseChart = () => {
    const data = [40,40,10,40];
    const labels = ['Lazer', 'Alimentação', 'Saúde'];

    return (
        <div className='bg-white shadow-md rounded-md p-4'>
            <h2 className='text-xl text-secondary-900 font-semibold mb-10'>Despesas por categoria</h2>
            <div className='flex justify-center items-center'>
                <DoughnutChart data={data} />
                <ul className='flex flex-col gap-4 text-base font-semibold'>
                    <li className='flex justify-center items-center gap-3'>
                        <div className='bg-tertiary-400 h-2 w-2 rounded-full'></div>
                        <h3>Lazer</h3>
                    </li>
                    <li className='flex justify-center items-center gap-3'>
                        <div className='bg-secondary-600 h-2 w-2 rounded-full'></div>
                        <h3>Alimetação </h3>
                    </li>
                    <li className='flex justify-center items-center gap-3'>
                        <div className='bg-primary-600 h-2 w-2 rounded-full'></div>
                        <h3>Saúde</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ExpenseChart;