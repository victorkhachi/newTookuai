import React, { Component } from "react";
import Chart from "react-apexcharts";

class Area extends Component {
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
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: "#f5c764",
        },
        // title: {
        //   text: "Drives Statistics",
        // },
        yaxis: {
          show: false,
        },
        colors: ["#05a8fa"],
        stroke: {
          width: 2,
        },
      },
      series: [
        {
          name: "Total Number Of Rides",
          data: [200, 60, 40, 50, 55, 30, 20],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mc shadow">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="240"
          height="150"
        />
      </div>
    );
  }
}

export default Area;
