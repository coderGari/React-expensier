import './ExpenseFilter.css';

function ExpenseFilter(props) {
    const setFilterHandler = (event) => {
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }
return(
    <div>
        <label>Filter by year: </label>
        <select className='filter' value={props.selected} onChange={setFilterHandler}>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
        </select>
    </div>
);
}

export default ExpenseFilter;