import { useChartsData, useChartsDataDispatch } from '@/app/(authenticated)/user/dashboard/Context/Context'
import { useState, useRef, useCallback, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Tooltip } from 'react-tooltip'
import * as chartjs from 'chart.js/auto'



const Chart = ({ chart, elements, moveChart }) => {

  useEffect(() => {
    if (!elements.current[chart.index]) return;

    chart.instance = new chartjs.Chart(
      elements.current[chart.index],
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
  }, [elements])

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
    <Tooltip id="chart-tooltip" />
      <div data-tooltip-id="chart-tooltip" data-tooltip-content="Clique e arraste para reordenar" data-tooltip-delay-show="500" ref={drop} className={`border-2 bg-white rounded-md ${canDrop ? "border-black" : "border-gray"} ${isOver ? "border-green" : "border-gray"}`}>
        <div ref={drag} alt="lalala" className={`cursor-grab bg-transparent p-5 relative h-[30vh]`}>
          <canvas ref={r => elements.current[chart.index] = r}></canvas>
        </div>
      </div>
    </>
  )
}

export const ChartsList = () => {

  const chartsData = useChartsData()
  const chartsDataDispatch = useChartsDataDispatch()

  const elements = useRef(new Array(chartsData.length))

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
            chartsData
              .map((chart, index) => { chart.index = index; return chart; })
              .filter(chart => chart.visible)
              .map(chart => <Chart key={Math.random()}
                                   elements={elements}
                                   chart={chart}
                                   moveChart={moveChart} />)
          }
        </div>
      </>
    )
  }