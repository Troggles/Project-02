const $b3btn = $("b3-btn");
const $bfbtn = $("bf-btn");
const $wtbtn = $("wt-btn");

function showB3Chart() {
  const chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Big Three Total Weight"
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
        dataPoints: [
          { label: "June", y: 10 },
          { label: "July", y: 15 },
          { label: "August", y: 25 },
          { label: "September", y: 30 },
          { label: "October", y: 28 }
        ]
      }
    ]
  });
  chart.render();
}

$b3btn.on("click", showB3Chart);

$(document).ready(() => {
  $b3btn.on("click", event => {
    event.preventDefault();

    $.ajax({
      method: "GET",
      url: "/api/"
    })
  })
})