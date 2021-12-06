import React, { Component } from "react";
import Chart from "react-apexcharts";

class Radar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thur", "Friday", "Sat", "Sun"],
        },
        // dataLabels: {
        //   enabled: false,
        // },
        fill: {
          colors: "#353a78",
        },
        // title: {
        //   text: "Drives Statistics",
        // },
      },
      series: [
        {
          name: "Total Number Of Rides",
          data: [20, 100, 40, 90, 85, 30, 50],
        },
      ],
    };
  }

  render() {
    return (
      <div className="rade shadow">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          width="310"
          height="300"
        />
      </div>
    );
  }
}

export default Radar;
