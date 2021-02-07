Chart.defaults.global.defaultFontColor = "Black";
Chart.defaults.global.defaultFontSize = 30;
Chart.defaults.global.defaultFontFamily = "Times New Roman";

export var ctx = document.getElementById("myChart").getContext("2d");
export var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [12, 19, 3, 5, 2, 3, 32, 4, 7, 11],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 32, 4, 7, 11],
        backgroundColor: "#546de5",
        borderColor: "Black",
        borderWidth: 0,
        // borderWidth: {
        //   top: 3,
        //   right: 3,
        //   bottom: 6,
        //   left: 3,
        // },
        // borderWidth
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
    },
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            drawOnChartArea: false,
          },
          display: false,
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },
  },
});
