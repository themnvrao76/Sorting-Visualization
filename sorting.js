import {
  bubblesort,
  Insertionsort,
  Selectionsort,
  Quicksort,
  mergesort,
} from "./Algorithms.js";
import { myChart, ctx } from "./bar.js";

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

export let counter = {
  value: 0,
};

export var anispeed = 1000;
export let randomcounter = {
  value: 0,
};

// ----------Function For Animation Speed Slider ----------

function rangeforani() {
  var speed = document.getElementById("ani").value;
  anispeed = speed;
  console.log(Math.abs(anispeed));
}

window.rangeforani = rangeforani;

// ---------- Functino For Array Size Slider ----------
var slider = 250 / 2;
function rangevalue() {
  if (randomcounter.value == 1) {
    return;
  }

  var rangeval = document.getElementById("range").value;
  slider = rangeval;
  const Array_len = slider;
  if (Array_len > 15 && Array_len < 30) {
    Chart.defaults.global.defaultFontSize = 40;
    console.log(Chart.defaults.global.defaultFontSize);
  }
  if (Array_len >= 30 && Array_len < 50) {
    Chart.defaults.global.defaultFontSize = 10;
  }
  if (Array_len >= 50) {
    Chart.defaults.global.defaultFontSize = 0.001;
  } else {
    Chart.defaults.global.defaultFontSize = 30;
  }

  var random_array = [];
  for (let i = 0; i < Array_len; i++) {
    random_array.push(Math.floor(Math.random() * slider + 1));
  }
  document.getElementById("creat").value = random_array;
  myChart.data.datasets[0].data = random_array;
  console.log(myChart.data.datasets[0].data.length);
  myChart.data.labels = random_array;
  myChart.data.datasets[0].backgroundColor = "#546de5";

  myChart.update();
}
window.rangevalue = rangevalue;

function random_array() {
  if (randomcounter.value == 1) {
    return;
  }
  const Array_len = slider;

  if (Array_len > 15 && Array_len < 30) {
    Chart.defaults.global.defaultFontSize = 40;
    console.log(Chart.defaults.global.defaultFontSize);
  }
  if (Array_len >= 30 && Array_len < 50) {
    Chart.defaults.global.defaultFontSize = 10;
  }
  if (Array_len >= 50) {
    Chart.defaults.global.defaultFontSize = 0.001;
  } else {
    Chart.defaults.global.defaultFontSize = 30;
  }

  var random_array = [];
  for (let i = 0; i < Array_len; i++) {
    random_array.push(Math.floor(Math.random() * slider + 1));
  }
  document.getElementById("creat").value = random_array;
  myChart.data.datasets[0].data = random_array;
  console.log(myChart.data.datasets[0].data.length);
  myChart.data.labels = random_array;
  myChart.data.datasets[0].backgroundColor = "#546de5";

  myChart.update();
}

window.random_array = random_array;

async function addarray() {
  var total = 0;
  counter.value++;

  if (counter.value > 1) {
    return;
  }

  var mydata = document.getElementById("creat").value.split(",").map(Number);
  for (let i = 0; i < mydata.length; i++) {
    total += mydata[i];
  }
  if (mydata.length > 350) {
    document.getElementById("invalid").style.display = "inline";
    document.getElementById("invalid").innerHTML =
      "Array size is too big Max 350";
    counter.value = 0;
  } else if (isNaN(total) == false) {
    if (mydata.length > 15 && mydata.length < 30) {
      Chart.defaults.global.defaultFontSize = 18;
    }
    if (mydata.length >= 30 && mydata.length < 50) {
      Chart.defaults.global.defaultFontSize = 10;
    }
    if (mydata.length >= 50) {
      Chart.defaults.global.defaultFontSize = 0.001;
    } else {
      Chart.defaults.global.defaultFontSize = 30;
    }

    myChart.data.datasets[0].data = mydata;
    myChart.data.labels = mydata;
    myChart.data.datasets[0].backgroundColor = "#546de5";
    document.getElementById("invalid").style.display = "none";
    myChart.update();
    await new Promise((resolve) => setTimeout(resolve, 700));
    var myarray = mydata;
    var x = document.querySelector(".active").textContent;
    if (x == "Bubble Sort") {
      bubblesort(myarray);
    } else if (x == "Insertion Sort") {
      Insertionsort(myarray);
    } else if (x == "Quick Sort") {
      Quicksort(myarray, 0, myarray.length - 1);
    } else if (x == "Selection Sort") {
      Selectionsort(myarray);
    } else if (x == "Merge Sort") {
      mergesort(myarray, 0, myarray.length - 1);
    }
  } else {
    document.getElementById("invalid").style.display = "inline";
    document.getElementById("invalid").innerHTML = "Please Write Valid Number";
    counter.value = 0;
  }
  console.log(myarray);
}

window.addarray = addarray;
