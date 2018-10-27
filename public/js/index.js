// Get references to page elements
const $exampleText = $("#example-text");
const $exampleDescription = $("#example-description");
const $submitBtn = $("#submit");
const $exampleList = $("#example-list");
const $b3btn = $("#b3-btn");
const $bfbtn = $("#bf-btn");
const $wtbtn = $("#wt-btn");

// The API object contains methods for each kind of request we'll make
const API = {
  saveExample(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample(id) {
    return $.ajax({
      url: `api/examples/${id}`,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
const refreshExamples = () => {
  API.getExamples().then(data => {
    const $examples = data.map(example => {
      const $a = $("<a>")
        .text(example.text)
        .attr("href", `/example/${example.id}`);

      const $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      const $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// NOTE When writing jQuery event handlers, if we want `this` to refer to the
// DOM element, we cannot use arrow functions.
function handleFormSubmit(event) {
  event.preventDefault();

  const example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!"); // eslint-disable-line
    return;
  }

  API.saveExample(example).then(() => {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
}

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
function handleDeleteBtnClick() {
  const idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(() => {
    refreshExamples();
  });
}

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// Example Chart Script
// To be replaced with our charts

window.onload = function () {
  const chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Big Three Lift Totals"
    },
    axisY: {
      viewportMinimum: 500,
      viewportMaximum: 1000
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
        dataPoints: [
          { label: "June", y: 585 },
          { label: "July", y: 680 },
          { label: "August", y: 710 },
          { label: "September", y: 760 },
          { label: "October", y: 810 }
        ]
      }
    ]
  });
  chart.render();
};

function openBFChart() {
  const chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Body Fat %"
    },
    axisY: {
      viewportMinimum: 14,
      viewportMaximum: 21
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
        dataPoints: [
          { label: "June", y: 15 },
          { label: "July", y: 16 },
          { label: "August", y: 19 },
          { label: "September", y: 20 },
          { label: "October", y: 16 }
        ]
      }
    ]
  });
  chart.render();
}

function openWTChart() {
  const chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Body Weight"
    },
    axisY: {
      viewportMinimum: 170,
      viewportMaximum: 210
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
        dataPoints: [
          { label: "June", y: 180 },
          { label: "July", y: 185 },
          { label: "August", y: 185 },
          { label: "September", y: 190 },
          { label: "October", y: 200 }
        ]
      }
    ]
  });
  chart.render();
}
function openB3Chart() {
  const chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Big Three Lift Totals"
    },
    axisY: {
      viewportMinimum: 500,
      viewportMaximum: 1000
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "line",
        dataPoints: [
          { label: "June", y: 585 },
          { label: "July", y: 680 },
          { label: "August", y: 710 },
          { label: "September", y: 760 },
          { label: "October", y: 810 }
        ]
      }
    ]
  });
  chart.render();
};

$(document).ready(() => {
  $bfbtn.on("click", event => {
    event.preventDefault();
    $bfbtn.click(openBFChart());
  });
  $wtbtn.on("click", event => {
    event.preventDefault();
    $wtbtn.click(openWTChart());
  });
  $b3btn.on("click", event => {
    event.preventDefault();
    $b3btn.click(openB3Chart());
  });
});

// const btn= document.getElementById("bf-btn");
// btn.addEventListener("click", openBFChart);
