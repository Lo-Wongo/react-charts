import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {} //After setting the state of the main App component, we need to pass that in to the Chart component
    }
  }

  componentWillMount() { //Runs when the component is mounted
    this.getChartData(); //this will be run when the component loads
  }

  getChartData() { //This will not run without putting it in a lifecycle method

    //Make Ajax call here

    this.setState({

      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'], //To test that the labels are actually being sent to the Chart component, alter anyone of these cities. The chart should now be displayed with the new name
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }

    });
  }


  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
        {/* <Chart chartData={this.state.chartData} legendPosition="top" /> */}
        {/* whatever we pass in here, is going to overide the default properties in the defaultprops. Just another chart with the legend at the top */}
      </div>
    );
  }
}

export default App;
