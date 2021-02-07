import { anispeed, counter, randomcounter } from "./sorting.js";
import { myChart, ctx } from "./bar.js";

// ---------------------------------Bubble Sort---------------------------------
export async function bubblesort(array) {
  document.getElementById("invalid").style.display = "none";
  randomcounter.value = 1;
  document.getElementById("range").disabled = true;
  let n = array.length;
  myChart.data.datasets[0].backgroundColor = Array(n).fill("#546de5");
  var flag = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = 1;

        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;

        myChart.data.datasets[0].backgroundColor[j] = "RED";
        myChart.data.datasets[0].backgroundColor[j + 1] = "GREEN";

        myChart.update();

        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));

        myChart.data.datasets[0].backgroundColor[j] = "#546de5";
        myChart.data.datasets[0].backgroundColor[j + 1] = "#546de5";
        myChart.update();
      } else {
        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;
        myChart.data.datasets[0].backgroundColor[j] = "GREEN";
        myChart.data.datasets[0].backgroundColor[j + 1] = "GREEN";
        myChart.update();
        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));

        myChart.data.datasets[0].backgroundColor[j] = "#546de5";
        myChart.data.datasets[0].backgroundColor[j + 1] = "#546de5";
        myChart.update();
      }
    }

    myChart.data.datasets[0].backgroundColor[n - i - 1] = "#ffa801";
    myChart.update();

    if (flag == 0) {
      i = n - 2;

      document.getElementById("invalid").style.display = "inline";
      document.getElementById("invalid").innerHTML = "It is Already Sorted";
    }
  }

  myChart.data.datasets[0].backgroundColor = "#2ecc71";
  myChart.update();
  await new Promise((resolve) => setTimeout(resolve, 1500));
  myChart.data.datasets[0].backgroundColor = "#ffa801";
  myChart.update();
  counter.value = 0;
  randomcounter.value = 0;
  document.getElementById("range").disabled = false;
}

// ---------------------------------Insertionsort---------------------------------
export async function Insertionsort(array) {
  randomcounter.value = 1;
  document.getElementById("range").disabled = true;
  let n = array.length;
  myChart.data.datasets[0].backgroundColor = Array(n).fill("#546de5");

  for (let i = 1; i < n; i++) {
    let j = i - 1;
    var x = array[i];
    while (j > -1 && array[j] > x) {
      array[j + 1] = array[j];
      array[j] = x;

      myChart.data.datasets[0].data = array;
      myChart.data.labels = array;

      myChart.data.datasets[0].backgroundColor[j] = "RED";
      myChart.data.datasets[0].backgroundColor[j + 1] = "GREEN";

      myChart.update();

      await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));

      myChart.data.datasets[0].backgroundColor[j] = "#546de5";
      myChart.data.datasets[0].backgroundColor[j + 1] = "#546de5";
      myChart.update();
      j--;
    }
    array[j + 1] = x;

    myChart.update();
  }
  myChart.data.datasets[0].backgroundColor = "#2ecc71";
  myChart.update();
  await new Promise((resolve) => setTimeout(resolve, 1500));
  myChart.data.datasets[0].backgroundColor = "#ffa801";
  myChart.update();
  counter.value = 0;
  randomcounter.value = 0;
  document.getElementById("range").disabled = false;
}
// ---------------------------------Selectionsort---------------------------------

export async function Selectionsort(array) {
  randomcounter.value = 1;
  document.getElementById("range").disabled = true;
  let n = array.length;
  myChart.data.datasets[0].backgroundColor = Array(n).fill("#546de5");
  var i, j, k;
  for (i = 0; i < n - 1; i++) {
    for (j = k = i; j < n; j++) {
      var t = k;
      myChart.data.datasets[0].data = array;
      myChart.data.labels = array;
      myChart.data.datasets[0].backgroundColor[k] = "RED";
      myChart.data.datasets[0].backgroundColor[j] = "GREEN";
      myChart.update();

      if (array[j] < array[k]) {
        myChart.data.datasets[0].backgroundColor[t] = "#546de5";
        k = j;
        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;
        myChart.data.datasets[0].backgroundColor[j] = "RED";
        myChart.update();
        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
        myChart.data.datasets[0].backgroundColor[j] = "#546de5";

        myChart.update();
      } else {
        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;
        myChart.data.datasets[0].backgroundColor[j] = "GREEN";
        myChart.update();
        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
        myChart.data.datasets[0].backgroundColor[j] = "#546de5";

        myChart.update();
      }
    }
    var temp = array[i];
    array[i] = array[k];
    array[k] = temp;
    myChart.data.datasets[0].data = array;
    myChart.data.labels = array;
    myChart.data.datasets[0].backgroundColor[k] = "RED";
    myChart.data.datasets[0].backgroundColor[i] = "RED";
    myChart.update();
    await new Promise((resolve) => setTimeout(resolve, 20));
    myChart.data.datasets[0].backgroundColor[k] = "#546de5";
    myChart.data.datasets[0].backgroundColor[i] = "#546de5";
    // myChart.data.datasets[0].backgroundColor[n - i] = "#ffa801";
    myChart.update();
  }
  myChart.data.datasets[0].backgroundColor = "#2ecc71";
  myChart.update();
  await new Promise((resolve) => setTimeout(resolve, 1500));
  myChart.data.datasets[0].backgroundColor = "#ffa801";
  myChart.update();
  counter.value = 0;
  randomcounter.value = 0;
  document.getElementById("range").disabled = false;
}
// ------------------------------Quicksort-------------------------------
function is_array_sorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i + 1] > arr[i]) {
      continue;
    } else if (arr[i + 1] && arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}
export async function Quicksort(array, low, high) {
  randomcounter.value = 1;
  document.getElementById("range").disabled = true;
  let n = array.length;
  myChart.data.datasets[0].backgroundColor = Array(n).fill("#546de5");

  if (low < high) {
    let pivot = array[low];

    let pivotindex = low;

    let i = low + 1;
    let j = high;
    myChart.data.datasets[0].data = array;
    myChart.data.labels = array;
    myChart.data.datasets[0].backgroundColor[i] = "GREEN";
    myChart.data.datasets[0].backgroundColor[j] = "GREEN";
    myChart.data.datasets[0].backgroundColor[pivotindex] = "RED";
    for (let i = 0; i < pivotindex; i++) {
      myChart.data.datasets[0].backgroundColor[i] = "ORANGE";
    }

    myChart.update();

    await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
    myChart.data.datasets[0].backgroundColor[i] = "#546de5";
    myChart.data.datasets[0].backgroundColor[j] = "#546de5";
    myChart.update();

    do {
      while (array[i] <= pivot) {
        i++;
        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;
        myChart.data.datasets[0].backgroundColor[i] = "GREEN";
        myChart.data.datasets[0].backgroundColor[j] = "GREEN";
        myChart.data.datasets[0].backgroundColor[pivotindex] = "RED";
        myChart.update();
        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
        myChart.data.datasets[0].backgroundColor[i] = "#546de5";
        myChart.data.datasets[0].backgroundColor[j] = "#546de5";
      }
      while (array[j] > pivot) {
        j--;

        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;
        myChart.data.datasets[0].backgroundColor[i] = "GREEN";
        myChart.data.datasets[0].backgroundColor[j] = "GREEN";
        myChart.data.datasets[0].backgroundColor[pivotindex] = "RED";
        myChart.update();
        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
        myChart.data.datasets[0].backgroundColor[i] = "#546de5";
        myChart.data.datasets[0].backgroundColor[j] = "#546de5";
        myChart.update();
      }
      if (i < j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        myChart.data.datasets[0].data = array;
        myChart.data.labels = array;
        myChart.data.datasets[0].backgroundColor[i] = "GREEN";
        myChart.data.datasets[0].backgroundColor[j] = "GREEN";
        myChart.data.datasets[0].backgroundColor[pivotindex] = "RED";
        myChart.update();
        await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
        myChart.data.datasets[0].backgroundColor[i] = "#546de5";
        myChart.data.datasets[0].backgroundColor[j] = "#546de5";
        myChart.update();
      }
    } while (i < j);

    let temp = array[j];
    array[j] = array[low];
    array[low] = temp;

    myChart.data.datasets[0].data = array;
    myChart.data.labels = array;
    myChart.data.datasets[0].backgroundColor[i] = "GREEN";
    myChart.data.datasets[0].backgroundColor[j] = "GREEN";
    myChart.data.datasets[0].backgroundColor[pivotindex] = "RED";
    myChart.update();
    await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
    myChart.data.datasets[0].backgroundColor[i] = "#546de5";
    myChart.data.datasets[0].backgroundColor[j] = "#546de5";
    myChart.data.datasets[0].backgroundColor[pivotindex] = "#546de5";

    myChart.update();
    await Promise.all([
      await Quicksort(array, low, j - 1),
      await Quicksort(array, j + 1, high),
    ]);
  } else if (is_array_sorted(array) == true) {
    myChart.data.datasets[0].backgroundColor = "#2ecc71";
    myChart.update();
    counter.value = 0;
    randomcounter.value = 0;
    document.getElementById("range").disabled = false;
    myChart.data.datasets[0].backgroundColor = "#ffa801";
    await new Promise((resolve) => setTimeout(resolve, 500));

    myChart.update();

    return;
  }
}

async function Merge(a, low, high, mid) {
  var i = low;
  var j = mid + 1;
  var k = low;
  var c = new Array(350).fill(0);

  while (i <= mid && j <= high) {
    if (a[i] < a[j]) {
      c[k] = a[i];
      myChart.data.datasets[0].data = a;
      myChart.data.labels = a;
      myChart.data.datasets[0].backgroundColor[low] = "GREEN";
      myChart.data.datasets[0].backgroundColor[high] = "GREEN";
      myChart.data.datasets[0].backgroundColor[mid] = "RED";
      myChart.update();
      await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));

      k++;
      i++;
    } else {
      c[k] = a[j];
      myChart.data.datasets[0].data = a;
      myChart.data.labels = a;
      myChart.data.datasets[0].backgroundColor[low] = "GREEN";
      myChart.data.datasets[0].backgroundColor[high] = "GREEN";
      myChart.data.datasets[0].backgroundColor[mid] = "RED";
      myChart.update();
      await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));

      k++;
      j++;
    }
  }
  while (i <= mid) {
    c[k++] = a[i++];
  }
  while (j <= high) {
    c[k++] = a[j++];
  }
  for (let t = low; t <= high; t++) {
    a[t] = c[t];
  }
  myChart.data.datasets[0].data = a;
  myChart.data.labels = a;
  myChart.data.datasets[0].backgroundColor[low] = "GREEN";
  myChart.data.datasets[0].backgroundColor[high] = "GREEN";
  myChart.data.datasets[0].backgroundColor[mid] = "RED";
  myChart.update();
  await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
}

export async function mergesort(a, low, high) {
  randomcounter.value = 1;
  document.getElementById("range").disabled = true;
  let n = a.length;
  myChart.data.datasets[0].backgroundColor = Array(n).fill("#546de5");

  if (low < high) {
    var mid = Math.floor((low + high) / 2);
    myChart.data.datasets[0].data = a;
    myChart.data.labels = a;
    myChart.data.datasets[0].backgroundColor[low] = "GREEN";
    myChart.data.datasets[0].backgroundColor[high] = "GREEN";
    myChart.data.datasets[0].backgroundColor[mid] = "RED";
    myChart.update();
    await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));

    await mergesort(a, low, mid);
    await mergesort(a, mid + 1, high);
    myChart.data.datasets[0].data = a;
    myChart.data.labels = a;
    myChart.data.datasets[0].backgroundColor[low] = "GREEN";
    myChart.data.datasets[0].backgroundColor[high] = "GREEN";
    myChart.data.datasets[0].backgroundColor[mid] = "RED";
    myChart.update();
    await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
    await Merge(a, low, high, mid);

    if (is_array_sorted(a) == true) {
      myChart.data.datasets[0].backgroundColor = "#2ecc71";
      myChart.update();
      counter.value = 0;
      randomcounter.value = 0;
      document.getElementById("range").disabled = false;
      myChart.data.datasets[0].backgroundColor = "#ffa801";
      await new Promise((resolve) => setTimeout(resolve, 500));

      myChart.update();

      return;
    }
    myChart.data.datasets[0].data = a;
    myChart.data.labels = a;
    myChart.data.datasets[0].backgroundColor[low] = "GREEN";
    myChart.data.datasets[0].backgroundColor[high] = "GREEN";
    myChart.data.datasets[0].backgroundColor[mid] = "RED";
    myChart.update();
    await new Promise((resolve) => setTimeout(resolve, Math.abs(anispeed)));
    myChart.data.datasets[0].backgroundColor[low] = "#546de5";
    myChart.data.datasets[0].backgroundColor[high] = "#546de5";
    myChart.data.datasets[0].backgroundColor[mid] = "#546de5";
    myChart.update();
  }
}
