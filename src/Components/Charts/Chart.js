import ChartBar from './ChartBars';
import './Chart.css';

function Chart(props){
    const dataPointValues = props.dataPoints.map(values => parseInt(values.value));
    const maxValue = Math.max(...dataPointValues);

    return(
        <div className="chart">
            {props.dataPoints.map(chartBarData =>  
            <ChartBar
            key={chartBarData.label}
            value = {chartBarData.value} 
            maxValue = {maxValue} label={chartBarData.label}/>)}
        </div>
    );
}

export default Chart;