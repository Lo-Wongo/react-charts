import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2'; //Chartjs-2 is the latest version of Chartjs ---and it is what is compatible with React

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = { //When chartData comes in from the main App component as a property, we want to set it onto our state
            chartData: props.chartData
        }
    }

    //Define default properties for this component here, so that you can be able to use them from another component
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    } //You can use these defaultprops in the options under the render method like so; (display: true = display: this.props.displayTitle)


    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    options={{
                        title: {
                            // display: true,
                            display: this.props.displayTitle, //Dynamic property
                            // text: 'Largest Cities In Massachusetts',
                            text: 'Largest Cities In ' + this.props.location,//This way, we can now change the location in App.js to anything we want and have it dynamically changed here as well
                            fontSize: 25 //Hard coded
                        },
                        legend: {
                            // display: true,
                            display: this.props.displayLegend,
                            // position: 'right'
                            position: this.props.legendPosition
                        }
                    }}
                />

                <Line
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    options={{
                        title: {
                            // display: true,
                            display: this.props.displayTitle, //Dynamic property
                            // text: 'Largest Cities In Massachusetts',
                            text: 'Largest Cities In ' + this.props.location,//This way, we can now change the location in App.js to anything we want and have it dynamically changed here as well
                            fontSize: 25 //Hard coded
                        },
                        legend: {
                            // display: true,
                            display: this.props.displayLegend,
                            // position: 'right'
                            position: this.props.legendPosition
                        }
                    }}
                />

                <Pie
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    options={{
                        title: {
                            // display: true,
                            display: this.props.displayTitle, //Dynamic property
                            // text: 'Largest Cities In Massachusetts',
                            text: 'Largest Cities In ' + this.props.location,//This way, we can now change the location in App.js to anything we want and have it dynamically changed here as well
                            fontSize: 25 //Hard coded
                        },
                        legend: {
                            // display: true,
                            display: this.props.displayLegend,
                            // position: 'right'
                            position: this.props.legendPosition
                        }
                    }}
                />

            </div>
        )
    }
}

export default Chart;
