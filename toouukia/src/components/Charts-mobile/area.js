import React, { Component } from "react";
import Chart from "react-apexcharts";

class AreaMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "Total No. of rides ",
            "Ongoing Rides ",
            "Revenue",
            "No. of vehicles",
            "Total no. of online vehicles",
          ],
        },
        // dataLabels: {
        //   enabled: false,
        // },
        fill: {
          colors: "#353a78",
        },
        title: {
          text: "Drives Statistics",
        },
      },
      series: [
        {
          name: "Total Number Of Rides",
          data: [200, 60, 40, 50, 55],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mixed-chart shadow aChart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="340"
          height="300"
        />
      </div>
    );
  }
}

export default AreaMobile;

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
