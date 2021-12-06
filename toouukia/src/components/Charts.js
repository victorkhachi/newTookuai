import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "March",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            
          ],
        },
        // dataLabels: {
        //   enabled: false,
        // },
        fill: {
          colors: "#353a78",
        },
        title:{
          text: 'Drives Statistics'
        }
      },
      series: [
        {
          name: "Total Number Of Rides",
          data: [200, 60, 40, 50, 55, 30, 20, 100, 28,100, 150, 60],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mixed-chart shadow">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="930"
          height ="330"
        />
      </div>
    );
  }
}

export default Charts;

// import { Line } from "react-chartjs-2";

// import React from 'react'

// export default function Charts() {
//   return (
//     <div>
//       *{" "}
//       <Line
//         datasetIdKey="id"
//         data={{
//           labels: ["Jun", "Jul", "Aug"],
//           datasets: [
//             {
//               id: 1,
//               label: "",
//               data: [5, 6, 7],
//             },
//             {
//               id: 2,
//               label: "",
//               data: [3, 2, 1],
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// }
