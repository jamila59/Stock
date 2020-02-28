import React from 'react';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount(){
        this.fetcStock();
    }

    fetchStock(){
        const API_KEY = 'C5VYV510V7LZG320';
        let stockSymbol = 'AMZN';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;

        fetch(API_CALL)
        .then(
          function(response){
            return response.json
          }
        )
          .then(
            function(data) {
              console.log(data);
            }
        )
    }


    render() {
        return (
          <div>
            <h1>Stock Market</h1>
          </div>
        )
      }
    }
    
export default Stock;