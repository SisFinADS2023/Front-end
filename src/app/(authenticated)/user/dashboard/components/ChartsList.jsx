import { useChartsData, useChartsDataDispatch } from '@/app/(authenticated)/user/dashboard/Context/Context'
import { useState, useRef, useCallback, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import * as chartjs from 'chart.js/auto'



const Chart = ({ chart, chartRef, moveChart }) => {
  const chartReference = useRef(null);
  useEffect(() => {
    if (!chartReference.current) return;

    chart.instance = new chartjs.Chart(
      chartReference.current,
      {
        type: chart.type,
        options: {
          maintainAspectRatio: false,
        },
        data: {
          labels: chart.data.map(row => row.year),
          datasets: [
            {
              label: chart.label,
              data: chart.data.map(row => row.count)
            }
          ]
        }
      }
    );

    return () => {
      chart.instance.destroy();
    };
  }, [chart.ref])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'chart',
    item: { index: chart.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'chart',
    drop: (item, monitor) => { moveChart(item.index, chart.index) },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }))

  return (
    <>
      <div ref={drop} className={`border-2 bg-white rounded-md ${canDrop ? "border-black" : "border-gray"} ${isOver ? "border-green" : "border-gray"}`}>
        <div ref={drag} className={`bg-transparent p-5 relative h-[30vh]`}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </>
  )
}

export const ChartsList = ({chart}) => {
  
  const chartsData = useChartsData()
  const chartsDataDispatch = useChartsDataDispatch()

    const moveChart = useCallback((source, destination) => {
      chartsDataDispatch({
        action: 'moveChart',
        source: source,
        destination: destination
      });
    }, []);

    return (
      <>
        <div className="grid grid-cols-3 gap-5 mt-3">
          {
            chart
              .map((chart, index) => { chart.index = index; return chart; })
              .filter(chart => chart.visible)
              .map(chart => <Chart key={Math.random()}
                                   chartRef={null}
                                   chart={chart}
                                   moveChart={moveChart} />)
          }
        </div>
      </>
    )
  }