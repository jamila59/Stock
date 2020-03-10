import React from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      value: 'FB'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
     console.log(this.state.value);
  }

  handleSubmit(event){
    console.log(this.state.value);
    event.preventDefault();
    this.fetchStock();
  }

  componentDidMount() {
    this.fetchStock();
  }

  componentDidUpdate(prevState){
    if( prevState.value !== this.state.value){
      // this.fetchStock();
    }
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = this.state.value;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  
  render() {
    return (
      <div style={moveCard}>
      <Card>
        <CardContent>
        <h1>Stock Market</h1>
        <form onSubmit={this.handleSubmit}>
        <label for="stock">Stock:
        <select value={this.state.value} onChange={this.handleChange} id="stock">
          <option value="FB">FB</option>
          <option value="GOOGL">GOOGL</option>
          <option value="AMZN">AMZN</option>
          <option value="PYPL">PYPL</option>
          <option value="AAPL">AAPL</option>
          <option value="GOLD">GOLD</option>
          <option value="BA">BA</option>
          <option value="BAC">BAC</option>
          <option value="BABA">FB</option>
          <option value="SAN">SAN</option>
          <option value="BK">BK</option>
          <option value="BIDU">BIDU</option>
        </select>
        </label>
        <input type="submit" value="Submit"/>
        </form>

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{ width: 720, height: 550, title: 'Stock-Plot'}}
        />
        </CardContent>
      </Card>    
      </div>
    )
  }
}
const moveCard = {
  paddingTop: '100px',
  paddingLeft:'170px',
}

export default Stock;