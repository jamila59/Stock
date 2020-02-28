import React from 'react';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    // componentDidMount(){
    //     this.fetcStock();
    // }

    // fetchStock(){
    //     const API_KEY = 'C5VYV510V7LZG320';
    //     let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=full&apikey=${API_KEY}`;
    // }


    render() {
        return (
          <div>
            <h1>Stock Market</h1>
          </div>
        )
      }
    }
    
export default Stock;