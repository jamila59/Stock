import React from 'react';
import Plot from 'react-plotly.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Crypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      value: 'BTC'
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
  // componentDidUpdate(prevState){
  //   if( prevState.value !== this.state.value){
  //     // this.fetchStock();
  //   }
  // } 
  

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let symbol = this.state.value;
    let API_Call = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=USD&apikey=${API_KEY}`;
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

          for (var key in data['Time Series (Digital Currency Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Digital Currency Daily)'][key]['1a. open (USD)']);
          }

          console.log(stockChartXValuesFunction);
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
        <h1>Crypto Market</h1>
        <form onSubmit={this.handleSubmit}>
        <label for="stock">Stock:
        <select value={this.state.value} onChange={this.handleChange} id="crypto">
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="XRP">XRP</option>
          <option value="LTC">LTC</option>
          <option value="USDT">USDT</option>
          <option value="BCH">BCH</option>
          <option value="XMR">XMR</option>
          <option value="EOS">EOS</option>
          <option value="XMR">XMR</option>
          <option value="BNB">BNB</option>
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


export default Crypto;

