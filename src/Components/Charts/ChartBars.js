import './ChartBar.css';

function ChartBar(props){

    let barFill = '0%'

    if(props.maxValue > 0){
        barFill = Math.round((props.value / props.maxValue)*100) + '%';
    }

    return(
        <div className="chartBar_container">
            <div className="chartBar_inner">
                <div className="chartFill" style={{height:barFill}}></div>
            </div>
            <div className="chartLabel">{props.label}</div>
        </div>
    );
}

export default ChartBar;