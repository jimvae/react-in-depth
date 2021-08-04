import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const valuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...valuesArray); //need to do this because the arguments needs 1,2,3,4, not array
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          key={dataPoint.label}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
