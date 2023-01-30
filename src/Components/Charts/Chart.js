import React from 'react'
import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {
    let dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
        {props.dataPoints.map((dataPoint)=><ChartBar value={dataPoint.value} maxValue={totalMaximum} key={dataPoint.label} label={dataPoint.label}></ChartBar>)}
    </div>
  )
}

export default Chart