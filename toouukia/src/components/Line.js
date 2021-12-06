import React, { Component } from "react";
import Chart from "react-apexcharts";

class Line extends Component {
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
          colors: "#db0b7a",
        },
        // title: {
        //   text: "Drives Statistics",
        // },
        markers: {
          size: 3,
        },
        yaxis: {
          show: false,
        },
        colors:[
            "#db0b7a"
        ],
        stroke: {
            width:2
      },
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
      <div className="mc shadow">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="240"
          height="150"
        />
      </div>
    );
  }
}

export default Line;
